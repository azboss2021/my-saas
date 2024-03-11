// STRIPE
export type TransactionParams = {
  product: string;
  amount: number;
  buyerId: string;
  credits?: number;
  monthly?: boolean;
};

export type CreateTransactionParams = {
  stripeId: string;
  buyerId: string;
  amount: number;
  product: string;
  subscriptionId?: string;
  credits?: number;
  createdAt: Date;
};

export type DatabaseTransaction = {
  stripeId: string;
  buyerId: string;
  amount: number;
  product?: string;
  subscriptionId?: string;
  credits?: number;
  createdAt: Date;
};
