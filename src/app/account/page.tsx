import Navbar from "@/components/Navbar";
import InfoBanner from "@/components/InfoBanner";
import { getPlanNum } from "@/lib/action";

const AccountPage = async () => {
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
      <section className="mx-auto max-w-7xl p-8">Account</section>
    </>
  );
};
export default AccountPage;
