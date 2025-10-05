import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Opciones de cada paso (puedes importarlos si los tienes en archivos separados)
const plans = [
  { key: "starter", title: "Starter", price: "$500", priceDetail: "/once" },
  { key: "premium", title: "Premium+", price: "$850", priceDetail: "/once" },
  { key: "credit", title: "Credit Accelerator", price: "$1,497", priceDetail: "/once" },
];

const addressOptions = [
  { key: "virtual", title: "US Virtual Address", price: "$31", priceDetail: "/mo" },
  { key: "physical", title: "Premium Physical Address", price: "$85", priceDetail: "/mo" },
  { key: "none", title: "No Thanks,", price: "", priceDetail: "" },
];

const states = [
  { key: "delaware", name: "Delaware" },
  { key: "wyoming", name: "Wyoming" },
  { key: "florida", name: "Florida" },
];

interface Step7Props {
  onBack: () => void;
  onClose?: () => void;
  form?: {
    companyName?: string;
    state?: string;      // key de estado
    plan?: string;       // key de plan
    addressType?: string;// key de dirección
  };
}

export default function Step7({ onBack, onClose, form }: Step7Props) {
  const router = useRouter();

  // Busca el objeto seleccionado por key
  const selectedPlan = plans.find(p => p.key === form?.plan);
  const selectedAddress = addressOptions.find(a => a.key === form?.addressType);
  const selectedState = states.find(s => s.key === form?.state);

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
      <div className="flex flex-col items-center justify-start px-4 mt-0">
        <h2
  className="text-3xl font-bold text-white mb-3 text-center w-full"
  style={{ fontFamily: "Work Sans, sans-serif" }}
>
  Review and pay
</h2>
<div className="text-gray-300 text-center mb-3 text-base">
  <span style={{ fontFamily: "Inter Display, sans-serif" }}>
    You're almost done 🎉
  </span>
  <br />
  <span style={{ fontFamily: "Inter Display, sans-serif" }}>
    Please review your information and proceed to payment
  </span>
</div>
        <div className="w-full max-w-xl flex flex-col gap-3 mb-3">
          {/* Company Name */}
          <div className="flex items-center justify-between bg-[#232336] rounded-xl px-6 py-3">
            <div>
              <div className="text-sm text-gray-400 mb-1">Desired Company Name:</div>
              <div className="text-white font-bold text-lg">{form?.companyName || "No name selected"}</div>
            </div>
            <button className="ml-2 p-2 rounded-lg bg-[#181028] hover:bg-[#232336] transition">
              <Image src="/edit.svg" alt="Edit" width={22} height={22} />
            </button>
          </div>
          {/* State */}
          <div className="flex items-center justify-between bg-[#232336] rounded-xl px-6 py-3">
            <div>
              <div className="text-sm text-gray-400 mb-1">Registration State:</div>
              <div className="text-white font-bold text-lg">
                {selectedState?.name || "No state selected"}
              </div>
            </div>
            <button className="ml-2 p-2 rounded-lg bg-[#181028] hover:bg-[#232336] transition">
              <Image src="/edit.svg" alt="Edit" width={22} height={22} />
            </button>
          </div>
          {/* Package */}
          <div className="flex items-center justify-between bg-[#232336] rounded-xl px-6 py-3">
            <div>
              <div className="text-sm text-gray-400 mb-1">LLC Package</div>
              <div className="text-white font-bold text-lg">{selectedPlan?.title || "No package selected"}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-white font-bold text-lg">{selectedPlan?.price}</div>
              <span className="text-sm text-gray-400">{selectedPlan?.priceDetail}</span>
              <button className="ml-2 p-2 rounded-lg bg-[#181028] hover:bg-[#232336] transition">
                <Image src="/edit.svg" alt="Edit" width={22} height={22} />
              </button>
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center justify-between bg-[#232336] rounded-xl px-6 py-3">
            <div className="text-white font-bold text-lg">{selectedAddress?.title || "No address selected"}</div>
            {selectedAddress?.price && (
              <div className="flex items-center gap-2">
                <div className="text-white font-bold text-lg">{selectedAddress.price}</div>
                <span className="text-sm text-gray-400">{selectedAddress.priceDetail}</span>
                <button className="ml-2 p-2 rounded-lg bg-[#181028] hover:bg-[#232336] transition">
                  <Image src="/edit.svg" alt="Edit" width={22} height={22} />
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Proceed to payment */}
        <div className="w-full max-w-xl mb-3">
          <button className="w-full rounded-xl px-6 py-4 bg-[#232336] text-white font-bold text-lg border-2 border-[#5B7FFF] hover:bg-[#181028] transition">
            Proceed to payment
          </button>
        </div>
        {/* Guarantee */}
        <div className="w-full max-w-xl flex items-center justify-center">
          <div className="bg-[#181028] rounded-xl px-6 py-3 w-full flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/media/verify.png" alt="Check" width={22} height={22} />
              <span className="text-green-500 text-base font-semibold">
                7-day money-back guarantee
              </span>
            </div>
            <span className="text-gray-400 text-base text-center">
              on ReadyLaunch fees if services can't proceed or key steps haven't started. Terms and conditions apply.
            </span>
          </div>
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