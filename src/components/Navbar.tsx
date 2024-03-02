import { getServerSession } from "next-auth";
import NavLogo from "./NavLogo";
import UserDropdown from "./UserDropdown";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { ModeToggle } from "./theme-toggle";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="items-center flex justify-between gap-8 max-w-7xl mx-auto w-full p-8">
      <NavLogo />
      <div className="flex items-center gap-3">
        <ModeToggle />
        <UserDropdown image={session?.user?.image as string} />
      </div>
    </nav>
  );
};
export default Navbar;
