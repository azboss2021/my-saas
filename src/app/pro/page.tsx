import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";

const ProPage = () => {
  return (
    <>
      <div className="border-b">
        <Navbar />
      </div>
      <section className="mx-auto max-w-7xl p-8">
        <Pricing className="lg:py-12" />
      </section>
    </>
  );
};

export default ProPage;
