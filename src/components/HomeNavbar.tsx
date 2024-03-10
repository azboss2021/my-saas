import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

const HomeNavbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5 sm:justify-start sm:gap-8">
      <NavLogo />
      <NavLinks />
    </nav>
  );
};
export default HomeNavbar;
