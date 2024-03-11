import HomeCTAButton from "./HomeCTAButton";

const ctaMain = "Do this now, and win";
const ctaDescription =
  "Stop doing this bad stuff. It's not working for you. Start doing this good stuff...";

const HomeCTA = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-8 py-20 lg:py-48">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight lg:text-5xl">
          {ctaMain}
        </h2>
        <p className="text-center text-lg text-opacity-80">{ctaDescription}</p>
      </div>
      <HomeCTAButton />
    </section>
  );
};
export default HomeCTA;
