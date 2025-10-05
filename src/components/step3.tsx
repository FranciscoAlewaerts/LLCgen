import React, { useState } from "react";
import Image from "next/image";

interface Step3Props {
  onNext: (companyName: string) => void;
  onBack: () => void;
  onClose?: () => void;
}

export default function Step3({ onNext, onBack, onClose }: Step3Props) {
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="fixed inset-0 z-50 bg-[#0E0718] flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Image src="/logo.png" alt="Readylaunch Logo" width={120} height={32} />
        </div>
        <button className="bg-[#232336] text-white text-sm px-4 py-2 rounded-lg font-medium shadow hover:bg-[#232336]/80 transition">
          Need Help?
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start px-4 mt-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center w-full">
          Choose your desired company name
        </h2>
        <input
          type="text"
          className="w-full max-w-md mb-8 px-4 py-4 rounded-xl bg-[#181028] text-white text-base border border-[#5B7FFF] outline-none placeholder:text-gray-400"
          placeholder="Acme Solutions LLC"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <div className="w-full max-w-md mb-8 px-6 py-5 bg-[#232336] rounded-xl text-white text-left">
          <span className="font-bold block mb-2">Pro Tip:</span>
          <span>
            Create a unique name for your agency so that you can generate confidence to your customers and it’s easy to find and read. Make sure it’s not similar to anything else in the market place. Name can be 1 or 2 words. The broader the better
          </span>
        </div>
      </div>
      {/* Botones abajo a la izquierda, fuera del main content */}
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
            companyName
              ? "bg-white text-[#232336] hover:bg-gray-100"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!companyName}
          onClick={() => onNext(companyName)}
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