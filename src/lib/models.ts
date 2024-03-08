import { Schema, model, models } from "mongoose";

// ===== USER =====
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      default: "Free",
    },
    creditBalance: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true },
);

// ===== TRANSACTION =====
const TransactionSchema = new Schema({
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  subscriptionId: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  product: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models?.User || model("User", UserSchema);
const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export { User, Transaction };
