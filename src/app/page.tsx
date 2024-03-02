import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import HomeNavbar from "@/components/HomeNavbar";
import HomeHero from "@/components/HomeHero";
import HomeHorizontalScroll from "@/components/HomeHorizontalScroll";
import HomeFAQ from "@/components/HomeFAQ";
import HomeCTA from "@/components/HomeCTA";
import HomeFooter from "@/components/HomeFooter";
import HomeDemo from "@/components/HomeDemo";
import Pricing from "@/components/Pricing";

import HomeTestimonialWall from "@/components/HomeTestimonialWall";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeSingleTestimonial from "@/components/HomeSingleTestimonial";
import HomeSideBySide from "@/components/HomeSideBySide";
import Image from "next/image";
import HomeBackground from "@/components/HomeBackground";

const HomePage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="relative flex flex-col">
      <HomeBackground />

      <div className="border-b bg-background">
        <HomeNavbar />
      </div>

      <HomeHero />

      <HomeHorizontalScroll />

      <HomeSideBySide />

      {/* <section className="bg-primary/5"> */}
      <HomeDemo />
      {/* </section> */}

      <Pricing />
      <HomeFAQ />

      {/* <section className="bg-primary/5"> */}
      <HomeCTA />
      {/* </section> */}

      <div className="border-t bg-background">
        <HomeFooter />
      </div>
    </main>
  );
};
export default HomePage;
