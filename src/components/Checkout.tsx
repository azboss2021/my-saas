"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";
import { checkoutCredits, checkoutSubscription } from "@/lib/actions";
import { Button } from "./ui/button";
import { PAYMENT_TYPE } from "@/lib/constants";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
  monthly,
  paymentType,
}: {
  plan: string;
  amount: number;
  credits?: number;
  buyerId: string;
  monthly?: boolean;
  paymentType: string;
}) => {
  const { toast } = useToast();

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast({
        title: "Order placed!",
        description: "You will receive an email confirmation",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled!",
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, []);

  const onCheckout = async () => {
    if (PAYMENT_TYPE === "credits") {
      const transaction = {
        plan,
        amount,
        credits,
        buyerId,
      };

      await checkoutCredits(transaction);
    } else if (PAYMENT_TYPE === "subscription") {
      const transaction = {
        plan,
        amount,
        monthly,
        buyerId,
      };

      await checkoutSubscription(transaction);
    }
  };

  return (
    <form action={onCheckout}>
      <section>
        <Button
          type="submit"
          role="link"
          className="w-full rounded-full font-semibold"
        >
          Buy Credit
        </Button>
      </section>
    </form>
  );
};

export default Checkout;
