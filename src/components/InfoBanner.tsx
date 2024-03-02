import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

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
    <section className="flex items-center justify-center gap-2 border-b p-2">
      {content}
      <Button asChild size="sm" className="rounded-full px-4 text-sm">
        {link && (
          <Link href={link} className="flex items-center gap-2 font-semibold">
            {buttonContent} <FaArrowRight size={12} />
          </Link>
        )}
      </Button>
    </section>
  );
};
export default InfoBanner;
