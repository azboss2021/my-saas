import Image from "next/image";

// EDIT THESE
const items = [
  {
    image: "/pikachu.jpg",
    alt: "image alt",
    width: 100,
    height: 100,
  },
  {
    image: "/pikachu.jpg",
    alt: "image alt",
    width: 100,
    height: 100,
  },
  {
    image: "/pikachu.jpg",
    alt: "image alt",
    width: 100,
    height: 100,
  },
  {
    image: "/pikachu.jpg",
    alt: "image alt",
    width: 100,
    height: 100,
  },
  {
    image: "/pikachu.jpg",
    alt: "image alt",
    width: 100,
    height: 100,
  },
  {
    image: "/pikachu.jpg",
    alt: "image alt",
    width: 100,
    height: 100,
  },
];
const speed = 50000;

const HomeHorizontalScroll = () => {
  return (
    <section className="mx-auto max-w-7xl w-full py-20 pb-28 flex flex-col gap-4 items-center relative">
      <h3 className="text-primary/80 font-extrabold">Featured on...</h3>
      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-background to-transparent w-1/5 z-10" />
      <div className="overflow-hidden h-12 w-full mx-auto relative">
        <div className="flex absolute">
          <section
            className="flex"
            style={{ animation: `${speed}ms slide infinite linear` }}
          >
            {items.map(({ image, alt, width, height }, index) => (
              <Image
                key={index}
                src={image}
                alt={alt}
                width={width}
                height={height}
                className="px-4 h-16 max-w-36 object-cover"
              />
            ))}
          </section>
          <section
            className="flex"
            style={{ animation: `${speed}ms slide infinite linear` }}
          >
            {items.map(({ image, alt, width, height }, index) => (
              <Image
                key={index}
                src={image}
                alt={alt}
                width={width}
                height={height}
                className="px-4 h-16 max-w-36 object-cover"
              />
            ))}
          </section>
          <section
            className="flex"
            style={{ animation: `${speed}ms slide infinite linear` }}
          >
            {items.map(({ image, alt, width, height }, index) => (
              <Image
                key={index}
                src={image}
                alt={alt}
                width={width}
                height={height}
                className="px-4 h-16 max-w-36 object-cover"
              />
            ))}
          </section>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-background to-transparent w-1/5 z-10" />
    </section>
  );
};
export default HomeHorizontalScroll;
