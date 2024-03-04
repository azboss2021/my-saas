import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";

const ProPage = () => {
  return (
    <>
      <div className="border-b">
        <Navbar />
      </div>
      <section className="mx-auto max-w-7xl p-8">
        <Pricing className="lg:gap-12 lg:py-8" />
      </section>
    </>
  );
};

export default ProPage;
