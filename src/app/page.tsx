"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import LLCStepper from "@/app/LLCstepper"; 

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showStepper, setShowStepper] = useState(false);
  const [stepperVisible, setStepperVisible] = useState(false);

  useEffect(() => {
    const token = searchParams.get("whop-token");
    if (!token) {
      setUser(null);
      return;
    }
    localStorage.setItem("whop-token", token);
    fetch("https://api.whop.com/api/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("whop-user", JSON.stringify(data.user));
      })
      .catch(() => {
        setUser(null);
        localStorage.removeItem("whop-user");
      });
  }, [searchParams, router]);

  // Manejo de transición para el stepper
  const openStepper = () => {
    setShowStepper(true);
    setTimeout(() => setStepperVisible(true), 10);
  };

  const closeStepper = () => {
    setStepperVisible(false);
    setTimeout(() => setShowStepper(false), 300);
  };

  // Si el usuario está logueado, muestra el dashboard normal
  if (user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white" style={{ fontFamily: "Work Sans, sans-serif" }}>
        <h1 className="text-3xl font-bold mb-4">¡Hola {user.username}!</h1>
        <h2 className="text-xl mb-6">Start your business</h2>
        <div className="flex flex-col gap-4">
          <a href="/register/us">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">Soy estadounidense</button>
          </a>
          <a href="/register/foreign">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl">Soy extranjero</button>
          </a>
        </div>
      </main>
    );
  }

  // Si showStepper es true, muestra solo el stepper con transición
  if (showStepper) {
    return (
      <main className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0718]" style={{ fontFamily: "Work Sans, sans-serif" }}>
        <div
          className={`transition-all duration-300 ${
            stepperVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          } w-full h-full flex items-center justify-center`}
        >
          <LLCStepper onClose={closeStepper} />
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-[#0E0718] overflow-x-hidden" style={{ fontFamily: "Work Sans, sans-serif" }}>
      {/* Fondo decorativo */}
      <img
        src="/gradient-corner.png"
        alt=""
        className="pointer-events-none select-none absolute right-0 top-0 w-[60vw] max-w-[600px] h-auto z-0"
        aria-hidden="true"
        draggable={false}
      />
      <img
        src="/gradient-corner2.png"
        alt=""
        className="pointer-events-none select-none absolute left-0 top-0 w-[60vw] max-w-[600px] h-auto z-0"
        aria-hidden="true"
        draggable={false}
      />
    
      <header className="w-full flex flex-col items-center pt-8 z-10">
        <Image
          src="/logo.png"
          alt="ReadyLaunch Logo"
          width={220}
          height={40}
          className="mb-2"
          priority
        />
        <div className="w-full max-w-xl h-0.5 bg-gradient-to-r from-transparent via-[#e0bcbc] to-transparent mb-2" />
      </header>

      <section className="flex flex-col items-center justify-center flex-1 z-10 w-full px-4 mt-8">
        <button
          className="mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-gray-400 to-white text-white text-base font-semibold border border-gray-300 shadow disabled:opacity-100"
          style={{ color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.15)", fontFamily: "Inter Display, sans-serif" }}
          disabled
        >
          Set up in minutes - Hassle Free!
        </button>
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4 leading-tight"
        >
          Create &amp; Manage Your US<br />
          based LLC ALL From One
        </h1>
        <p className="text-base text-center text-gray-200 mb-2" style={{ fontFamily: "Inter Display, sans-serif" }}> 
          Start your company in a few clicks - No matter where you are from!
        </p>
        <p className="text-base text-center text-gray-400 mb-6">
          <span className="font-bold">Incorporate, Banking, Compliance, Taxes</span> and more - All in one place. Everything you need to build and scale
        </p>
        <div className="flex gap-4 mb-4">
          <button className="px-8 py-3 bg-white text-black font-semibold text-base rounded-xl shadow-lg hover:bg-gray-100 transition" onClick={openStepper}>
            Start my LLC
          </button>
          <button className="px-8 py-3 bg-[#5a5a8f] text-white font-semibold text-base rounded-xl shadow-lg hover:bg-[#6d6dbb] transition">
            Book a free Consultation
          </button>
        </div>
        <p className="text-xs text-center text-gray-400 mb-8">
          SPECIAL PRICING FOR COMMUNITY<br />
          MEMBERS AND PREFERRED Support
        </p>
        <p
          className="text-xs text-center mb-6"
          style={{ color: "#40449C" }}
        >
          500+ companies started for entrepreneurs around the world
        </p>
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <Image src="/media/mercury.png" alt="Mercury" width={90} height={32} />
          <Image src="/media/stripe.png" alt="Stripe" width={90} height={32} />
          <Image src="/media/relay.png" alt="Relay" width={90} height={32} />
          <Image src="/media/payoneer.png" alt="Payoneer" width={90} height={32} />
          <Image src="/media/wise.png" alt="Wise" width={90} height={32} />
        </div>
      </section>

      {/* How Does It Work */}
      <section className="w-full max-w-4xl mx-auto px-4 pb-16 z-10">
        <div className="flex flex-col items-center">
          <div className="w-48 h-4 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 rounded-full mb-4 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How Does It Work?</h2>
          <p className="text-base text-center text-gray-300 mb-10 max-w-2xl">
            Fill out your company details in minutes. We will set up your company all done for you in collaboration with Readylaunch to get your company Tax ID (EIN), in order for you to be able to open US bank account. No matter where you are from.
          </p>
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {["Submit", "Incorporate", "Navigate", "Grow"].map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-[#232336] text-white flex items-center justify-center text-2xl font-bold mb-2 border-2 border-[#5B7FFF]">
                  {i + 1}.
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{step}</h3>
                <p className="text-sm text-gray-400 text-center">
                  Tell us about your company<br />
                  And co founders, then sign<br />
                  documents
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}