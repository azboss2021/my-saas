import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import HomeNavbar from "@/components/HomeNavbar";
import HomeHero from "@/components/HomeHero";
import HomeHorizontalScroll from "@/components/HomeHorizontalScroll";
import HomePricing from "@/components/HomePricing";
import HomeFAQ from "@/components/HomeFAQ";
import HomeCTA from "@/components/HomeCTA";
import HomeFooter from "@/components/HomeFooter";
import HomeDemo from "@/components/HomeDemo";

import HomeTestimonialWall from "@/components/HomeTestimonialWall";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeSingleTestimonial from "@/components/HomeSingleTestimonial";

const HomePage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-col">
      <HomeNavbar />
      <HomeHero />
      <HomeHorizontalScroll />

      <section className="bg-primary/5">
        <HomeDemo />
      </section>

      <HomePricing />
      <HomeFAQ />

      <section className="bg-primary/5">
        <HomeCTA />
      </section>

      <HomeFooter />
    </main>
  );
};
export default HomePage;
