"use client";

import { useRef } from "react";
import HomeHeroGraphic from "./HomeHeroGraphic";
import HomeHeroLeft from "./HomeHeroLeft";
import { useIsVisible } from "@/hooks/hooks";

const HomeHero = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-8 py-28 lg:flex-row lg:items-start">
      <HomeHeroLeft />
      <HomeHeroGraphic />
    </div>
  );
};
export default HomeHero;
