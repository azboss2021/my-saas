import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { INFO_BANNER, PRODUCT_TYPE } from "@/lib/constants";
import { getPlan } from "@/lib/actions";

const InfoBanner = async () => {
  let showBanner = false;
  const session = await getServerSession(options);

  if (PRODUCT_TYPE === "subscription" || PRODUCT_TYPE === "one_time") {
    const plan = await getPlan(session?.user?.email as string);
    if (!plan) return null;
    showBanner = plan === "Free";
  }

  return (
    showBanner &&
    INFO_BANNER.show && (
      <section className="relative flex items-center justify-center gap-2 overflow-hidden border-b p-2">
        <Image
          src="/space_background.svg"
          height={2000}
          width={2000}
          alt="banner background"
          className="animate-slow-spin absolute -z-10 opacity-80"
          priority={true}
        />
        {INFO_BANNER.content}

        {INFO_BANNER.link && (
          <Link
            href={INFO_BANNER.link}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-secondary hover:bg-primary/80"
          >
            {INFO_BANNER.buttonContent} <FaArrowRight size={12} />
          </Link>
        )}
      </section>
    )
  );
};
export default InfoBanner;
