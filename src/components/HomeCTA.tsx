import HomeCTAButton from "./HomeCTAButton";

const ctaMain = "Do this now, and win";
const ctaDescription =
  "Stop doing this bad stuff. It's not working for you. Start doing this good stuff...";

const HomeCTA = () => {
  return (
    <section className="mx-auto max-w-7xl w-full py-20 px-8 flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-3xl lg:text-5xl text-center tracking-tight">
          {ctaMain}
        </h2>
        <p className="text-center text-primary/80 text-lg">{ctaDescription}</p>
      </div>
      <HomeCTAButton />
    </section>
  );
};
export default HomeCTA;
