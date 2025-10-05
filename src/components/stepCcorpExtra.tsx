import React, { useState } from "react";

interface StepCcorpExtraProps {
  onNext: (sCorpStatus: "S-Corp" | "No") => void;
  onBack: () => void;
  onClose?: () => void;
}

export default function StepCcorpExtra({ onNext, onBack, onClose }: StepCcorpExtraProps) {
  const [selected, setSelected] = useState<"S-Corp" | "No" | "">("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0718] overflow-auto">
      {/* Gradiente de fondo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-20vw] top-[-20vw] w-[60vw] h-[60vw] bg-purple-900 opacity-40 rounded-full blur-3xl" />
        <div className="absolute right-[-20vw] bottom-[-20vw] w-[60vw] h-[60vw] bg-purple-900 opacity-40 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-12">
        {onClose && (
          <button
            className="absolute top-6 right-8 text-gray-400 hover:text-black text-2xl"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        )}
        <h2 className="text-3xl font-bold mb-10 text-white text-center">
          Would you like to obtain S-Corp status?
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full mb-8">
          {/* S-Corp Card */}
          <button
            type="button"
            className={`flex-1 rounded-2xl border-2 p-6 text-left transition min-w-[320px] ${
              selected === "S-Corp"
                ? "border-[#2B174D] bg-white/90 shadow-lg"
                : "border-gray-200 bg-white/80"
            }`}
            onClick={() => setSelected("S-Corp")}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">%</span>
              <span className="font-bold text-lg">S-Corp</span>
            </div>
            <div className="text-gray-500 mb-3 text-sm">
              For small businesses with tax-efficient corporate benefits.
            </div>
            <hr className="my-2" />
            <ul className="text-sm space-y-1 mb-2">
              <li className="flex items-center gap-2 text-gray-700">✔ Pass-through taxation</li>
              <li className="flex items-center gap-2 text-gray-700">✔ Limited liability protection for owners</li>
              <li className="flex items-center gap-2 text-gray-700">✔ Ability to raise capital by issuing stock</li>
              <li className="flex items-center gap-2 text-gray-700">✘ Only U.S. citizens or residents can be shareholders</li>
              <li className="flex items-center gap-2 text-gray-700">✘ Limited to 100 shareholders or fewer</li>
              <li className="flex items-center gap-2 text-gray-700">✘ Only common stock allowed — no preferred stock</li>
            </ul>
            <div className="flex justify-end">
              <span
                className={`inline-block w-5 h-5 rounded-full border-2 ${
                  selected === "S-Corp" ? "border-[#2B174D] bg-[#2B174D]" : "border-gray-300"
                }`}
              />
            </div>
          </button>
          {/* No Thanks Card */}
          <button
            type="button"
            className={`flex-1 rounded-2xl border-2 p-6 text-left transition min-w-[220px] flex flex-col justify-between ${
              selected === "No"
                ? "border-[#2B174D] bg-white/90 shadow-lg"
                : "border-gray-200 bg-white/80"
            }`}
            onClick={() => setSelected("No")}
          >
            <div>
              <span className="font-bold text-lg">No thanks</span>
              <div className="text-gray-500 mt-2 text-sm">
                I don't want S-Corp status at this time.
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <span
                className={`inline-block w-5 h-5 rounded-full border-2 ${
                  selected === "No" ? "border-[#2B174D] bg-[#2B174D]" : "border-gray-300"
                }`}
              />
            </div>
          </button>
        </div>
        <div className="flex items-start mb-6 px-6 py-5 bg-blue-50 rounded-xl text-blue-700 text-base w-full max-w-2xl">
          <span className="mr-3 mt-1">💡</span>
          <span>
            An S-Corp operates as a pass-through entity, meaning its earnings are taxed solely at the individual level. This structure eliminates double taxation and can make managing your taxes more straightforward.
          </span>
        </div>
        <div className="flex gap-2 w-full max-w-2xl justify-between">
          <button
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold"
            onClick={onBack}
          >
            ‹
          </button>
          <button
            className={`px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              selected
                ? "bg-[#2B174D] text-white hover:bg-[#24123e]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!selected}
            onClick={() => selected && onNext(selected)}
          >
            Next <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}