import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Step6Props {
  onNext: (addressType: string) => void;
  onBack: () => void;
  onClose?: () => void;
}

const addressOptions = [
  {
    key: "virtual",
    title: "US Virtual Address",
    description: "Get a Virtual address which is required to open and maintain a virtual business bank",
    price: "$31",
    priceDetail: "/mo",
    note: "A US address is required for incorporation.",
    highlight: true,
    highlightLabel: "Most Popular",
  },
  {
    key: "physical",
    title: "Premium Physical Address",
    description: "Allows you to get proof of address in the US to open and maintain a US physical bank such as chase",
    extra: "Get a lease agreement as proof of address",
    price: "$85",
    priceDetail: "/mo",
    note: "",
    highlight: false,
    highlightLabel: "",
  },
  {
    key: "none",
    title: "No Thanks,",
    description: "I do not want want a US address to set up a business banking in order to accept and receive US dollars.",
    price: "",
    priceDetail: "",
    note: "",
    highlight: false,
    highlightLabel: "",
  },
];

export default function Step6({ onNext, onBack, onClose }: Step6Props) {
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
      <div className="flex flex-col items-center justify-start px-6 mt-2">
        <h2 className="text-3xl font-bold text-white mb-10 text-center w-full">
          Mail box for your company
        </h2>
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 mb-8">
          {addressOptions.slice(0, 2).map((option) => (
            <button
              key={option.key}
              type="button"
              className={`flex-1 rounded-2xl p-8 text-left transition flex flex-col justify-between relative
                ${
                  option.highlight
                    ? selected === option.key
                      ? "border-2 border-[#5B7FFF] bg-[#181028] shadow-lg"
                      : "border-2 border-[#5B7FFF] bg-[#181028]"
                    : selected === option.key
                    ? "border-2 border-white bg-[#232336] shadow-lg"
                    : "border-2 border-[#232336] bg-[#232336]"
                }
              `}
              onClick={() => setSelected(option.key)}
            >
              {option.highlight && (
                <div className="absolute -top-5 left-6 px-3 py-1 rounded-full bg-[#232336] border border-[#5B7FFF] text-[#5B7FFF] text-xs font-semibold shadow-sm">
                  {option.highlightLabel}
                </div>
              )}
              <div className="font-bold text-lg mb-2 text-white">{option.title}</div>
              <div className="text-gray-300 text-base mb-2">{option.description}</div>
              {option.extra && (
                <div className="text-gray-300 text-sm mb-2">{option.extra}</div>
              )}
              {option.price && (
                <div className="font-bold text-2xl mb-1 text-white">
                  {option.price}
                  <span className="text-base font-normal text-gray-300">{option.priceDetail}</span>
                </div>
              )}
              {option.note && (
                <div className="mt-2 mb-2 px-3 py-1 rounded-full bg-[#232336] text-gray-200 text-xs font-semibold w-fit">
                  {option.note}
                </div>
              )}
              <div className="flex justify-end mt-4">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                    selected === option.key
                      ? "border-[#5B7FFF]"
                      : "border-gray-400"
                  }`}
                >
                  {selected === option.key && (
                    <span className="w-3 h-3 rounded-full bg-[#5B7FFF]" />
                  )}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="w-full max-w-4xl">
          <button
            type="button"
            className={`w-full rounded-2xl p-6 text-left transition flex flex-col justify-between relative
              ${
                selected === "none"
                  ? "border-2 border-[#5B7FFF] bg-[#232336] shadow-lg"
                  : "border-2 border-[#232336] bg-[#232336]"
              }
            `}
            onClick={() => setSelected("none")}
          >
            <div className="font-bold text-lg mb-2 text-white">No Thanks,</div>
            <div className="text-gray-300 text-base mb-2">
              I do not want want a US address to set up a business banking in order to accept and receive US dollars.
            </div>
            <div className="flex justify-end">
              <span
                className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                  selected === "none"
                    ? "border-[#5B7FFF]"
                    : "border-gray-400"
                }`}
              >
                {selected === "none" && (
                  <span className="w-3 h-3 rounded-full bg-[#5B7FFF]" />
                )}
              </span>
            </div>
          </button>
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