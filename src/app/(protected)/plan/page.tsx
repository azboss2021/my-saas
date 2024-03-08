import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { SAAS_DESCRIPTION, SAAS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SAAS_NAME} - Plan`,
  description: SAAS_DESCRIPTION,
};

const ProPage = () => {
  return (
    <>
      <div className="border-b">
        <Navbar />
      </div>

      <section className="mx-auto max-w-7xl p-8">
        <Pricing />
      </section>
    </>
  );
};

export default ProPage;
