import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Step4Props {
  onNext: (state: string) => void;
  onBack: () => void;
  onClose?: () => void;
}

const states = [
  {
    key: "delaware",
    name: "Delaware",
    description:
      "Recommended for LLCs due to lower annual costs and greater flexibility. There’s no corporate income tax or annual franchise tax.",
    recommended: false,
  },
  {
    key: "wyoming",
    name: "Wyoming",
    description:
      "Recommended for LLCs due to lower annual costs and greater flexibility. There’s no corporate income tax or annual franchise tax.",
    recommended: true,
  },
  {
    key: "florida",
    name: "Florida",
    description:
      "Recommended for LLCs due to lower annual costs and greater flexibility. There’s no corporate income tax or annual franchise tax.",
    recommended: false,
  },
];

export default function Step4({ onNext, onBack, onClose }: Step4Props) {
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
          <Image
            src="/logo.png"
            alt="Readylaunch Logo"
            width={120}
            height={32}
            className="cursor-pointer"
          />
        </button>
        <button className="bg-[#232336] text-white text-sm px-4 py-2 rounded-lg font-medium shadow hover:bg-[#232336]/80 transition">
          Need Help?
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start px-4 mt-2">
        <h2 className="text-3xl font-bold text-white mb-8 text-center w-full">
          Choose your registration state
        </h2>
        <div className="w-full max-w-xl mb-4 text-left text-white font-medium">
          Popular States
        </div>
        <div className="w-full max-w-xl flex flex-col gap-6 mb-8">
          {states.map((state) => (
            <button
              key={state.key}
              type="button"
              className={`relative text-left rounded-2xl px-6 py-6 transition border-none ${
                selected === state.key
                  ? "bg-[#181028] ring-2 ring-[#5B7FFF]"
                  : "bg-[#232336]"
              }`}
              onClick={() => setSelected(state.key)}
            >
              <div className="font-bold text-lg mb-2 text-white">
                {state.name}
              </div>
              {state.recommended && (
                <span className="absolute top-6 right-6 bg-green-700 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <div className="text-gray-300 text-base mb-2">
                {state.description}
              </div>
              <div className="absolute bottom-6 right-6">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                    selected === state.key ? "border-[#5B7FFF]" : "border-gray-400"
                  }`}
                >
                  {selected === state.key && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B7FFF]" />
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
      {/* Texto "Not sure? Take the quiz" centrado abajo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-base">
        Not sure?{" "}
        <span className="underline cursor-pointer">Take the quiz</span>
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