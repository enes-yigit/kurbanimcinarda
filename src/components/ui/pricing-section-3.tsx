"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCheck } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

type PlanType = {
  name: string;
  minPrice: number;
  maxPrice: number | null;
  buttonText: string;
  popular?: boolean;
  includes: string[];
  waMessage: string;
};

const buyukbasPlans: PlanType[] = [
  {
    name: "1. Grup",
    minPrice: 30000,
    maxPrice: 35000,
    buttonText: "Hemen Yaz",
    includes: [
      "Hisseli Kurban Kapsamı:",
      "Yerli Besi Erkek Dana",
      "Kapak Atma Garantisi",
      "7 Kefeli Terazi ile Hak Dağıtımı",
      "Randevulu Teslimat",
    ],
    waMessage: "Merhaba, Büyükbaş 1. Grup hakkında bilgi almak istiyorum."
  },
  {
    name: "2. Grup",
    minPrice: 35000,
    maxPrice: 40000,
    buttonText: "Hemen Yaz",
    includes: [
      "Hisseli Kurban Kapsamı:",
      "Yerli Besi Erkek Dana",
      "Kapak Atma Garantisi",
      "7 Kefeli Terazi ile Hak Dağıtımı",
      "Randevulu Teslimat",
    ],
    waMessage: "Merhaba, Büyükbaş 2. Grup hakkında bilgi almak istiyorum."
  },
  {
    name: "3. Grup",
    minPrice: 40000,
    maxPrice: 45000,
    popular: true,
    buttonText: "Hemen Yaz",
    includes: [
      "Hisseli Kurban Kapsamı:",
      "Büyük Boy Erkek Tosun",
      "Kapak Atma Garantisi",
      "7 Kefeli Terazi ile Hak Dağıtımı",
      "Öncelikli Teslimat",
    ],
    waMessage: "Merhaba, Büyükbaş 3. Grup hakkında bilgi almak istiyorum."
  },
  {
    name: "4. Grup",
    minPrice: 45000,
    maxPrice: null,
    buttonText: "Hemen Yaz",
    includes: [
      "Hisseli Kurban Kapsamı:",
      "Büyük Boy Erkek Tosun",
      "Kapak Atma Garantisi",
      "7 Kefeli Terazi ile Hak Dağıtımı",
      "Öncelikli Teslimat",
    ],
    waMessage: "Merhaba, Büyükbaş 4. Grup hakkında bilgi almak istiyorum."
  }
];

const kucukbasPlans: PlanType[] = [
  {
    name: "1. Grup",
    minPrice: 19000,
    maxPrice: 22000,
    buttonText: "Hemen Yaz",
    includes: [
      "Küçükbaş Kurban Kapsamı:",
      "Özenle Seçilmiş Koç",
      "İslami Usullere Uygun Kesim",
      "Randevulu Teslimat",
    ],
    waMessage: "Merhaba, Küçükbaş 1. Grup hakkında bilgi almak istiyorum."
  },
  {
    name: "2. Grup",
    minPrice: 22000,
    maxPrice: 25000,
    buttonText: "Hemen Yaz",
    includes: [
      "Küçükbaş Kurban Kapsamı:",
      "Özenle Seçilmiş Koç",
      "İslami Usullere Uygun Kesim",
      "Randevulu Teslimat",
    ],
    waMessage: "Merhaba, Küçükbaş 2. Grup hakkında bilgi almak istiyorum."
  },
  {
    name: "3. Grup",
    minPrice: 25000,
    maxPrice: 28000,
    popular: true,
    buttonText: "Hemen Yaz",
    includes: [
      "Küçükbaş Kurban Kapsamı:",
      "Büyük Boy Koç",
      "İslami Usullere Uygun Kesim",
      "Öncelikli Teslimat",
    ],
    waMessage: "Merhaba, Küçükbaş 3. Grup hakkında bilgi almak istiyorum."
  },
  {
    name: "4. Grup",
    minPrice: 28000,
    maxPrice: null,
    buttonText: "Hemen Yaz",
    includes: [
      "Küçükbaş Kurban Kapsamı:",
      "Büyük Boy Koç",
      "İslami Usullere Uygun Kesim",
      "Öncelikli Teslimat",
    ],
    waMessage: "Merhaba, Küçükbaş 4. Grup hakkında bilgi almak istiyorum."
  }
];

const AnimalSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: boolean) => void;
  className?: string;
}) => {
  const [isKucukbas, setIsKucukbas] = useState(false);

  const handleSwitch = (value: boolean) => {
    setIsKucukbas(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center flex-col sm:items-start items-stretch w-full sm:w-auto", className)}>
      <div className="relative z-10 flex w-full sm:w-fit rounded-xl bg-neutral-50 shadow-inner border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch(false)}
          className={cn(
            "relative z-10 cursor-pointer h-11 sm:h-12 rounded-xl px-2 sm:px-8 py-1 sm:py-2 font-bold transition-colors text-[13px] sm:text-lg flex-1 whitespace-nowrap",
            !isKucukbas ? "text-white" : "text-gray-500 hover:text-gray-900"
          )}
        >
          {!isKucukbas && (
            <motion.span
              layoutId={"animal-switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl shadow-sm shadow-orange-500/20 bg-gradient-to-b from-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative tracking-wide whitespace-normal leading-tight text-center text-[12px] sm:text-inherit">
            Hisseli Kurban
          </span>
        </button>

        <button
          onClick={() => handleSwitch(true)}
          className={cn(
            "relative z-10 cursor-pointer h-11 sm:h-12 rounded-xl px-2 sm:px-8 py-1 sm:py-2 font-bold transition-colors text-[13px] sm:text-lg flex-1 whitespace-nowrap flex-shrink-0",
            isKucukbas ? "text-white" : "text-gray-500 hover:text-gray-900"
          )}
        >
          {isKucukbas && (
            <motion.span
              layoutId={"animal-switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl shadow-sm shadow-orange-500/20 bg-gradient-to-b from-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative tracking-wide whitespace-normal leading-tight text-center text-[12px] sm:text-inherit">
            Küçükbaş Kurban
          </span>
        </button>
      </div>
    </div>
  );
};

const DeliverySwitch = ({
  isExtra,
  onChange,
  className,
}: {
  isExtra: boolean;
  onChange: (val: boolean) => void;
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-center w-full sm:w-auto", className)}>
      <div className="relative z-10 flex w-full sm:w-fit rounded-xl bg-gray-100/60 p-1 border border-gray-200/80 items-center">
        <button
          onClick={() => onChange(false)}
          className={cn(
            "relative z-10 cursor-pointer sm:h-11 h-auto min-h-[44px] rounded-lg px-2 sm:px-5 py-1.5 font-bold transition-colors text-[10px] sm:text-sm flex-1 whitespace-normal flex items-center justify-center",
            !isExtra ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
          )}
        >
          {!isExtra && (
            <motion.span
              layoutId="delivery-switch"
              className="absolute top-0 left-0 h-full sm:h-11 w-full rounded-lg shadow-sm bg-white border border-gray-200"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10 text-center leading-[1.15]">
            Geleneksel<br className="sm:hidden" /> 1. Gün Teslimat
          </span>
        </button>

        <button
          onClick={() => onChange(true)}
          className={cn(
            "relative z-10 cursor-pointer sm:h-11 h-auto min-h-[44px] rounded-lg px-1 sm:px-5 py-1.5 font-bold transition-colors text-[10px] sm:text-sm flex-1 whitespace-normal flex items-center justify-center",
            isExtra ? "text-orange-700" : "text-gray-500 hover:text-gray-700"
          )}
        >
          {isExtra && (
            <motion.span
              layoutId="delivery-switch"
              className="absolute top-0 left-0 h-full sm:h-11 w-full rounded-lg shadow-sm bg-white border border-gray-200"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 leading-[1.15] text-center">
            <span>5. Gün / Özel Teslim</span>
          </span>
        </button>
      </div>
    </div>
  );
};


export default function PricingSection() {
  const [isKucukbas, setIsKucukbas] = useState(false);
  const [isExtraDelivery, setIsExtraDelivery] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);
  
  const activePlans = isKucukbas ? kucukbasPlans : buyukbasPlans;

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="px-4 py-10 sm:py-24 max-w-[85rem] mx-auto relative bg-white"
      ref={pricingRef}
    >
      <article className="text-center sm:text-left mb-10 space-y-4 w-full px-2">
        <div className="max-w-2xl mx-auto sm:mx-0">
          <h2 className="md:text-5xl text-4xl capitalize font-bold text-gray-900 mb-6 tracking-tight">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center sm:justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Kurban Gruplarımız
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="md:text-lg text-base text-gray-600 w-full mb-6"
          >
            Seçiminizi yapmak üzere sizin için hazırladığımız kurban gruplarını inceleyebilirsiniz.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-4 flex flex-col xl:flex-row xl:items-center xl:justify-between items-start gap-4 w-full"
        >
          <AnimalSwitch onSwitch={setIsKucukbas} />
          <DeliverySwitch isExtra={isExtraDelivery} onChange={setIsExtraDelivery} />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {activePlans.map((plan, index) => {
          const deliverySurcharge = isExtraDelivery ? 5000 : 0;
          const minVal = plan.minPrice + deliverySurcharge;
          const maxVal = plan.maxPrice ? plan.maxPrice + deliverySurcharge : null;

          return (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative border flex flex-col justify-between h-full bg-white transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 border-orange-500 ring-orange-500/80 shadow-[0_12px_36px_-12px_rgba(234,88,12,0.3)] bg-orange-50/10 scale-[1.03] z-10"
                    : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 z-0"
                }`}
              >
                <CardHeader className="text-left pb-5 px-5">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-2xl lg:text-[1.65rem] font-bold text-gray-900 leading-tight whitespace-nowrap">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <div className="shrink-0 mt-0.5">
                        <span className="bg-orange-500 shadow-sm shadow-orange-500/20 text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase">
                          Popüler
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-1 mb-2">
                    <div className="flex items-baseline gap-1">
                      <div className="text-[1.7rem] xl:text-[2.0rem] font-extrabold tracking-tight text-gray-900 flex items-center">
                        <NumberFlow
                          value={minVal}
                          format={{ style: "decimal", maximumFractionDigits: 0 }}
                          locales="tr-TR"
                        />
                        {maxVal ? (
                          <>
                            <span className="text-lg xl:text-xl font-bold text-gray-300 mx-1">–</span>
                            <NumberFlow
                              value={maxVal}
                              format={{ style: "decimal", maximumFractionDigits: 0 }}
                              locales="tr-TR"
                            />
                          </>
                        ) : (
                          <span className="text-xl ml-1 font-bold tracking-tighter text-gray-400">
                            +
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-gray-500">₺</span>
                    </div>
                    
                    <div className="text-[11px] xl:text-[12px] font-medium text-gray-500 bg-gray-50/80 px-2 py-0.5 rounded-md self-start border border-gray-100/50">
                      {plan.maxPrice ? "aralığında" : "ve üzeri"} <span className="text-gray-300 mx-0.5 font-light">|</span> <span className="text-gray-600 font-semibold">{isKucukbas ? 'adet' : 'hisse'}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  {/* Primary Call to Action */}
                  <a
                    href={`https://wa.me/902129099495?text=${encodeURIComponent(
                      plan.waMessage +
                        (isExtraDelivery ? " (5. Gün Özel Teslim Dahil)" : " (Geleneksel 1. Gün Teslimat)")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full mb-8 p-3.5 text-[15px] text-center block font-bold rounded-xl transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-b from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30 text-white hover:-translate-y-0.5"
                        : "bg-white text-gray-900 border border-gray-200 shadow shadow-gray-200 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    {plan.buttonText}
                  </a>

                  <div className="space-y-4 flex-1">
                    <h4 className="font-bold text-xs text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-3.5 pt-1">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="h-5 w-5 bg-orange-50/50 border border-orange-200 rounded-full flex items-center justify-center shrink-0 mt-[2px] mr-3">
                            <CheckCheck className="h-3 w-3 text-orange-600" />
                          </span>
                          <span className="text-sm font-semibold text-gray-600 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          );
        })}
      </div>
    </div>
  );
}
