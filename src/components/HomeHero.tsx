"use client";

import { useRef } from "react";
import HomeHeroGraphic from "./HomeHeroGraphic";
import HomeHeroLeft from "./HomeHeroLeft";
import { useIsVisible } from "@/hooks/hooks";

const HomeHero = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref });

  return (
    <div
      className={`mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-8 py-28 transition-all duration-700 ease-in-out lg:flex-row lg:items-start ${isVisible ? "opacity-100" : "translate-y-10 opacity-0"}`}
      ref={ref}
    >
      <HomeHeroLeft />
      <HomeHeroGraphic />
    </div>
  );
};
export default HomeHero;
