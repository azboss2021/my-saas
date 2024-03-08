import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUserByEmail } from "@/lib/actions";
import { PAYMENT_TYPE, PRICING_SUBTITLE } from "@/lib/constants";
import SubscriptionPricing from "./SubscriptionPricing";
import SubscriptionPlan from "./SubscriptionPlan";

const Pricing = async ({ className }: { className?: string }) => {
  const session = await getServerSession(options);
  const user = await getUserByEmail(session?.user?.email as string);

  return (
    <section
      id="pricing"
      // className={cn(
      //   `mx-auto flex w-full max-w-7xl flex-col gap-4 px-8 py-4`,
      //   className,
      // )}
    >
      {/* <div className="flex flex-col items-center gap-4">
        <div className="mx-auto flex flex-col gap-2">
          <h3 className="title">Pricing</h3>
          <p className="subtitle">{PRICING_SUBTITLE}</p>
        </div>
      </div>
      <HomeCTAExtraInfo /> */}
      {PAYMENT_TYPE === "subscription" && (
        <div className="flex flex-col gap-16">
          <SubscriptionPlan plan={user.plan} email={user.email} />
          <SubscriptionPricing id={user._id} />
        </div>
      )}
      {/* {PAYMENT_TYPE === "credits" && (
        <div>
          <SubscriptionPlan />
          <SubscriptionPricing id={user._id} />
        </div>
      )} */}
    </section>
  );
};
export default Pricing;
