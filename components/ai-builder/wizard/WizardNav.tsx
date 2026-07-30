import { TOTAL_STEPS } from "@/lib/ai-builder/data";

interface WizardNavProps {
  step: number;
  wizNavError: string;
  onBack: () => void;
  onNext: () => void;
}

export default function WizardNav({ step, wizNavError, onBack, onNext }: WizardNavProps) {
  return (
    <>
      <p className="wiz-nav-error" style={{ display: wizNavError ? "block" : "none" }}>
        {wizNavError}
      </p>
      <div className="wiz-nav">
        <button className="btn btn-wiz-back" type="button" disabled={step === 1} onClick={onBack}>
          ← Back
        </button>
        <button className="btn btn-wiz-next" type="button" onClick={onNext}>
          {step === TOTAL_STEPS ? "✨ Free Website Build with AI" : "Next →"}
        </button>
      </div>
    </>
  );
}
