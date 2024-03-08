import { getLatestSubscription } from "@/lib/actions";

const SubscriptionPlan = async ({
  plan,
  email,
}: {
  plan: string;
  email: string;
}) => {
  const subscription = await getLatestSubscription({ email });

  console.log(subscription);

  return (
    <section className="mx-auto rounded-xl border-2 p-4">
      <div>
        Current Subscription Plan: <span className="font-bold">{plan}</span>
      </div>
      <div>Since: </div>
    </section>
  );
};
export default SubscriptionPlan;
