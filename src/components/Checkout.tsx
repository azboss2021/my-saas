"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";
import {
  checkoutCredits,
  checkoutDigitalProduct,
  checkoutOneTime,
  checkoutPhysicalProduct,
  checkoutSubscription,
} from "@/lib/actions";
import { Button } from "./ui/button";
import { PRODUCT_TYPE } from "@/lib/constants";

const Checkout = ({
  product,
  amount,
  credits,
  buyerId,
  monthly,
}: {
  product: string;
  amount: number;
  buyerId: string;
  credits?: number;
  monthly?: boolean;
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
    if (PRODUCT_TYPE === "credits") {
      const transaction = {
        product,
        amount,
        credits,
        buyerId,
      };

      await checkoutCredits(transaction);
    } else if (PRODUCT_TYPE === "subscription") {
      const transaction = {
        product,
        amount,
        monthly,
        buyerId,
      };

      await checkoutSubscription(transaction);
    } else if (PRODUCT_TYPE === "one_time") {
      const transaction = {
        product,
        amount,
        buyerId,
      };

      await checkoutOneTime(transaction);
    } else if (PRODUCT_TYPE === "physical_product") {
      const transaction = {
        product,
        amount,
        buyerId,
      };

      await checkoutPhysicalProduct(transaction);
    } else {
      const transaction = {
        product,
        amount,
        buyerId,
      };

      await checkoutDigitalProduct(transaction);
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
