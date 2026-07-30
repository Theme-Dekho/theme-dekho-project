interface DownloadPanelProps {
  active: boolean;
  downloadWarningVisible: boolean;
  downloadStatus: string;
  onDownloadCode: () => void;
  onConfirmDownload: () => void;
}

export default function DownloadPanel({
  active,
  downloadWarningVisible,
  downloadStatus,
  onDownloadCode,
  onConfirmDownload,
}: DownloadPanelProps) {
  return (
    <div className={"pv-card pv-download" + (active ? " active" : "")}>
      <div className="pv-icon">📥</div>
      <h3>Download Source Code</h3>
      <p>Get the full website file to host on your own domain.</p>
      <button className="btn-pv" type="button" onClick={onDownloadCode}>
        Download Code
      </button>
      {downloadWarningVisible && (
        <div className="pv-warning" style={{ display: "flex" }}>
          <p>⚠️ Once downloaded, free AI edits won&apos;t automatically apply to your self-hosted copy.</p>
          <button className="btn-pv-confirm" type="button" onClick={onConfirmDownload}>
            Yes, Download Anyway
          </button>
        </div>
      )}
      <p className="pv-status">{downloadStatus}</p>
    </div>
  );
}
