import { SAAS_DESCRIPTION, SAAS_SLOGAN } from "@/lib/constants";
import HeroUserCount from "./HeroUserCount";
import HomeCTAButton from "./HomeCTAButton";
import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import HomeSingleTestimonial from "./HomeSingleTestimonial";

const HomeHeroLeft = () => {
  return (
    <div className="flex basis-1/2 flex-col items-center justify-center gap-10 text-center lg:items-start lg:text-left">
      <HomeSingleTestimonial />
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
        {SAAS_SLOGAN}
      </h1>

      <p className="text-lg leading-relaxed text-primary/80">
        {SAAS_DESCRIPTION}
      </p>

      <div className="flex flex-col items-center gap-2 lg:items-start">
        <HomeCTAButton />
        {/* <HomeCTAExtraInfo /> */}
      </div>

      {/* <HeroUserCount /> */}
    </div>
  );
};
export default HomeHeroLeft;
