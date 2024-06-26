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
    subscriptionId: {
      type: String,
    },
    credits: {
      type: Number,
      default: 0,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    emailSentAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

// ===== Deleted Users to Track Transactions =====
const DeletedUserSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ===== Mailing List =====
const MailSubscriberSchema = new Schema(
  {
    userEmail: {
      type: String,
      unique: true,
    },
    subscribed: {
      type: Boolean,
      default: true,
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
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  product: {
    type: String,
  },
  subscriptionId: {
    type: String,
  },
  credits: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models?.User || model("User", UserSchema);
const DeletedUser =
  models?.DeletedUser || model("DeletedUser", DeletedUserSchema);
const MailSubscriber =
  models?.MailSubscriber || model("MailSubscriber", MailSubscriberSchema);
const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export { User, DeletedUser, MailSubscriber, Transaction };
