import Navbar from "@/components/Navbar";
import InfoBanner from "@/components/InfoBanner";
import { getPlan } from "@/lib/actions";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import type { Metadata } from "next";
import { SAAS_DESCRIPTION, SAAS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SAAS_NAME} - Dashboard`,
  description: SAAS_DESCRIPTION,
};

const AccountPage = async () => {
  return (
    <>
      <InfoBanner
        content={"🚀 More features on Pro"}
        buttonContent={"Go Pro"}
        link={"/pro"}
      />
      <div className="border-b">
        <Navbar />
      </div>

      <section className="mx-auto max-w-7xl p-8">Account</section>
    </>
  );
};
export default AccountPage;
