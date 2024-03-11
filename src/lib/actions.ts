"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "./mongoose";
import { handleError } from "./utils";
import { Transaction, User } from "./models";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { CreateTransactionParams, TransactionParams } from "./types";
import { PRODUCT_TYPE, UPDATE_SUBSCRIPTION_REVALIDATE_PATH } from "./constants";

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

export async function increaseCredits(id: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: id },
      { $inc: { credits: creditFee } },
      { new: true },
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

// STRIPE
export async function checkoutCredits(transaction: TransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const amount = Number(transaction.amount);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: transaction.product,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      product: transaction.product,
      credits: transaction.credits as number,
      buyerId: transaction.buyerId,
    },
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
  });
  redirect(session.url!);
}

export async function checkoutSubscription(transaction: TransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const amount = Number(transaction.amount);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: transaction.product,
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
      product: transaction.product,
      buyerId: transaction.buyerId,
    },
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
  });

  redirect(session.url!);
}

export async function checkoutOneTime(transaction: TransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const amount = Number(transaction.amount);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: transaction.product,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      product: transaction.product,
      buyerId: transaction.buyerId,
    },
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/plan`,
  });
  redirect(session.url!);
}

export async function checkoutPhysicalProduct(transaction: TransactionParams) {}

export async function checkoutDigitalProduct(transaction: TransactionParams) {}

export async function endSubscription(subscriptionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const canceledSubscription = await stripe.subscriptions.update(
    subscriptionId,
    {
      cancel_at_period_end: true,
    },
  );

  return canceledSubscription;
}

export async function continueSubscription(subscriptionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const continueSubscription = await stripe.subscriptions.update(
    subscriptionId,
    {
      cancel_at_period_end: false,
    },
  );

  return continueSubscription;
}

export async function getSubscription(subscriptionId: string) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    if (subscription) return subscription;
    else return null;
  } catch (error) {
    handleError(error);
  }
}

export async function getTransactionBySubscriptionId(subscriptionId: string) {
  try {
    await connectToDatabase();
    const transaction = await Transaction.findOne({ subscriptionId });
    if (transaction) return transaction;
    else return null;
  } catch (error) {
    handleError(error);
  }
}

// export async function updatePlan(id: string, plan: string) {
//   try {
//     await connectToDatabase();
//     const updatedUserPlan = await User.findOneAndUpdate(
//       { _id: id },
//       { plan },
//       { new: true },
//     );
//     if (!updatedUserPlan) throw new Error("User plan update failed");
//     return JSON.parse(JSON.stringify(updatedUserPlan));
//   } catch (error) {
//     handleError(error);
//   }
// }

export async function updateSubscription(
  id: string,
  subscriptionId: string,
  plan: string,
) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { plan, subscriptionId },
      { new: true },
    );
    if (!updatedUser)
      throw new Error("User plan and subscription update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function updatePlan(id: string, plan: string) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { plan },
      { new: true },
    );
    if (!updatedUser) throw new Error("User plan update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    await connectToDatabase();

    const newTransaction = await Transaction.create({
      ...transaction,
    });
    if (PRODUCT_TYPE === "subscription" && transaction.subscriptionId) {
      await updateSubscription(
        transaction.buyerId,
        transaction.subscriptionId,
        transaction.product,
      );
    } else if (PRODUCT_TYPE === "credits" && transaction.credits) {
      await increaseCredits(transaction.buyerId, transaction.credits as number);
    } else if (PRODUCT_TYPE === "one_time") {
      await updatePlan(transaction.buyerId, transaction.product);
    }
    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
