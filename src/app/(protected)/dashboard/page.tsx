import { options } from "@/app/api/auth/[...nextauth]/options";
import ConfettiComponent from "@/components/ConfettiComponent";
import InfoBanner from "@/components/InfoBanner";
import Navbar from "@/components/Navbar";
import { getUserByEmail } from "@/lib/actions";
import { getServerSession } from "next-auth";
const DashboardPage = async () => {
  const session = await getServerSession(options);

  const user = await getUserByEmail(session?.user?.email as string);

  const showBanner = user.planId === 1;
  const newUser =
    user.createdAt && Date.now() - new Date(user.createdAt).getTime() <= 10000;

  return (
    <>
      {newUser && <ConfettiComponent />}
      {showBanner && (
        <InfoBanner
          content={"🚀 More features on Pro"}
          buttonContent={"Go Pro"}
          link={"/pro"}
        />
      )}
      <div className="border-b">
        <Navbar />
      </div>
      <section className="mx-auto max-w-7xl p-8">DashboardPage</section>
    </>
  );
};
export default DashboardPage;
