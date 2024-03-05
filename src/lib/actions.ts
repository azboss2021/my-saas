"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "./mongoose";
import { handleError } from "./utils";
import { User } from "./models";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

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
export async function updateCredits(email: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { email },
      { $inc: { creditBalance: creditFee } },
      { new: true },
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}
