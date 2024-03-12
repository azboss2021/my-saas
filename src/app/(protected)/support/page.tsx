import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { SAAS_DESCRIPTION, SAAS_NAME } from "@/lib/constants";
import LeaveButton from "@/components/LeaveButton";
import SupportForm from "@/components/SupportForm";

export const metadata: Metadata = {
  title: `${SAAS_NAME} - Support`,
  description: SAAS_DESCRIPTION,
};

const SupportPage = () => {
  return (
    <>
      <div className="border-b">
        <Navbar />
      </div>

      <section className="mx-auto flex max-w-3xl flex-col gap-8 p-8">
        <LeaveButton />
        <h2 className="text-3xl font-extrabold">Support Form</h2>
        <p>
          If you have any questions, concerns, feedback, bug reports, etc. leave
          it below and it will be read within 48 hours.
        </p>
        <SupportForm />
      </section>
    </>
  );
};

export default SupportPage;
