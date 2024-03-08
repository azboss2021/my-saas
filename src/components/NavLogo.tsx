import Link from "next/link";
import LogoImage from "./LogoImage";
import { SAAS_NAME } from "@/lib/constants";

const NavLogo = ({ home }: { home?: boolean }) => {
  return home ? (
    <div className="flex items-center gap-2 text-xl font-bold">
      <LogoImage />
      {SAAS_NAME}
    </div>
  ) : (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 text-xl font-bold"
    >
      <LogoImage />
      {SAAS_NAME}
    </Link>
  );
};
export default NavLogo;
