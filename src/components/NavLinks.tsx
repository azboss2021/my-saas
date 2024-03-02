import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const NavLinks = () => {
  return (
    <>
      <Link href="#pricing" className="hover:underline">
        Pricing
      </Link>
      <Link href="#demo" className="hover:underline hidden lg:block">
        Demo
      </Link>
      <Link href="#faq" className="hover:underline">
        FAQ
      </Link>
      <ModeToggle />
      {/* <Link href="#testimonials">Testimonials</Link> */}
    </>
  );
};
export default NavLinks;
