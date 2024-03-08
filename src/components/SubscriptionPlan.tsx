const SubscriptionPlan = async ({ id }: { id: string }) => {
  return (
    <section className="mx-auto rounded-xl border-2 p-4">
      <div>
        Current Subscription Plan: <span className="font-bold">{id}</span>
      </div>
      <div>Since: </div>
    </section>
  );
};
export default SubscriptionPlan;
