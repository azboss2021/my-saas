import { FaCopyright, FaDiscord } from "react-icons/fa";
import LogoImage from "./LogoImage";
import Link from "next/link";

// EDIT THESE
const saasName = "MySaaS";
const slogan = "Main slogan right here, right now";
const discordLink = "";
const copyrightYear = 2024;
const supportLink = "mailto:calebjwilson14@gmail.com";
const more = false;

const HomeFooter = () => {
  return (
    <section className="mx-auto max-w-7xl w-full py-24 text-center flex flex-col lg:flex-row items-center lg:items-start lg:text-left lg:justify-evenly flex-wrap gap-10">
      <div className="flex flex-col gap-2 items-center lg:items-start">
        <span className="flex gap-2 items-center text-lg font-bold">
          <LogoImage /> {saasName}
        </span>
        <div className="flex flex-col text-primary/70">
          <span>{slogan}</span>
          <span className="flex gap-1 items-center">
            Copyright <FaCopyright /> {copyrightYear} - All rights reserved
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center font-bold lg:hidden">
        Join the community!
        <Link
          href={discordLink}
          className="bg-[#7289da] text-white rounded-lg items-center gap-2 px-3 py-1 flex w-fit"
        >
          <FaDiscord /> Join Us
        </Link>
      </div>

      <div className="flex flex-col gap-3 lg:text-left text-center">
        <h3 className="text-primary/60 font-extrabold tracking-wide">LINKS</h3>
        <div className="flex flex-col gap-1.5 ">
          <Link href="#pricing">Pricing</Link>
          <Link href={supportLink}>Support</Link>
          <Link
            href={discordLink}
            target="_blank"
            className="bg-[#7289da] text-white rounded-lg items-center gap-2 px-3 py-1 font-bold lg:flex hidden"
          >
            <FaDiscord /> Join Us
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:text-left text-center">
        <h3 className="text-primary/60 font-extrabold tracking-wide">LEGAL</h3>
        <div className="flex flex-col gap-1.5 ">
          <Link href="/tos" target="_blank">
            Terms of services
          </Link>
          <Link href="privacy-policy" target="_blank">
            Privacy policy
          </Link>
        </div>
      </div>

      {more && (
        <div className="flex flex-col gap-3 lg:text-left text-center">
          <h3 className="text-primary/60 font-extrabold tracking-wide">MORE</h3>
          <div className="flex flex-col gap-1.5 ">
            <Link href="">[MORE LINKS HERE]</Link>
          </div>
        </div>
      )}
    </section>
  );
};
export default HomeFooter;
