"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import {
  checkoutCredits,
  checkoutDigitalProduct,
  checkoutOneTime,
  checkoutPhysicalProduct,
  checkoutSubscription,
} from "@/lib/actions";
import { PRICE_HIERARCHY, PRODUCT_TYPE } from "@/lib/constants";
import LoadingButton from "./LoadingButton";
import { FaPaperPlane } from "react-icons/fa";

const Checkout = ({
  product,
  amount,
  credits,
  buyerId,
  monthly,
  subscriptionPlan,
}: {
  product: string;
  amount: number;
  buyerId: string;
  credits?: number;
  monthly?: boolean;
  subscriptionPlan?: string;
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  let output = "Get Now";
  if (subscriptionPlan) {
    if (
      PRICE_HIERARCHY.indexOf(subscriptionPlan) <
        PRICE_HIERARCHY.indexOf(product) &&
      subscriptionPlan !== "Free"
    ) {
      output = "Upgrade Now";
    } else if (
      PRICE_HIERARCHY.indexOf(subscriptionPlan) ==
      PRICE_HIERARCHY.indexOf(product)
    ) {
      output = "Already Owned";
    }
  }

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
    setLoading(true);

    if (PRODUCT_TYPE === "subscription") {
      const transaction = {
        product,
        amount,
        monthly,
        buyerId,
      };

      await checkoutSubscription(transaction);
    } else if (PRODUCT_TYPE === "credits") {
      const transaction = {
        product,
        amount,
        credits,
        buyerId,
      };

      await checkoutCredits(transaction);
    } else if (PRODUCT_TYPE === "one_time") {
      const transaction = {
        product,
        amount,
        credits,
        buyerId,
      };

      await checkoutOneTime(transaction);
    }

    setLoading(false);
    // if (PRODUCT_TYPE === "credits") {
    //   const transaction = {
    //     product,
    //     amount,
    //     credits,
    //     buyerId,
    //   };

    //   await checkoutCredits(transaction);
    // } else if (PRODUCT_TYPE === "subscription") {
    //   const transaction = {
    //     product,
    //     amount,
    //     monthly,
    //     buyerId,
    //   };

    //   await checkoutSubscription(transaction);
    // } else if (PRODUCT_TYPE === "one_time") {
    //   const transaction = {
    //     product,
    //     amount,
    //     buyerId,
    //   };

    //   await checkoutOneTime(transaction);
    // } else if (PRODUCT_TYPE === "physical_product") {
    //   const transaction = {
    //     product,
    //     amount,
    //     buyerId,
    //   };

    //   await checkoutPhysicalProduct(transaction);
    // } else {
    //   const transaction = {
    //     product,
    //     amount,
    //     buyerId,
    //   };

    //   await checkoutDigitalProduct(transaction);
    // }
  };

  return (
    <form action={onCheckout}>
      <section>
        <LoadingButton
          type="submit"
          role="link"
          className="w-full rounded-full font-semibold"
          loading={loading}
          disabled={
            subscriptionPlan === product ||
            PRICE_HIERARCHY.indexOf(subscriptionPlan!) >
              PRICE_HIERARCHY.indexOf(product)
          }
        >
          {output} <FaPaperPlane className="ml-2" />
        </LoadingButton>
      </section>
    </form>
  );
};

export default Checkout;
