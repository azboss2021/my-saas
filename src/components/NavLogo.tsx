import Link from "next/link";
import LogoImage from "./LogoImage";

const saasName = "MySaaS";

const NavLogo = ({ home }: { home?: boolean }) => {
  return home ? (
    <div className="flex items-center gap-2 text-xl font-bold">
      <LogoImage />
      {saasName}
    </div>
  ) : (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 text-xl font-bold"
    >
      <LogoImage />
      {saasName}
    </Link>
  );
};
export default NavLogo;
