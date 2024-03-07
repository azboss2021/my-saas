import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const InfoBanner = ({
  content,
  buttonContent,
  link,
}: {
  content: string;
  buttonContent: string;
  link: string;
}) => {
  return (
    <section className="relative flex items-center justify-center gap-2 overflow-hidden border-b p-2">
      <Image
        src="/space_background.svg"
        height={2000}
        width={2000}
        alt="banner background"
        className="animate-slow-spin absolute -z-10 opacity-80"
        priority={true}
      />
      {content}

      {link && (
        <Link
          href={link}
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-secondary hover:bg-primary/80"
        >
          {buttonContent} <FaArrowRight size={12} />
        </Link>
      )}
    </section>
  );
};
export default InfoBanner;
