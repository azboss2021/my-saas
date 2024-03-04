import InfoBanner from "@/components/InfoBanner";
import Navbar from "@/components/Navbar";
import { getPlanNum } from "@/lib/action";

const BillingPage = async () => {
  const planNum = await getPlanNum();
  const showBanner = planNum === 1;

  return (
    <>
      {showBanner && (
        <InfoBanner
          content={"🚀 Check out more features here"}
          buttonContent={"Go Pro"}
          link={"/pro"}
        />
      )}
      <div className="border-b">
        <Navbar />
      </div>
      <section className="mx-auto max-w-7xl p-8">Billing</section>
    </>
  );
};
export default BillingPage;
