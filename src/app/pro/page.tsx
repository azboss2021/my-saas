import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";

const ProPage = () => {
  return (
    <>
      <Navbar />
      <section className="mx-auto max-w-7xl p-8">
        <Pricing className="lg:py-12" />
      </section>
    </>
  );
};

export default ProPage;
