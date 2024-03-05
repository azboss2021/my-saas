import HomeHeroGraphic from "./HomeHeroGraphic";
import HomeHeroLeft from "./HomeHeroLeft";

const HomeHero = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-8 py-20 lg:flex-row lg:items-start lg:py-32">
      <HomeHeroLeft />
      <HomeHeroGraphic />
    </div>
  );
};
export default HomeHero;
