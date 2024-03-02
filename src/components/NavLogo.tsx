import LogoImage from "./LogoImage";

const saasName = "MySaaS";

const NavLogo = () => {
  return (
    <div className="text-xl font-bold flex items-center gap-2">
      <LogoImage />
      {saasName}
    </div>
  );
};
export default NavLogo;
