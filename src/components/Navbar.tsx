import { getServerSession } from "next-auth";
import NavLogo from "./NavLogo";
import UserDropdown from "./UserDropdown";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { getUserByEmail } from "@/lib/actions";
import { badgeVariants } from "@/components/ui/badge";

const Navbar = async () => {
  const session = await getServerSession(options);
  const user = await getUserByEmail(session?.user?.email as string);

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 p-6">
      <NavLogo />
      <div className="flex items-center gap-3">
        {/* <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link> */}
        {user.plan && (
          <Link className={badgeVariants({ variant: "default" })} href="/plan">
            {user.plan.toUpperCase()}
          </Link>
        )}
        <ModeToggle />
        <UserDropdown image={session?.user?.image!} />
      </div>
    </nav>
  );
};
export default Navbar;
