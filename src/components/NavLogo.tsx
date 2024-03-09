import Link from "next/link";
import LogoImage from "./LogoImage";
import { LOGO_LINK, SAAS_NAME } from "@/lib/constants";

const NavLogo = () => {
  return (
    <Link
      href={LOGO_LINK}
      className="flex items-center gap-2 text-xl font-bold"
    >
      <LogoImage />
      <span className="hidden md:block">{SAAS_NAME}</span>
    </Link>
  );
};
export default NavLogo;
