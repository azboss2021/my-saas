"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "./prisma";

// USER
export async function getPlanNum() {
  const session = await getServerSession(options);

  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email as string },
  });

  if (!user) throw Error("User not found");

  return user.planId;
}

// STRIPE
// export async function checkoutCredits(transaction: CheckoutTransactionParams) {

// }
