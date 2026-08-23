interface BuildStageProps {
  buildFillActive: boolean;
}

export default function BuildStage({
  buildFillActive,
}: BuildStageProps) {
  return (
    <div className="build-stage active">
      <h3>
        ✨ Building your website with AI...
      </h3>

      <p className="build-sub">
        Please wait while we generate your pages,
        layout, and content.
      </p>

      {/* <div className="build-progress-bar">
        <div
          className="build-progress-fill"
          style={{
            width: buildFillActive
              ? "100%"
              : "0%",
            transitionDuration: "30s",
          }}
        />
      </div> */}
      <div className="build-progress-bar">
      <div
        className={`build-progress-fill ${
          buildFillActive ? "active" : ""
        }`}
      />
    </div>
    </div>
  );
}