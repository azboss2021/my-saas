"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks/hooks";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import HomeCTAButton from "./HomeCTAButton";
import { cn } from "@/lib/utils";

// EDIT THESE
const cards = [
  {
    name: "Basic",
    prevPrice: 16,
    price: 8,
    bestChoice: false,
    monthly: true,
    description: "Essential features you need to get started",
    features: [
      { text: "Example feature number 1", has: true },
      { text: "Example feature number 2", has: true },
      { text: "Example feature number 3", has: false },
      { text: "Example feature number 4", has: false },
    ],
    buttonExtra: "Do this now!",
    useBadge: false,
  },
  {
    name: "Pro",
    prevPrice: 24,
    price: 12,
    bestChoice: true,
    monthly: true,
    description: "Essential features you need to get started",
    features: [
      { text: "Example feature number 1", has: true },
      { text: "Example feature number 2", has: true },
      { text: "Example feature number 3", has: true },
      { text: "Example feature number 4", has: true },
    ],
    buttonExtra: "Do this now!",
    useBadge: false,
  },
  // {
  //   name: "Enterprise",
  //   prevPrice: 99.99,
  //   price: 49.99,
  //   bestChoice: false,
  //   monthly: true,
  //   description: "Essential features you need to get started",
  //   features: [
  //     "Example feature number 1",
  //     "Example feature number 2",
  //     "Example feature number 3",
  //     "Example feature number 4",
  //   ],
  //   buttonExtra: "Do this now!",
  //   useBadge: false,
  // },
];
const subtitle = "Affordable Pricing For The Best SaaS You Can Get";

const Pricing = ({
  className,
  payLink,
}: {
  className?: string;
  payLink?: string;
}) => {
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref });

  return (
    <section
      id="pricing"
      className={cn(
        `mx-auto flex w-full max-w-7xl flex-col gap-16 px-8 py-20 transition-all duration-700 ease-in-out lg:gap-24 lg:py-36 ${isVisible ? "opacity-100" : "opacity-0"}`,
        className,
      )}
      ref={ref}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="mx-auto flex flex-col gap-2">
          <h3 className="title">Pricing</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <HomeCTAExtraInfo />

        <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
          {cards.map((card, index) => (
            <div
              className={`relative max-w-xs rounded-lg border px-6 py-10 shadow-xl transition-shadow ${card.bestChoice && "border-2 border-primary"} bg-background`}
              key={`price_card_${index}`}
            >
              {card.bestChoice && (
                <div className="absolute -top-3 left-[124px] rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-secondary">
                  POPULAR
                </div>
              )}
              <div className="flex flex-col gap-3">
                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-semibold text-primary/90">
                    {card.name}
                  </span>
                  {card.useBadge && (
                    <Badge variant={card.bestChoice ? "default" : "secondary"}>
                      Save $
                      {Math.round(card.prevPrice) - Math.round(card.price)}
                    </Badge>
                  )}
                </div>

                <div>
                  {!card.useBadge && (
                    <span className="mr-2 text-lg font-bold text-primary/70 line-through">
                      ${card.prevPrice}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold tracking-tight">
                    ${card.price}
                  </span>
                  <span className="ml-2 font-bold text-primary/70">USD</span>
                  <span className="font-semibold">
                    {card.monthly ? "/mo" : "/yr"}
                  </span>
                </div>

                {card.description && (
                  <span className="text-primary/80">{card.description}</span>
                )}

                <div className="mb-4 mt-4 flex flex-col gap-1.5">
                  {card.features.map((feature, index) => (
                    <div className="flex items-center gap-1.5" key={index}>
                      {feature.has ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaCircleXmark className="text-red-500" />
                      )}
                      <span className="text-primary/90">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <HomeCTAButton className="w-full" />

                <span className="text-center text-sm font-semibold text-primary/80">
                  {card.buttonExtra}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
