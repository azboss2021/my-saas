"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "./mongoose";
import { handleError } from "./utils";
import { Transaction, User } from "./models";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import {
  CheckoutCreditsTransactionParams,
  CheckoutSubscriptionTransactionParams,
  CreateTransactionParams,
} from "./types";
import { PAYMENT_TYPE } from "./constants";

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

export async function getPlan(email: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    return user.plan;
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

export async function updateCredits(id: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: id },
      { $inc: { creditBalance: creditFee } },
      { new: true },
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

export async function updatePlan(id: string, plan: string) {
  try {
    await connectToDatabase();

    const updatedUserPlan = await User.findOneAndUpdate(
      { _id: id },
      { plan },
      { new: true },
    );

    if (!updatedUserPlan) throw new Error("User plan update failed");

    return JSON.parse(JSON.stringify(updatedUserPlan));
  } catch (error) {
    handleError(error);
  }
}

// STRIPE
export async function checkoutCredits(
  transaction: CheckoutCreditsTransactionParams,
) {
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
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  redirect(session.url!);
}

export async function checkoutSubscription(
  transaction: CheckoutSubscriptionTransactionParams,
) {
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
          recurring: {
            interval: transaction.monthly ? "month" : "year",
            interval_count: 1,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      plan: transaction.plan,
      buyerId: transaction.buyerId,
    },
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/billing`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  redirect(session.url!);
}

export async function cancelSubscription({
  subscriptionId,
}: {
  subscriptionId: string;
}) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const canceledSubscription = await stripe.subscriptions.update(
    subscriptionId,
    {
      cancel_at_period_end: true, // Cancels the subscription at the end of the current period
    },
  );

  revalidatePath("/plan");

  return canceledSubscription;
}

export async function getLatestSubscription({ email }: { email: string }) {
  try {
    await connectToDatabase();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const user = await getUserByEmail(email);

    const latestTransaction = await Transaction.findOne({ buyer: user._id })
      .sort({ createdAt: -1 })
      .exec();

    console.log(latestTransaction);

    if (latestTransaction && latestTransaction.subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(
        latestTransaction.subscriptionId,
      );

      return subscription;
    } else return null;
  } catch (error) {
    handleError(error);
  }
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    await connectToDatabase();

    // create a new transaction with a buyerId
    const newTransaction = await Transaction.create({
      ...transaction,
      buyer: transaction.buyerId,
    });

    if (PAYMENT_TYPE === "credits") {
      await updateCredits(transaction.buyerId, transaction.credits as number);
    } else if (PAYMENT_TYPE === "subscription") {
      console.log("HERE");
      await updatePlan(transaction.buyerId, transaction.plan);
    }

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
