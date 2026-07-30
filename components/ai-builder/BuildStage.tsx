import type { FloatItem } from "@/lib/ai-builder/types";

interface BuildStageProps {
  buildFillActive: boolean;
  buildDuration: number;
  buildStepsTotal: number;
  buildStepsDone: number;
  floatItems: FloatItem[];
}

export default function BuildStage({
  buildFillActive,
  buildDuration,
  buildStepsTotal,
  buildStepsDone,
  floatItems,
}: BuildStageProps) {
  return (
    <div className="build-stage active">
      <h3>✨ Building your website with AI...</h3>
      <p className="build-sub">Please wait while we generate your pages, layout, and content.</p>
      {buildStepsTotal > 0 && (
        <p className="build-progress-count">
          {Math.min(buildStepsDone, buildStepsTotal)} of {buildStepsTotal} steps completed
        </p>
      )}
      <div className="build-progress-bar">
        <div
          className="build-progress-fill"
          style={{
            width: buildFillActive ? "100%" : "0%",
            transitionDuration: buildDuration + "ms",
          }}
        />
      </div>
      <div className="float-zone">
        {floatItems.map((item) => (
          <div key={item.id} className="float-item" style={{ left: item.left + "%", top: item.top + "%" }}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
