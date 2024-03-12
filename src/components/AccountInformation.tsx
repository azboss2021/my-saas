import { DatabaseUser } from "@/lib/types";

const AccountInformation = ({ user }: { user: DatabaseUser }) => {
  return (
    <section>
      <h2 className="text-3xl font-extrabold">Account Information</h2>
    </section>
  );
};
export default AccountInformation;
