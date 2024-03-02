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
    <section className="p-2 border-b flex items-center gap-2 justify-center">
      {content}
      <Button asChild={!link} size="sm" className="px-4 rounded-full text-sm">
        {link && (
          <Link href={link} className="font-semibold flex items-center gap-2">
            {buttonContent} <FaArrowRight size={12} />
          </Link>
        )}
      </Button>
    </section>
  );
};
export default InfoBanner;
