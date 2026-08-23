"use client";

import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { createPortal } from "react-dom";

interface PreviewStageProps {
  previewStageRef: RefObject<HTMLDivElement | null>;
  previewUrl: string;
  previewHeadline: string;
  previewDesc: string;
  generatedWebsite: any | null;
}

export default function PreviewStage({
  previewStageRef,
  previewUrl,
  previewHeadline,
  previewDesc,
  generatedWebsite,
}: PreviewStageProps) {
  const [previewOpen, setPreviewOpen] =
    useState(false);

  useEffect(() => {
    if (!previewOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [previewOpen]);

  const generationId =
    generatedWebsite?.id;

  const generatedPath =
    generatedWebsite?.generated_url ??
    (generationId
      ? `/generated/${generationId}`
      : null);

  return (
    <>
      <div
        className="preview-stage active"
        ref={previewStageRef}
      >
        <div className="preview-frame-wrap">
          <div
            className="demo-shell"
            style={{
              margin: 0,
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            <div className="demo-topbar">
              <span />
              <span />
              <span />

              <div className="url">
                {previewUrl}
              </div>
            </div>

            <div className="demo-body">
              <div className="demo-badge">
                ⚡ Generated just now
              </div>

              <h2>{previewHeadline}</h2>

              <p>{previewDesc}</p>

              <button
                type="button"
                className="btn btn-wiz-next"
                onClick={() => {
                  setPreviewOpen(true);
                }}
                disabled={!generatedPath}
              >
                👁 Preview Website
              </button>
            </div>
          </div>
        </div>
      </div>

      {previewOpen &&
        generatedPath &&
        createPortal(
          <>
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 2147483000,
                background:
                  "rgba(0, 0, 0, 0.58)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter:
                  "blur(10px)",
                padding: "24px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height:
                    "calc(100vh - 48px)",
                  background: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={generatedPath}
                  title="Generated website preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    display: "block",
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setPreviewOpen(false);
              }}
              style={{
                position: "fixed",
                top: "32px",
                right: "32px",
                zIndex: 2147483647,
                width: "46px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border:
                  "2px solid rgba(255,255,255,0.9)",
                background: "#111827",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 700,
                cursor: "pointer",
              }}
              aria-label="Close preview"
            >
              ✕
            </button>
          </>,
          document.body,
        )}
    </>
  );
}