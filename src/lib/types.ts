// STRIPE
export type CheckoutCreditsTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

export type CheckoutSubscriptionTransactionParams = {
  plan: string;
  amount: number;
  buyerId: string;
  monthly?: boolean;
};

export type CreateTransactionParams = {
  stripeId: string;
  subscriptionId?: string;
  amount: number;
  credits?: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};
