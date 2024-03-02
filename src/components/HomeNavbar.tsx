import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

const HomeNavbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center gap-8 px-8 py-5">
      <NavLogo home={true} />
      <NavLinks />
    </nav>
  );
};
export default HomeNavbar;
