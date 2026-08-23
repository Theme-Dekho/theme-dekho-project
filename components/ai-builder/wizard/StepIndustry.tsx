import type { IndustryKey } from "@/lib/ai-builder/types";

interface StepIndustryProps {
  active: boolean;
  industryKey: IndustryKey | "";
  invalid: boolean;
  onChange: (value: string) => void;
}

export default function StepIndustry({ active, industryKey, invalid, onChange }: StepIndustryProps) {
  return (
    <div className={"wizard-panel" + (active ? " active" : "")}>
      <div className="wiz-card">
        <span className="wiz-label">Which industry is your business in?</span>
        <p className="wiz-sub">This helps our AI pick the right layout, pages, and features for you.</p>
        <div className="select-wrap">
          <select
            className={"wiz-select" + (invalid ? " invalid" : "")}
            value={industryKey}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="" disabled>
              Select your industry
            </option>
            <option value="interior">Interior &amp; Architecture</option>
            <option value="medical">Medical &amp; Healthcare</option>
            <option value="realestate">Real Estate</option>
            <option value="other">Ecommerce</option>
          </select>
        </div>
      </div>
    </div>
  );
}
