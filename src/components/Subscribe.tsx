"use client";

import { subscribe } from "@/lib/actions";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useToast } from "@/components/ui/use-toast";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {
  const { toast } = useToast();

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      toast({
        title: "Order placed!",
        description: "You will receive an email confirmation",
        duration: 5000,
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled!",
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
      });
    }
  }, []);

  const onCheckout = async () => {
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };

    await subscribe(transaction);
  };

  return (
    <form action={onCheckout}>
      <Button
        type="submit"
        role="link"
        className="w-full rounded-full font-semibold"
      >
        Buy Credit
      </Button>
    </form>
  );
};
export default Checkout;
