import type { Chip } from "@/lib/ai-builder/types";

interface StepPagesFeaturesProps {
  active: boolean;
  pages: Chip[];
  features: Chip[];
  addPageInput: string;
  addFeatureInput: string;
  pagesInvalid: boolean;
  onTogglePage: (idx: number) => void;
  onToggleFeature: (idx: number) => void;
  onAddPageInputChange: (value: string) => void;
  onAddFeatureInputChange: (value: string) => void;
  onAddPage: () => void;
  onAddFeature: () => void;
}

export default function StepPagesFeatures({
  active,
  pages,
  features,
  addPageInput,
  addFeatureInput,
  pagesInvalid,
  onTogglePage,
  onToggleFeature,
  onAddPageInputChange,
  onAddFeatureInputChange,
  onAddPage,
  onAddFeature,
}: StepPagesFeaturesProps) {
  return (
    <div className={"wizard-panel" + (active ? " active" : "")}>
      <div className="wiz-card">
        <div className="wiz-block">
          <span className="wiz-label">Pages for your website</span>
          <p className="wiz-sub">
            Default pages are pre-selected based on your industry — untick anything you don&apos;t need.
          </p>
          <div className={"chip-list" + (pagesInvalid ? " invalid" : "")}>
            {pages.map((chip, idx) => (
              <label key={chip.label + idx} className={"chip-check" + (chip.checked ? " checked" : "")}>
                <input type="checkbox" checked={chip.checked} onChange={() => onTogglePage(idx)} />
                <span className="tick">{chip.checked ? "✓" : ""}</span>
                {chip.label}
              </label>
            ))}
          </div>
          <div className="add-chip-form">
            <input
              type="text"
              value={addPageInput}
              onChange={(e) => onAddPageInputChange(e.target.value)}
              placeholder="Add a custom page e.g. Careers"
            />
            <button className="btn-add-chip" type="button" onClick={onAddPage}>
              + Add Page
            </button>
          </div>
        </div>
        <div className="wiz-block">
          <span className="wiz-label">Website features</span>
          <p className="wiz-sub">Recommended features for your industry — add more as needed.</p>
          <div className="chip-list">
            {features.map((chip, idx) => (
              <label key={chip.label + idx} className={"chip-check" + (chip.checked ? " checked" : "")}>
                <input type="checkbox" checked={chip.checked} onChange={() => onToggleFeature(idx)} />
                <span className="tick">{chip.checked ? "✓" : ""}</span>
                {chip.label}
              </label>
            ))}
          </div>
          <div className="add-chip-form">
            <input
              type="text"
              value={addFeatureInput}
              onChange={(e) => onAddFeatureInputChange(e.target.value)}
              placeholder="Add a custom / add-on feature"
            />
            <button className="btn-add-chip" type="button" onClick={onAddFeature}>
              + Add Feature
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
