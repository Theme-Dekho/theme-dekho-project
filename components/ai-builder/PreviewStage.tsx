import type { RefObject } from "react";

interface PreviewStageProps {
  previewStageRef: RefObject<HTMLDivElement | null>;
  previewUrl: string;
  previewHeadline: string;
  previewDesc: string;
}

export default function PreviewStage({
  previewStageRef,
  previewUrl,
  previewHeadline,
  previewDesc,
}: PreviewStageProps) {
  return (
    <div className="preview-stage active" ref={previewStageRef}>
      <div className="preview-frame-wrap">
        <div className="demo-shell" style={{ margin: 0, borderRadius: 0, boxShadow: "none" }}>
          <div className="demo-topbar">
            <span></span>
            <span></span>
            <span></span>
            <div className="url">{previewUrl}</div>
          </div>
          <div className="demo-body">
            <div className="demo-badge">⚡ Generated just now</div>
            <h2>{previewHeadline}</h2>
            <p>{previewDesc}</p>
            <div className="demo-blocks">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
