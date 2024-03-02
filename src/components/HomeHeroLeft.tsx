import HeroUserCount from "./HeroUserCount";
import HomeCTAButton from "./HomeCTAButton";
import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import HomeSingleTestimonial from "./HomeSingleTestimonial";

const HomeHeroLeft = () => {
  return (
    <div className="flex flex-col gap-10 lg:text-left text-center justify-center items-center lg:items-start">
      <HomeSingleTestimonial />
      <h1 className="text-4xl lg:text-6xl tracking-tight font-extrabold">
        Main slogan right here, right now
      </h1>

      <p className="leading-relaxed text-lg text-primary/80">
        Give the customers the most concise accurate description of your saas
        here. Keep it short as well, people have short attention spans nowadays.
      </p>

      <div className="flex flex-col gap-2 lg:items-start items-center">
        <HomeCTAButton />
        <HomeCTAExtraInfo />
      </div>

      <HeroUserCount />
    </div>
  );
};
export default HomeHeroLeft;
