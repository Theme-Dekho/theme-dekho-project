"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/lib/site-context";

export default function PreviewModal() {
  const { previewModalOpen, previewUrl, previewTitle, closePreviewModal } = useSite();
  const [loading, setLoading] = useState(true);
  const [previewUnavailable, setPreviewUnavailable] = useState(false);

  // useEffect(() => {
  //   if (previewModalOpen) setLoading(true);
  // }, [previewModalOpen, previewUrl]);
  // useEffect(() => {
  //   if (!previewModalOpen) return;

  //   setLoading(true);
  //   setPreviewUnavailable(false);

  //   const timeout = window.setTimeout(() => {
  //     setLoading(false);
  //     setPreviewUnavailable(true);
  //   }, 10000);

  //   return () => {
  //     window.clearTimeout(timeout);
  //   };
  // }, [previewModalOpen, previewUrl]);
  useEffect(() => {
    if (previewModalOpen) {
      setLoading(true);
      setPreviewUnavailable(false);
    }
  }, [previewModalOpen, previewUrl]);

  const handleIframeLoad = () => {
    setLoading(false);
    // setPreviewUnavailable(false);
  };

  if (!previewModalOpen) return null;

  return (
    <div
      className="preview-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePreviewModal();
      }}
    >
      <div className="preview-modal">
        <div className="preview-modal-header">
          <div className="preview-url-bar">
            <span className="preview-dot" style={{ background: "#ff5f57" }} />
            <span className="preview-dot" style={{ background: "#febc2e" }} />
            <span className="preview-dot" style={{ background: "#28c840" }} />
            <span className="preview-url-text">{previewUrl}</span>
            {/* <a className="preview-open-btn" href={previewUrl} target="_blank" rel="noreferrer">
              ↗ Open in New Tab
            </a> */}
          </div>
          <div className="preview-title">{previewTitle}</div>
          <button className="preview-close" onClick={closePreviewModal}>
            &times;
          </button>
        </div>
        {/* <div className="preview-frame-wrap">
          {loading && (
            <div className="preview-loading">
              <div className="preview-spinner" />
              <span>Loading preview...</span>
            </div>
          )}
          <iframe src={previewUrl} allowFullScreen onLoad={() => setLoading(false)} />
        </div> */}
        <div className="preview-frame-wrap">
          {loading && (
            <div className="preview-loading">
              <div className="preview-spinner" />
              <span>Loading preview...</span>
            </div>
          )}

        {previewUnavailable ? (
          <div className="preview-loading">
            <span>Preview unavailable in embedded mode</span>

            <p>
              This website doesn't allow its pages to be displayed
              inside Theme Dekho.
            </p>

            <a
              className="preview-open-btn"
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ Open in New Tab
            </a>
          </div>
        ) : (
            <iframe
              src={previewUrl}
              title={previewTitle || "Website Preview"}
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
}
