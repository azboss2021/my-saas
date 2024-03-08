import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ANNUAL_DISCOUNT, DISCOUNT, SUBSCRIPTION_PLANS } from "@/lib/constants";
import { Badge } from "./ui/badge";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import Checkout from "./Checkout";

const SubscriptionPricing = ({ id }: { id: string }) => {
  return (
    <Tabs defaultValue="monthly" className="flex w-full flex-col items-center">
      <TabsList className="mb-8 w-full max-w-[400px]">
        <TabsTrigger value="monthly" className="flex-1">
          Monthly
        </TabsTrigger>
        <TabsTrigger value="yearly" className="flex-1">
          Yearly {ANNUAL_DISCOUNT > 0 && `(Save ${ANNUAL_DISCOUNT * 100}%)`}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="monthly">
        <section className="flex flex-col gap-4 md:flex-row">
          {SUBSCRIPTION_PLANS.map((card, index) => (
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
                      {card.price - Math.round(card.price * (1 - DISCOUNT))}
                    </Badge>
                  )}
                </div>

                <div>
                  {!card.useBadge && DISCOUNT > 0 && (
                    <span className="mr-2 text-lg font-bold text-primary/70 line-through">
                      ${card.price}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold tracking-tight">
                    ${Math.round(card.price * (1 - DISCOUNT))}
                  </span>
                  <span className="ml-2 font-semibold">USD/mo</span>
                </div>

                {card.description && (
                  <span className="text-primary/80">{card.description}</span>
                )}

                <div className="mb-4 mt-4 flex flex-col gap-1.5">
                  {card.inclusions.map((inclusion, index) => (
                    <div className="flex items-center gap-1.5" key={index}>
                      {inclusion.isIncluded ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaCircleXmark className="text-red-500" />
                      )}
                      <span className="text-primary/90">{inclusion.label}</span>
                    </div>
                  ))}
                </div>

                <Checkout
                  plan={card.name}
                  amount={Math.round(card.price * (1 - DISCOUNT))}
                  buyerId={id}
                  monthly={true}
                  paymentType="subscription"
                />

                <span className="text-center text-sm font-semibold text-primary/80">
                  {card.buttonExtra}
                </span>
              </div>
            </div>
          ))}
        </section>
      </TabsContent>
      <TabsContent value="yearly">
        <section className="flex flex-col gap-4 md:flex-row">
          {SUBSCRIPTION_PLANS.map((card, index) => (
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
                      {card.price * 12 -
                        Math.round(
                          card.price *
                            12 *
                            (1 - DISCOUNT) *
                            (1 - ANNUAL_DISCOUNT),
                        )}
                    </Badge>
                  )}
                </div>

                <div>
                  {!card.useBadge && (DISCOUNT > 0 || ANNUAL_DISCOUNT > 0) && (
                    <span className="mr-2 text-lg font-bold text-primary/70 line-through">
                      ${card.price * 12}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold tracking-tight">
                    $
                    {Math.round(
                      card.price * 12 * (1 - DISCOUNT) * (1 - ANNUAL_DISCOUNT),
                    )}
                  </span>
                  <span className="ml-2 font-semibold">USD/yr</span>
                </div>

                {card.description && (
                  <span className="text-primary/80">{card.description}</span>
                )}

                <div className="mb-4 mt-4 flex flex-col gap-1.5">
                  {card.inclusions.map((inclusion, index) => (
                    <div className="flex items-center gap-1.5" key={index}>
                      {inclusion.isIncluded ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaCircleXmark className="text-red-500" />
                      )}
                      <span className="text-primary/90">{inclusion.label}</span>
                    </div>
                  ))}
                </div>

                <Checkout
                  plan={card.name}
                  amount={Math.round(
                    card.price * 12 * (1 - DISCOUNT) * (1 - ANNUAL_DISCOUNT),
                  )}
                  buyerId={id}
                  monthly={false}
                  paymentType="subscription"
                />

                <span className="text-center text-sm font-semibold text-primary/80">
                  {card.buttonExtra}
                </span>
              </div>
            </div>
          ))}
        </section>
      </TabsContent>
    </Tabs>

    // <section
    //   id="pricing"
    //   className={cn(
    //     `mx-auto flex w-full max-w-7xl flex-col gap-16 px-8 py-20 lg:gap-24 lg:py-36`,
    //     className,
    //   )}
    // >
    //   <div className="flex flex-col items-center gap-4">
    //     <div className="mx-auto flex flex-col gap-2">
    //       <h3 className="title">Pricing</h3>
    //       <p className="subtitle">{PRICING_SUBTITLE}</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center gap-8">
    //     <HomeCTAExtraInfo />

    //     <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
    //       {PLANS.map((card, index) => (
    //         <div
    //           className={`relative max-w-xs rounded-lg border px-6 py-10 shadow-xl transition-shadow ${card.bestChoice && "border-2 border-primary"} bg-background`}
    //           key={`price_card_${index}`}
    //         >
    //           {card.bestChoice && (
    //             <div className="absolute -top-3 left-[124px] rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-secondary">
    //               POPULAR
    //             </div>
    //           )}
    //           <div className="flex flex-col gap-3">
    //             <div className="flex w-full items-center justify-between">
    //               <span className="text-lg font-semibold text-primary/90">
    //                 {card.name}
    //               </span>
    //               {card.useBadge && (
    //                 <Badge variant={card.bestChoice ? "default" : "secondary"}>
    //                   Save ${Math.round(card.price) * DISCOUNT}
    //                 </Badge>
    //               )}
    //             </div>

    //             <div>
    //               {!card.useBadge && (
    //                 <span className="mr-2 text-lg font-bold text-primary/70 line-through">
    //                   ${card.price * DISCOUNT}
    //                 </span>
    //               )}
    //               <span className="text-4xl font-extrabold tracking-tight">
    //                 ${card.price}
    //               </span>
    //               <span className="ml-2 font-bold text-primary/70">USD</span>
    //               <span className="font-semibold">
    //                 {monthly ? "/mo" : "/yr"}
    //               </span>
    //             </div>

    //             {card.description && (
    //               <span className="text-primary/80">{card.description}</span>
    //             )}

    //             <div className="mb-4 mt-4 flex flex-col gap-1.5">
    //               {card.inclusions.map((inclusion, index) => (
    //                 <div className="flex items-center gap-1.5" key={index}>
    //                   {inclusion.isIncluded ? (
    //                     <FaCheckCircle className="text-green-500" />
    //                   ) : (
    //                     <FaCircleXmark className="text-red-500" />
    //                   )}
    //                   <span className="text-primary/90">{inclusion.label}</span>
    //                 </div>
    //               ))}
    //             </div>

    //             {card.credits ? (
    //               <Checkout
    //                 plan={card.name}
    //                 amount={card.price}
    //                 credits={card.credits}
    //                 buyerId={user._id}
    //               />
    //             ) : (
    //               <Checkout
    //                 plan={card.name}
    //                 amount={card.price}
    //                 buyerId={user._id}
    //                 monthly={monthly}
    //               />
    //             )}

    //             <span className="text-center text-sm font-semibold text-primary/80">
    //               {card.buttonExtra}
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};
export default SubscriptionPricing;
