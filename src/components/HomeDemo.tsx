// EDIT THESE
const videoLink =
  "https://www.youtube.com/embed/GyJPzwM__v4?si=1FbXhbPuA8qh5mzh";
const subtitle = "Covers Everything You Need To Know.";

const HomeDemo = () => {
  return (
    <section
      id="demo"
      className={`mx-auto flex w-full max-w-7xl flex-col gap-20 py-20 lg:py-36`}
    >
      <div className="mx-auto flex flex-col gap-2">
        <h3 className="title">Demo</h3>
        <p className="subtitle">{subtitle}</p>
      </div>

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
