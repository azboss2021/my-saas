import Navbar from "@/components/Navbar";
import InfoBanner from "@/components/InfoBanner";
import { getPlanNum } from "@/lib/actions";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const AccountPage = async () => {
  const session = await getServerSession(options);
  const planNum = await getPlanNum(session?.user?.email as string);
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
