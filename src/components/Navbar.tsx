import { getServerSession } from "next-auth";
import NavLogo from "./NavLogo";
import UserDropdown from "./UserDropdown";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { getUserByEmail } from "@/lib/actions";
import { badgeVariants } from "@/components/ui/badge";
import { NAVBAR_BADGE_LINK, PRODUCT_TYPE } from "@/lib/constants";
import { FaCoins, FaStar } from "react-icons/fa";

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
        {PRODUCT_TYPE === "subscription" && user.plan !== "Free" && (
          <Link
            className={badgeVariants({ variant: "default" })}
            href={NAVBAR_BADGE_LINK}
          >
            <span className="flex items-center gap-2 px-1 text-base">
              <FaStar /> {user.plan}
            </span>
          </Link>
        )}

        {PRODUCT_TYPE === "credits" && (
          <Link
            className={badgeVariants({ variant: "default" })}
            href={NAVBAR_BADGE_LINK}
          >
            <span className="flex items-center gap-2 px-1 text-base">
              <FaCoins /> {user.credits}
            </span>
          </Link>
        )}
        <ModeToggle />
        <UserDropdown image={session?.user?.image!} />
      </div>
    </nav>
  );
};
export default Navbar;
