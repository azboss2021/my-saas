import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUserByEmail } from "@/lib/actions";
import { PRICING_SUBTITLE, PRODUCT_TYPE } from "@/lib/constants";
import SubscriptionPricing from "./SubscriptionPricing";
import SubscriptionPlan from "./SubscriptionPlan";
import CreditPlan from "./CreditPlan";
import CreditPricing from "./CreditPricing";

const Pricing = async ({ className }: { className?: string }) => {
  const session = await getServerSession(options);
  const user = await getUserByEmail(session?.user?.email as string);

  return (
    <section className="pb-16">
      {PRODUCT_TYPE === "subscription" && (
        <div className="flex flex-col gap-16">
          <SubscriptionPlan
            id={user._id}
            plan={user.plan}
            subscriptionId={user.subscriptionId}
          />
          <SubscriptionPricing id={user._id} subscriptionPlan={user.plan} />
        </div>
      )}
      {PRODUCT_TYPE === "credits" && (
        <div className="flex flex-col gap-16">
          <CreditPlan />
          <CreditPricing />
        </div>
      )}
      {/* {PRODUCT_TYPE === "credits" && (
        <div>
          <SubscriptionPlan />
          <SubscriptionPricing id={user._id} />
        </div>
      )} */}
    </section>
  );
};
export default Pricing;
