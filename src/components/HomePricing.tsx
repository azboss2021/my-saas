import { useRef } from "react";
import { useIsVisible } from "@/lib/hooks";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import HomeCTAButton from "./HomeCTAButton";
import { cn } from "@/lib/utils";
import DiscountLabel from "./DiscountLabel";
import OneTimePricing from "./OneTimePricing";
import CreditPricing from "./CreditPricing";
import SubscriptionPricing from "./SubscriptionPricing";
import { PRODUCT_TYPE } from "@/lib/constants";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUserByEmail } from "@/lib/actions";

// EDIT THESE
const subtitle = "Affordable Pricing For The Best SaaS You Can Get";

const HomePricing = async ({ className }: { className?: string }) => {
  const session = await getServerSession(options);
  const user = await getUserByEmail(session?.user?.email as string);

  return (
    <section
      id="pricing"
      className={cn(
        `mx-auto flex w-full max-w-7xl flex-col gap-16 px-8 py-20 lg:gap-24 lg:py-28`,
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="mx-auto flex flex-col gap-2">
          <h3 className="title">Pricing</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <section className="pb-16">
          {PRODUCT_TYPE === "subscription" && (
            <div className="flex flex-col gap-8">
              <DiscountLabel />
              <SubscriptionPricing />
            </div>
          )}
          {PRODUCT_TYPE === "credits" && (
            <div className="flex flex-col gap-8">
              <DiscountLabel />
              <CreditPricing />
            </div>
          )}
          {PRODUCT_TYPE === "one_time" && (
            <div className="flex flex-col gap-8">
              <DiscountLabel />
              <OneTimePricing />
            </div>
          )}
        </section>
      </div>
    </section>
  );
};
export default HomePricing;
