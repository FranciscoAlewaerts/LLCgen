import Image from "next/image";
import React from "react";

interface Step1Props {
  onNext: (option: string) => void;
  onClose?: () => void;
}

export default function Step1({ onNext, onClose }: Step1Props) {
  return (
    <div className="fixed inset-0 z-50 bg-[#0E0718] flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onClose && onClose()}
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
        </div>
        <button className="bg-[#232336] text-white text-sm px-4 py-2 rounded-lg font-medium shadow hover:bg-[#232336]/80 transition">
          Need Help?
        </button>
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start flex-1 px-4 mt-24">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Let’s get started!
        </h1>
        <div className="flex flex-col gap-6 w-full max-w-md">
          <button
            className="w-full py-4 rounded-lg border border-[#5B7FFF] bg-[#232336] text-white text-base font-medium shadow transition hover:bg-[#232336]/90"
            onClick={() => onNext("setup")}
          >
            Setup a new LLC
          </button>
          <button
            className="w-full py-4 rounded-lg bg-[#181028] text-[#5B7FFF] text-base font-medium shadow transition hover:bg-[#232336]/90"
            onClick={() => onNext("onboard")}
          >
            Onboard my existing company
          </button>
          <div className="flex flex-row items-center gap-6 bg-transparent mt-2">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 text-left">
                Setup a new LLC
              </h2>
              <p className="text-base text-left text-gray-300 max-w-md">
                We&apos;ll help you setup everything from State Filing, Registered
                Agent, EIN and a business Bank Account to set you up for success.
              </p>
            </div>
          </div>
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