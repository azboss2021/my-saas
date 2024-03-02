import Image from "next/image";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { Badge } from "./ui/badge";

type userType = {
  image?: string | null;
  name: string;
};

const user: userType = {
  // image: "/pikachu.jpg",
  name: "Pika Chu",
};
const testimonial =
  "This is my favorite SaaS of 2024! Why can't I stop using it??";
const badgeText = "Premium Member";

const HomeSingleTestimonial = () => {
  return (
    <section className="flex flex-col gap-2">
      <FaQuoteLeft className="text-green-500/40" size={22} />
      <span className="font-semibold text-primary/90">{testimonial}</span>
      <div className="flex items-center gap-2">
        {user.image ? (
          <>
            <Image
              src={user.image}
              width={30}
              height={30}
              alt={user.name}
              className="rounded-full"
            />
            <span className="text-primary/80">{user.name}</span>
          </>
        ) : (
          <span className="text-primary/80 text-sm">-{user.name}</span>
        )}

        <Badge
          variant={"outline"}
          className="border-green-500/80 text-green-500"
        >
          {badgeText}
        </Badge>
      </div>
    </section>
  );
};
export default HomeSingleTestimonial;
