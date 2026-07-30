import { stepLabels, TOTAL_STEPS } from "@/lib/ai-builder/data";

interface WizardProgressProps {
  step: number;
}

export default function WizardProgress({ step }: WizardProgressProps) {
  return (
    <div className="wizard-progress">
      {stepLabels.map((label: string, i: number) => {
        const n = i + 1;
        const cls = "wizard-step-dot" + (n === step ? " active" : "") + (n < step ? " done" : "");
        return (
          <span key={label} style={{ display: "contents" }}>
            <div className={cls}>
              <span className="num">{n < step ? "✓" : n}</span>
              <span className="label">{label}</span>
            </div>
            {n < TOTAL_STEPS && <div className="wizard-connector" />}
          </span>
        );
      })}
    </div>
  );
}
