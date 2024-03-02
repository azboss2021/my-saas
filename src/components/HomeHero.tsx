import HomeHeroGraphic from "./HomeHeroGraphic";
import HomeHeroLeft from "./HomeHeroLeft";

const HomeHero = () => {
  return (
    <div className="mx-auto max-w-7xl w-full flex flex-col justify-center items-center lg:items-start gap-16 lg:flex-row py-16 px-8">
      <HomeHeroLeft />
      <HomeHeroGraphic />
    </div>
  );
};
export default HomeHero;
