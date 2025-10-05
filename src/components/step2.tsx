import React, { useState } from "react";
import Image from "next/image";

interface Step2Props {
  onNext: (country: string) => void;
  onBack: () => void;
}

const countries = [
  "United States",
  "Argentina",
  "Brazil",
  "Canada",
  "Chile",
  "Colombia",
  "Mexico",
  "Spain",
  "Other",
];

export default function Step2({ onNext, onBack }: Step2Props) {
  const [country, setCountry] = useState("");

  return (
    <div className="fixed inset-0 z-50 bg-[#0E0718] flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Readylaunch Logo" width={120} height={32} />
        </div>
        <button className="bg-[#232336] text-white text-sm px-4 py-2 rounded-lg font-medium shadow hover:bg-[#232336]/80 transition">
          Need Help?
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start px-4 mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-left w-full max-w-md">
          Which country do you
          <br />reside in?{" "}
          <span role="img" aria-label="globe">
            🌍
          </span>
        </h2>
        <select
          className="w-full max-w-md mb-6 px-4 py-3 rounded-lg border border-[#5B7FFF] bg-[#181028] text-white focus:outline-none focus:ring-2 focus:ring-[#5B7FFF] text-base"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select country of residence</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <div className="w-full max-w-md mb-6 px-6 py-4 bg-[#232336] rounded-xl text-white text-sm text-center">
          We may offer recommendations depending on your country of residence.
        </div>
        <div className="w-full max-w-md flex justify-start mb-6">
          <button
            className={`w-36 py-3 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition ${
              country
                ? "bg-white text-[#232336] hover:bg-gray-100"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!country}
            onClick={() => onNext(country)}
          >
            Next{" "}
            <span aria-hidden="true" className="text-lg">
              ›
            </span>
          </button>
        </div>
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