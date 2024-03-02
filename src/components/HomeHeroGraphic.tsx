import Image from "next/image";

// EDIT THESE
const image = {
  link: "/pikachu.jpg",
  alt: "",
  width: 1080,
  height: 1080,
};

const HomeHeroGraphic = () => {
  return (
    <div className="relative max-md:-m-4 w-full">
      <Image
        src={image.link}
        width={image.width}
        height={image.height}
        alt={image.alt}
        className="w-full max-w-xl ml-auto mx-auto rounded-xl"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
};
export default HomeHeroGraphic;
