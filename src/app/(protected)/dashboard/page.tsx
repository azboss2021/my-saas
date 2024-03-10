import InfoBanner from "@/components/InfoBanner";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { SAAS_DESCRIPTION, SAAS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SAAS_NAME} - Dashboard`,
  description: SAAS_DESCRIPTION,
};

const DashboardPage = async () => {
  return (
    <>
      {/* <ConfettiComponent createdAt={user.createdAt} /> */}
      <InfoBanner />
      <div className="border-b">
        <Navbar />
      </div>

      <section className="mx-auto max-w-7xl p-8">DashboardPage</section>
    </>
  );
};
export default DashboardPage;
