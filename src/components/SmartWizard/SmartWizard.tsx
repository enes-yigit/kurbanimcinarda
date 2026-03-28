"use client";

import { useState } from "react";
import {
  Gift,
  UserPlus,
  Users,
  User,
  Users2,
  Wallet,
  Home,
  Heart,
  UsersRound,
  Package,
  Truck,
  Factory,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";

/* ---- Step data ---- */
interface WizardOption {
  icon: React.ReactNode;
  title: string;
  desc: string;
  extra?: string;
  extraColor?: "orange" | "green" | "blue" | "default";
}

interface Step {
  question: string;
  options: WizardOption[];
}

const steps: Step[] = [
  {
    question: "Kurban türünü seçin",
    options: [], // animal selection (special render)
  },
  {
    question: "Kayıt modeliniz hangisi?",
    options: [
      {
        icon: <User className="w-6 h-6 text-orange-500" />,
        title: "Hissedar olarak katılacağım",
        desc: "Bireysel hisse kaydı"
      },
      {
        icon: <Users2 className="w-6 h-6 text-orange-500" />,
        title: "7 Kişilik grubumuz hazır",
        desc: "Grup olarak kayıt",
        extra: "ÖZEL SEÇİM",
        extraColor: "orange"
      },
    ],
  },
  {
    question: "Kemikli Et Verimi Beklentiniz",
    options: [
      {
        icon: <Wallet className="w-6 h-6 text-gray-600" />,
        title: "1. Grup",
        desc: "Bütçe dostu ve ekonomik"
      },
      {
        icon: <Home className="w-6 h-6 text-gray-600" />,
        title: "2. Grup",
        desc: "İdeal dengeli seçim"
      },
      {
        icon: <Heart className="w-6 h-6 text-orange-500" />,
        title: "3. Grup",
        desc: "Bereketli ve doyurucu",
        extra: "POPÜLER",
        extraColor: "orange"
      },
      {
        icon: <UsersRound className="w-6 h-6 text-gray-600" />,
        title: "4. Grup",
        desc: "Geniş aileler için bereketi bol"
      },
    ],
  },
  {
    question: "Kurban nasıl işlensin?",
    options: [
      {
        icon: <Package className="w-6 h-6 text-gray-600" />,
        title: "Geleneksel Paket",
        desc: "Bayram 1. günü, parçalanmış sıcak et teslimi"
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
        title: "Özel Kasaplık İşlemi",
        desc: "Kıyma, kuşbaşı, değerli et paketle (+5.güne özel)"
      },
    ],
  },
  {
    question: "Teslimat tercihi?",
    options: [
      {
        icon: <Truck className="w-6 h-6 text-gray-600" />,
        title: "Adresime Gelsin",
        desc: "Özel işlem sonrası iklimlendirilmiş araçlarla sevkiyat"
      },
      {
        icon: <Factory className="w-6 h-6 text-gray-600" />,
        title: "Tesisten Alırım",
        desc: "Randevu saatinizde Çınardağ tesisimizden paket teslimi"
      },
    ],
  },
];

const animals = [
  {
    name: "Büyükbaş",
    image: "/wizard/buyukbas-removebg-preview.png",
    popular: true,
  },
  {
    name: "Küçükbaş",
    image: "/wizard/kucukbas-removebg-preview.png",
    popular: false,
  },
];

// Variants for smooth slide transitions (Subtler distance)
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 25 : -25,
    opacity: 0,
    filter: "blur(2px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 25 : -25,
    opacity: 0,
    filter: "blur(2px)",
  }),
};

export default function SmartWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selections, setSelections] = useState<Record<number, number>>({});

  const totalSteps = steps.length;
  // Make progress start at current step ratio rather than 0%
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);
  const isLastStep = currentStep === totalSteps - 1;

  const handleSelect = (optionIndex: number) => {
    // If it's the first step (animal selection) and "Küçükbaş" is selected (index 1)
    if (currentStep === 0 && optionIndex === 1) {
      const msg = "Merhaba, Web sitenizden ulaşıyorum. Küçükbaş kurbanlıklar hakkında bilgi almak istiyorum.";
      window.open(`https://wa.me/902129099495?text=${encodeURIComponent(msg)}`, "_blank");
      return;
    }

    const newSelections = { ...selections, [currentStep]: optionIndex };
    setSelections(newSelections);

    // Auto-advance after a brief visual feedback delay
    if (!isLastStep) {
      setTimeout(() => {
        setDirection(1);
        setCurrentStep((s) => s + 1);
      }, 350);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const buildWhatsAppMessage = () => {
    const animalType = selections[0] === 0 ? "Büyükbaş" : "Küçükbaş";
    const registrationModel = selections[1] !== undefined
      ? steps[1].options[selections[1]]?.title
      : "Belirtilmedi";
    const meatYield = selections[2] !== undefined
      ? steps[2].options[selections[2]]?.title
      : "Belirtilmedi";
    const processing = selections[3] !== undefined
      ? steps[3].options[selections[3]]?.title
      : "Belirtilmedi";
    const delivery = selections[4] !== undefined
      ? steps[4].options[selections[4]]?.title
      : "Belirtilmedi";

    return `Merhaba, Özel Rezervasyon ekranı üzerinden kurban kaydı yapmak istiyorum.

📋 *Tercihlerim:*
🐄 *Kurban Türü:* ${animalType}
👥 *Kayıt Modeli:* ${registrationModel}
⚖️ *Et Verimi:* ${meatYield}
🥩 *İşleme:* ${processing}
🚚 *Teslimat:* ${delivery}`;
  };

  const handleFinish = () => {
    const message = buildWhatsAppMessage();
    window.open(
      `https://wa.me/902129099495?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-white py-12 sm:py-24 px-4 font-sans text-gray-900 border-t border-gray-100" id="akilli-asistan">
      <div className="max-w-[50rem] mx-auto">

        {/* New Professional Header & Top Deals */}
        <div className="flex flex-col items-center mb-12 max-w-3xl mx-auto text-center">
          {/* Top Chips / Deals */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm border border-emerald-100/50 hover:-translate-y-0.5 transition-transform">
              <Gift size={13} strokeWidth={2.5} />
              1.000 ₺ Erken Kayıt
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm border border-blue-100/50 hover:-translate-y-0.5 transition-transform">
              <UserPlus size={13} strokeWidth={2.5} />
              İlk Kayıt: +500 ₺
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 text-orange-700 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm border border-orange-100/50 hover:-translate-y-0.5 transition-transform">
              <Users size={13} strokeWidth={2.5} />
              7'li Grup: +500 ₺
            </div>
          </div>

          <h2 className="text-4xl sm:text-[2.75rem] font-extrabold tracking-tight text-gray-900 mb-5 leading-tight">
            Adım Adım Kurban Kaydı
          </h2>
          <p className="text-base sm:text-[17px] text-gray-500 font-medium leading-relaxed max-w-2xl px-2">
            İhtiyacınıza uygun seçenekleri (hisse, grup, et verimi ve teslimat yöntemi) kolayca belirleyebilir ve indirim fırsatlarıyla rezervasyonunuzu WhatsApp üzerinden tamamlayabilirsiniz.
          </p>
        </div>

        {/* Wizard Track */}
        <div className="flex flex-col items-center mb-10 max-w-2xl mx-auto px-2">
          <div className="w-full flex items-center justify-between mb-3">
            <button
              onClick={goBack}
              disabled={currentStep === 0}
              className={cn(
                "p-2.5 rounded-full transition-all flex items-center justify-center bg-gray-50 border border-gray-200 outline-none hover:shadow-sm hover:border-gray-300",
                currentStep === 0 ? "opacity-0 invisible" : "opacity-100 hover:bg-white hover:-translate-x-1"
              )}
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="text-[11px] font-extrabold tracking-widest text-gray-400 uppercase">
              Adım <span className="text-gray-900 mx-0.5 text-sm">{currentStep + 1}</span> / {totalSteps}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-[6px] bg-gray-100 rounded-full overflow-hidden shadow-inner flex">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Dynamic Step Content */}
        <div className="relative flex items-start justify-center overflow-visible min-h-[470px] sm:min-h-[500px] max-w-3xl mx-auto">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 450, damping: 40 },
                opacity: { duration: 0.2 },
                filter: { duration: 0.2 }
              }}
              className="w-full absolute top-0"
            >
              {/* Animated Title */}
              {currentStep > 0 && (
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-[2.2rem] font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                    <VerticalCutReveal
                      splitBy="words"
                      staggerDuration={0.08}
                      staggerFrom="first"
                      reverse={true}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 40,
                        delay: 0.1,
                      }}
                    >
                      {steps[currentStep].question}
                    </VerticalCutReveal>
                  </h2>
                </div>
              )}

              {currentStep === 0 ? (
                /* Enhanced Animal selection UI */
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-8 mt-6 px-1 max-w-2xl mx-auto">
                  {animals.map((animal, i) => {
                    const isSelected = selections[0] === i;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "relative p-4 sm:p-8 rounded-3xl sm:rounded-[2rem] cursor-pointer transition-all duration-500 flex flex-col items-center bg-white border-2 overflow-hidden group w-full hover:-translate-y-1",
                          isSelected
                            ? "border-orange-500 shadow-[0_20px_40px_rgba(234,88,12,0.15)] ring-4 ring-orange-100/50 z-10 scale-[1.03]"
                            : "border-gray-100/80 hover:border-orange-200 shadow-sm hover:shadow-xl"
                        )}
                        onClick={() => handleSelect(i)}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="animal-active"
                            className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-white to-orange-50/30 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                          />
                        )}

                        <div className="relative w-28 h-28 sm:w-48 sm:h-48 mb-4 sm:mb-6 mt-1 sm:mt-2">
                          {animal.popular && (
                            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-6 z-20">
                              <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-extrabold tracking-widest uppercase shadow-lg shadow-orange-500/30 border border-orange-400/50 whitespace-nowrap">
                                Çok Tercih Edilen
                              </span>
                            </div>
                          )}
                          <img
                            src={animal.image}
                            alt={animal.name}
                            className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                          />
                          <div className={cn(
                            "absolute inset-0 rounded-full blur-[20px] sm:blur-[30px] -z-0 transition-all duration-700",
                            isSelected ? "bg-orange-400/20 scale-[1.4]" : "bg-gray-200/40 scale-[1.2] group-hover:bg-orange-300/20 group-hover:scale-[1.4]"
                          )} />
                        </div>

                        <div className="text-lg sm:text-[1.75rem] font-extrabold text-gray-900 mb-2 sm:mb-3 relative z-10 tracking-tight">{animal.name}</div>
                        <div className={cn(
                          "mt-1 sm:mt-2 px-3 sm:px-8 py-1.5 sm:py-2.5 rounded-full text-[9px] sm:text-[11px] font-black tracking-widest relative z-10 transition-all duration-300 uppercase select-none whitespace-nowrap",
                          isSelected ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "bg-gray-100/80 text-gray-500 group-hover:bg-orange-100 group-hover:text-orange-600"
                        )}>
                          SEÇMEK İÇİN TIKLA
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Generic list options UI */
                <div className="flex flex-col gap-4 mt-6 px-1 max-w-2xl mx-auto">
                  {steps[currentStep].options.map((opt, i) => {
                    const isSelected = selections[currentStep] === i;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "relative p-5 sm:p-6 rounded-[1.5rem] cursor-pointer transition-all duration-300 flex items-center bg-white border-2 overflow-hidden group hover:-translate-y-1",
                          isSelected
                            ? "border-orange-500 shadow-[0_12px_30px_rgb(234,88,12,0.12)] bg-gradient-to-r from-orange-50/40 to-white ring-2 ring-orange-50 z-10 scale-[1.01]"
                            : "border-gray-100/80 hover:border-orange-200 shadow-sm hover:shadow-lg"
                        )}
                        onClick={() => handleSelect(i)}
                      >
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mr-5 transition-all shadow-sm border",
                          isSelected ? "bg-white border-orange-100 scale-110" : "bg-gray-50 border-gray-100 group-hover:bg-white group-hover:border-orange-100 group-hover:scale-105"
                        )}>
                          {opt.icon}
                        </div>
                        <div className="flex-1 text-left relative z-10 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1.5">
                            <div className={cn("text-[1.15rem] sm:text-[1.4rem] font-bold transition-colors leading-tight tracking-tight", isSelected ? "text-orange-950" : "text-gray-900")}>
                              {opt.title}
                            </div>
                            {opt.extra && (
                              <span className={cn(
                                "inline-flex w-fit px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase border",
                                opt.extraColor === "orange" ? "bg-orange-50 text-orange-600 border-orange-200" :
                                  opt.extraColor === "green" ? "bg-green-50 text-emerald-600 border-emerald-200" :
                                    opt.extraColor === "blue" ? "bg-blue-50 text-blue-600 border-blue-200" :
                                      "bg-gray-50 text-gray-500 border-gray-200"
                              )}>
                                {opt.extra}
                              </span>
                            )}
                          </div>
                          <p className="text-[13px] sm:text-[15px] font-medium text-gray-500 leading-snug pr-2">{opt.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Finish / Nav Controls */}
        {isLastStep && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-8 text-center z-10 relative"
          >
            <button
              className={cn(
                "w-full sm:w-auto px-12 py-5 text-[17px] font-bold rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(34,197,94,0.3)]",
                selections[currentStep] !== undefined
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-[0_12px_40px_rgb(34,197,94,0.4)] hover:-translate-y-1"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
              )}
              onClick={handleFinish}
              disabled={selections[currentStep] === undefined}
            >
              WhatsApp İle Kaydını Tamamla 💬
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
