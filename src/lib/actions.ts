"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "./mongoose";
import { handleError } from "./utils";
import { Transaction, User } from "./models";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { CheckoutTransactionParams, CreateTransactionParams } from "./types";

// CREATE
export async function createUser({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  try {
    await connectToDatabase();

    const newUser = await User.create({ name, email, image });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserByEmail(email: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function getPlanNum(email: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    return user.planId;
  } catch (error) {
    handleError(error);
  }
}

export async function checkUserExists(email: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (user) return user;

    return null;
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(email: string, name: string, image: string) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { name, image },
      {
        new: true,
      },
    );

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(email: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ email });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
export async function updateCredits(id: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { id },
      { $inc: { creditBalance: creditFee } },
      { new: true },
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

// STRIPE
export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

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
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/billing`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  redirect(session.url!);
}

export async function subscribe(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

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
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/billing`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  redirect(session.url!);
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    await connectToDatabase();

    // create a new transaction with a buyerId
    const newTransaction = await Transaction.create({
      ...transaction,
      buyer: transaction.buyerId,
    });

    await updateCredits(transaction.buyerId, transaction.credits);

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
