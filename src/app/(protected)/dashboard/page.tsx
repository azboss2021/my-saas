import { options } from "@/app/api/auth/[...nextauth]/options";
import InfoBanner from "@/components/InfoBanner";
import Navbar from "@/components/Navbar";
import { getPlan } from "@/lib/actions";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { SAAS_DESCRIPTION, SAAS_NAME, SUBSCRIPTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SAAS_NAME} - Dashboard`,
  description: SAAS_DESCRIPTION,
};

const DashboardPage = async () => {
  return (
    <>
      {/* <ConfettiComponent createdAt={user.createdAt} /> */}
      <InfoBanner
        content={"🚀 More features on Pro"}
        buttonContent={"Go Pro"}
        link={"/pro"}
      />
      <div className="border-b">
        <Navbar />
      </div>

      <section className="mx-auto max-w-7xl p-8">DashboardPage</section>
    </>
  );
};
export default DashboardPage;
