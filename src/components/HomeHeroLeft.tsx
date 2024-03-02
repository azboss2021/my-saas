import HeroUserCount from "./HeroUserCount";
import HomeCTAButton from "./HomeCTAButton";
import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import HomeSingleTestimonial from "./HomeSingleTestimonial";

const HomeHeroLeft = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:text-left">
      {/* <HomeSingleTestimonial /> */}
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
        Main slogan right here, right now
      </h1>

      <p className="text-lg leading-relaxed text-primary/80">
        Give the customers the most concise accurate description of your saas
        here. Keep it short as well, people have short attention spans nowadays.
      </p>

      <div className="flex flex-col items-center gap-2 lg:items-start">
        <HomeCTAButton />
        {/* <HomeCTAExtraInfo /> */}
      </div>

      <HeroUserCount />
    </div>
  );
};
export default HomeHeroLeft;
