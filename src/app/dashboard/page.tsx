import InfoBanner from "@/components/InfoBanner";
import Navbar from "@/components/Navbar";

const DashboardPage = () => {
  return (
    <>
      <InfoBanner
        content={"🚀 Check out more features here"}
        buttonContent={"Go Pro"}
        link={"/pro"}
      />
      <Navbar />
      <section className="p-8 max-w-7xl mx-auto">DashboardPage</section>
    </>
  );
};
export default DashboardPage;
