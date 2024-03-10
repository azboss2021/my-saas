import Navbar from "@/components/Navbar";
import InfoBanner from "@/components/InfoBanner";
import { getUserByEmail } from "@/lib/actions";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import type { Metadata } from "next";
import { SAAS_DESCRIPTION, SAAS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SAAS_NAME} - Dashboard`,
  description: SAAS_DESCRIPTION,
};

const AccountPage = async () => {
  const session = await getServerSession(options);
  const user = await getUserByEmail(session?.user?.email as string);

  return (
    <>
      <InfoBanner />
      <div className="border-b">
        <Navbar />
      </div>

      <section className="mx-auto flex max-w-3xl flex-col gap-8 p-8"></section>
    </>
  );
};
export default AccountPage;
