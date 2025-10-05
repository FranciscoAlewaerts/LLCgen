import React, { useState } from "react";
import Step1 from "@/components/step1";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";
import Step4 from "@/components/step4";
import Step5 from "@/components/step5";
import Step6 from "@/components/step6";
import Step7 from "@/components/step7";

export default function LLCStepper({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<{
    startType?: "setup" | "onboard";
    type?: "LLC" | "C-Corp";
    companyName?: string;
    sCorpStatus?: "S-Corp" | "No";
    state?: string;
    plan?: string;
    country?: string;
    addressType?: string;
  }>({});

  return (
    <>
      {step === 1 && (
        <Step1
          onNext={(startType: "setup" | "onboard") => {
            setForm((prev) => ({ ...prev, startType }));
            setStep(2);
          }}
          onClose={onClose}
        />
      )}
      {step === 2 && (
        <Step2
          onNext={(country: string) => {
            setForm((prev) => ({ ...prev, country }));
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <Step3
          onNext={(companyName: string) => {
            setForm((prev) => ({ ...prev, companyName }));
            setStep(4);
          }}
          onBack={() => setStep(2)}
        />
      )}
      {step === 4 && (
        <Step4
          onNext={(state: string) => {
            setForm((prev) => ({ ...prev, state }));
            setStep(5);
          }}
          onBack={() => {
            if (form.type === "C-Corp") setStep(99);
            else setStep(3);
          }}
          onClose={onClose}
        />
      )}
      {step === 5 && (
        <Step5
          onNext={(plan: string) => {
            setForm((prev) => ({ ...prev, plan }));
            setStep(6);
          }}
          onBack={() => setStep(4)}
          onClose={onClose}
        />
      )}
      {step === 6 && (
        <Step6
          form={form}
          onNext={(addressType: string) => {
            setForm((prev) => ({ ...prev, addressType }));
            setStep(7);
          }}
          onBack={() => setStep(5)}
          onClose={onClose}
        />
      )}
      {step === 7 && (
        <Step7
          form={form}
          onBack={() => setStep(6)}
          onClose={onClose}
        />
      )}
    </>
  );
}