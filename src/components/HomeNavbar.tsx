import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

const HomeNavbar = () => {
  return (
    <nav className="items-center flex gap-8 max-w-7xl mx-auto w-full py-5 px-8">
      <NavLogo />
      <NavLinks />
    </nav>
  );
};
export default HomeNavbar;
