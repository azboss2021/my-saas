"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks/hooks";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaCheckCircle } from "react-icons/fa";
import LogoImage from "./LogoImage";
import { Badge } from "./ui/badge";
import HomeCTAExtraInfo from "./HomeCTAExtraInfo";
import HomeCTAButton from "./HomeCTAButton";

// EDIT THESE
const cards = [
  {
    name: "Basic",
    prevPrice: 15.99,
    price: 7.99,
    bestChoice: false,
    monthly: true,
    description: "Essential features you need to get started",
    features: [
      "Example feature number 1",
      "Example feature number 2",
      "Example feature number 3",
      "Example feature number 4",
    ],
    buttonExtra: "Do this now!",
    useBadge: false,
  },
  {
    name: "Pro",
    prevPrice: 23.99,
    price: 11.99,
    bestChoice: true,
    monthly: true,
    description: "Essential features you need to get started",
    features: [
      "Example feature number 1",
      "Example feature number 2",
      "Example feature number 3",
      "Example feature number 4",
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
const payLink = "";

const HomePricing = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref });

  return (
    <section
      id="pricing"
      className={`mx-auto max-w-7xl w-full py-20 px-8 lg:py-28 flex flex-col gap-12 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
      ref={ref}
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-extrabold w-full text-center">Pricing</h2>
        <HomeCTAExtraInfo />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 items-center">
        {cards.map((card, index) => (
          <div
            className={`relative border rounded-lg hover:shadow-lg px-6 py-10 max-w-xs transition-shadow ${card.bestChoice && "border-primary border-2"}`}
            key={`price_card_${index}`}
          >
            {card.bestChoice && (
              <div className="absolute -top-3 left-[124px] text-xs rounded-full bg-primary text-secondary px-2 py-0.5 font-semibold">
                POPULAR
              </div>
            )}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center w-full">
                <span className="text-lg text-primary/90 font-semibold">
                  {card.name}
                </span>
                {card.useBadge && (
                  <Badge variant={card.bestChoice ? "default" : "secondary"}>
                    Save ${Math.round(card.prevPrice) - Math.round(card.price)}
                  </Badge>
                )}
              </div>

              <div>
                {!card.useBadge && (
                  <span className="line-through text-primary/70 font-bold mr-2 text-lg">
                    {card.prevPrice}
                  </span>
                )}
                <span className="text-4xl font-extrabold tracking-tight">
                  ${card.price}
                </span>
                <span className="font-bold text-primary/70 ml-2">USD</span>
                <span className="font-semibold">
                  {card.monthly ? "/mo" : "/yr"}
                </span>
              </div>

              {card.description && (
                <span className="text-primary/80">{card.description}</span>
              )}

              <div className="flex flex-col gap-1.5 mt-4 mb-4">
                {card.features.map((feature, index) => (
                  <div className="flex items-center gap-1.5" key={index}>
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-primary/90">{feature}</span>
                  </div>
                ))}
              </div>

              <HomeCTAButton className="w-full" />

              <span className="text-primary/80 text-sm font-semibold text-center">
                {card.buttonExtra}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomePricing;
