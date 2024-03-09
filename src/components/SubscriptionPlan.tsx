import { getSubscription, getTransactionBySubscriptionId } from "@/lib/actions";
import { convertToShortDate, getCurrencySymbol } from "@/lib/utils";
import LogoImage from "./LogoImage";
import SubscriptionButtons from "./SubscriptionButtons";

const SubscriptionPlan = async ({
  id,
  plan,
  subscriptionId,
}: {
  id: string;
  plan: string;
  subscriptionId?: string;
}) => {
  if (!subscriptionId || plan === "Free") {
    return (
      <section className="mx-auto flex w-full justify-between rounded-xl border-2 p-4">
        <div className="flex flex-col">
          <span className="text-sm">Your Plan</span>{" "}
          <div>
            <span className="text-2xl font-extrabold">{plan}</span>
          </div>
        </div>
        <LogoImage />
      </section>
    );
  }

  const subscription = await getSubscription(subscriptionId);
  const transaction = await getTransactionBySubscriptionId(subscriptionId);

  const price = (transaction.amount / 100).toFixed(2);
  const currencyType = subscription?.currency;
  const currencySymbol = currencyType
    ? getCurrencySymbol(currencyType.toUpperCase())
    : undefined;
  const interval = subscription?.items.data[0].plan.interval;
  const periodEnd = convertToShortDate(
    subscription?.current_period_end as number,
  );

  return (
    <section className="mx-auto flex w-full flex-col gap-2 rounded-xl border-2 p-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Your Plan</span>{" "}
            <div>
              <span className="text-2xl font-extrabold">{plan}</span>
            </div>
          </div>
          <LogoImage />
        </div>
        <div>
          <span className="font-bold">
            {currencySymbol ? currencySymbol : currencyType?.toUpperCase()}
            {price} / {interval}
          </span>
        </div>
        <div>
          {subscription?.cancel_at_period_end
            ? "Your plan ends on "
            : "Your plan renews on "}

          <span className="font-bold">{periodEnd}</span>
        </div>
      </div>

      <SubscriptionButtons
        cancel={subscription?.cancel_at_period_end as boolean}
        periodEnd={periodEnd}
        subscriptionId={subscriptionId}
      />
    </section>
  );
};
export default SubscriptionPlan;
