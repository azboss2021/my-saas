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
    <section className="mx-auto flex w-full max-w-7xl flex-col flex-wrap items-center gap-10 px-8 py-24 text-center lg:flex-row lg:items-start lg:justify-between lg:pb-48 lg:text-left">
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <span className="flex items-center gap-2 text-lg font-bold">
          <LogoImage /> {saasName}
        </span>
        <div className="flex flex-col text-primary/70">
          <span>{slogan}</span>
          <span className="flex items-center gap-1">
            Copyright <FaCopyright /> {copyrightYear} - All rights reserved
          </span>
        </div>
      </div>

      {discordLink && (
        <div className="flex flex-col items-center gap-1 font-bold lg:hidden">
          Join the community!
          <Link
            href={discordLink}
            className="flex w-fit items-center gap-2 rounded-lg bg-[#7289da] px-3 py-1 text-white"
          >
            <FaDiscord /> Join Us
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-24">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h3 className="font-extrabold tracking-wide text-primary/60">
            LINKS
          </h3>
          <div className="flex flex-col gap-1.5 ">
            <Link href="#pricing">Pricing</Link>
            <Link href={supportLink}>Support</Link>
            {discordLink && (
              <Link
                href={discordLink}
                target="_blank"
                className="hidden items-center gap-2 rounded-lg bg-[#7289da] px-3 py-1 font-bold text-white lg:flex"
              >
                <FaDiscord /> Join Us
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h3 className="font-extrabold tracking-wide text-primary/60">
            LEGAL
          </h3>
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
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <h3 className="font-extrabold tracking-wide text-primary/60">
              MORE
            </h3>
            <div className="flex flex-col gap-1.5 ">
              <Link href="">[MORE LINKS HERE]</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default HomeFooter;
