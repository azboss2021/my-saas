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
      className={`mx-auto max-w-7xl w-full py-20 flex flex-col gap-6 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <h2 className="text-3xl font-extrabold w-full text-center">Demo</h2>

      <iframe
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-video max-w-3xl mx-auto"
      ></iframe>
    </section>
  );
};
export default HomeDemo;
