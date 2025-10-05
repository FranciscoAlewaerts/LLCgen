import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Step5Props {
  onNext: (plan: string) => void;
  onBack: () => void;
  onClose?: () => void;
}

const plans = [
  {
    key: "starter",
    icon: "/media/pyramid.png", // Usa tu icono aquí
    title: "Starter",
    subtitle: "Basis LLC setup for foreigners",
    price: "$500",
    currency: "USD – One time fee",
    features: [
      "Company formation in WY or FL",
      "Standard Tax ID (EIN) Setup",
      "All filing fees included for required documents",
      "All essentials and important documents",
      "Lifetime expert support",
      "Registered agent for 1 year*",
      "Business Portal",
    ],
    note: "Does not include banking setup nor BOI Report",
    highlight: false,
    highlightLabel: "",
    highlightColor: "",
  },
  {
    key: "premium",
    icon: "/media/rocket.png", // Usa tu icono aquí
    title: "Premium+",
    subtitle: "All in one – LLC setup for foreigners",
    price: "$850",
    currency: "USD – One time fee",
    features: [
      "Company formation in WY or FL",
      "Expedited Tax ID (EIN) Setup",
      "All filing fees included for required documents",
      "All essentials and important documents",
      "Lifetime expert support",
      "Registered agent for 1 year*",
      "Business Portal",
      "US Business Bank Account",
      "BOI Report",
      "Priority support and filing speed",
      "Access to $2,500 in perks and tools",
    ],
    note: "",
    highlight: true,
    highlightLabel: "Most Popular",
    highlightColor: "border-[#5B7FFF] bg-[#181028]",
  },
  {
    key: "credit",
    icon: "/media/pyramid.png", // Usa tu icono aquí
    title: "Credit Accelerator",
    subtitle: "Access to US credit cards",
    price: "$1,497",
    currency: "USD – One time fee",
    features: [
      "Everything in Premium+",
      "ITIN Application",
      "Personalized Support",
      "Credit Building Launch Pad Guide",
      "Credit Card Consulting",
      "Travel Rewards Maxing",
    ],
    note: "Get access to American credit cards",
    highlight: false,
    highlightLabel: "",
    highlightColor: "",
  },
];

export default function Step5({ onNext, onBack, onClose }: Step5Props) {
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 bg-[#0E0718] flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => {
            if (onClose) onClose();
            router.push("/");
          }}
          className="p-0 bg-transparent border-none"
          aria-label="Go to home"
        >
          <Image src="/logo.png" alt="Readylaunch Logo" width={120} height={32} className="cursor-pointer" />
        </button>
        <button className="bg-[#232336] text-white text-sm px-4 py-2 rounded-lg font-medium shadow hover:bg-[#232336]/80 transition">
          Chat with us
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start px-8 mt-0">
        <h2 className="text-2xl font-bold text-white mb-4 text-center w-full">
          Choose your LLC package
        </h2>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-2 mb-1 justify-center items-stretch">
          {plans.map((plan) => (
            <button
              key={plan.key}
              type="button"
              className={`flex-1 max-w-md rounded-2xl p-1 text-left transition flex flex-col justify-between relative
                ${
                  plan.highlight
                    ? selected === plan.key
                      ? "border-2 border-[#5B7FFF] bg-[#181028] shadow-lg"
                      : "border-2 border-[#5B7FFF] bg-[#181028]"
                    : selected === plan.key
                    ? "border-2 border-white bg-[#232336] shadow-lg"
                    : "border-2 border-[#232336] bg-[#232336]"
                }
              `}
              onClick={() => setSelected(plan.key)}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-6 px-3 py-1 rounded-full bg-[#232336] border border-[#5B7FFF] text-[#5B7FFF] text-xs font-semibold shadow-sm">
                  {plan.highlightLabel}
                </div>
              )}
              <div className="flex items-center gap-2 mb-1 text-2xl">
                <Image src={plan.icon} alt="" width={48} height={48} />
              </div>
              <div className="font-bold text-lg mb-1 text-white">{plan.title}</div>
              <div className="text-gray-400 text-xs mb-1">{plan.subtitle}</div>
              <div className="font-bold text-2xl mb-1 text-white">{plan.price}</div>
              <div className="text-gray-400 text-xs mb-2">{plan.currency}</div>
              <ul className="mb-2 text-white text-xs list-none pl-0">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-1 mb-1">
                    <span className="text-white text-base">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <div className="mt-1 mb-1 px-2 py-1 rounded-full bg-[#232336] text-gray-200 text-xs font-semibold w-fit">
                  {plan.note}
                </div>
              )}
              <div className="flex justify-end mt-2">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                    selected === plan.key
                      ? "border-[#5B7FFF]"
                      : "border-gray-400"
                  }`}
                >
                  {selected === plan.key && (
                    <span className="w-3 h-3 rounded-full bg-[#5B7FFF]" />
                  )}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Botones abajo a la izquierda */}
      <div className="absolute bottom-6 left-6 flex gap-4">
        <button
          className="w-14 h-14 rounded-full bg-[#232336] text-2xl text-white flex items-center justify-center"
          onClick={onBack}
          aria-label="Back"
        >
          ‹
        </button>
        <button
          className={`px-10 py-3 rounded-full font-semibold text-base flex items-center gap-2 transition ${
            selected
              ? "bg-white text-[#232336] hover:bg-gray-100"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!selected}
          onClick={() => onNext(selected)}
        >
          Next <span aria-hidden>›</span>
        </button>
      </div>
      {/* Chat Button bottom right */}
      <div className="absolute bottom-6 right-6">
        <button className="border border-white text-white text-xs px-4 py-2 rounded-lg bg-transparent hover:bg-white/10 transition">
          Chat with us
        </button>
      </div>
    </div>
  );
}