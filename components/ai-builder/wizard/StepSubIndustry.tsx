import type { IndustryInfo } from "@/lib/ai-builder/types";

interface StepSubIndustryProps {
  active: boolean;
  currentIndustry: IndustryInfo | null;
  subIndustry: string;
  invalid: boolean;
  onChange: (value: string) => void;
}

export default function StepSubIndustry({
  active,
  currentIndustry,
  subIndustry,
  invalid,
  onChange,
}: StepSubIndustryProps) {
  return (
    <div className={"wizard-panel" + (active ? " active" : "")}>
      <div className="wiz-card">
        <span className="wiz-label">Choose your specialisation</span>
        <p className="wiz-sub">Pick the option closest to your business.</p>
        <div className="select-wrap">
          <select
            className={"wiz-select" + (invalid ? " invalid" : "")}
            value={subIndustry}
            onChange={(e) => onChange(e.target.value)}
            disabled={!currentIndustry}
          >
            <option value="" disabled>
              Select sub-industry
            </option>
            {currentIndustry?.subIndustries.map((s: string) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
