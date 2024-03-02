"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "./prisma";
import Stripe from "stripe";
import { handleError } from "./utils";
import { redirect } from "next/navigation";

// ============== USER ==============
export async function createUser({
  email,
  image,
  name,
}: {
  email: string;
  image: string;
  name: string;
}) {
  try {
    const userExist = await getUser({ email });

    if (!userExist) {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          image,
        },
      });

      return Response.json({ newUser }, { status: 201 });
    } else {
      throw Error("User already exists");
    }
  } catch (error) {
    handleError(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function getUser({ email }: { email: string }) {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    return user;
  } catch (error) {
    handleError(error);
  }
}

export async function getPlanNum() {
  const session = await getServerSession(options);

  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email! },
  });

  if (!user) throw Error("User not found");

  return user.planId;
}

export async function updateCredits({
  userId,
  creditFee,
}: {
  userId: string;
  creditFee: number;
}) {
  try {
    const updatedUserCredits = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        creditBalance: { increment: creditFee },
      },
    });

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

// ============== STRIPE ==============
export async function checkoutCredits({
  transaction,
}: {
  transaction: {
    plan: string;
    credits: number;
    amount: number;
    buyerId: string;
  };
}) {
  const stripe = new Stripe(process.env.STRIPE_SECRET!);

  const amount = Number(transaction.amount) * 100;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: transaction.plan,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      plan: transaction.plan,
      credits: transaction.credits,
      buyerId: transaction.buyerId,
    },
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/profile`,
    cancel_url: `${process.env.NEXTAUTH_URL}/`,
  });

  redirect(session.url!);
}

export async function createTransaction({
  transaction,
}: {
  transaction: {
    stripeId: string;
    amount: number;
    plan: string;
    credits: number;
    buyerId: string;
  };
}) {
  try {
    const newTransaction = await prisma.transaction.create({
      data: {
        ...transaction,
        buyerId: transaction.buyerId,
      },
    });

    await updateCredits({
      userId: transaction.buyerId,
      creditFee: transaction.credits,
    });

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
