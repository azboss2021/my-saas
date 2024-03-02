"use client";

import { useIsVisible } from "@/hooks/hooks";
import { useRef } from "react";

// EDIT THESE
const videoLink =
  "https://www.youtube.com/embed/GyJPzwM__v4?si=1FbXhbPuA8qh5mzh";

const HomeDemo = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref: ref });

  return (
    <section
      id="demo"
      className={`mx-auto flex w-full max-w-7xl flex-col gap-6 py-20 transition-all duration-700 ease-in-out lg:py-48 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <h2 className="w-full text-center text-3xl font-extrabold">Demo</h2>

      <iframe
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="mx-auto aspect-video w-full max-w-3xl"
      ></iframe>
    </section>
  );
};
export default HomeDemo;
