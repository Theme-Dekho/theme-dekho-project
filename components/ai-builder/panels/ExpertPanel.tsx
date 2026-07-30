interface ExpertPanelProps {
  active: boolean;
  expertName: string;
  expertPhone: string;
  expertStatus: string;
  expertStatusError: boolean;
  connectExpertLabel: string;
  onExpertNameChange: (value: string) => void;
  onExpertPhoneChange: (value: string) => void;
  onConnectExpert: () => void;
}

export default function ExpertPanel({
  active,
  expertName,
  expertPhone,
  expertStatus,
  expertStatusError,
  connectExpertLabel,
  onExpertNameChange,
  onExpertPhoneChange,
  onConnectExpert,
}: ExpertPanelProps) {
  return (
    <div className={"pv-card pv-expert" + (active ? " active" : "")}>
      <div className="pv-icon">🎯</div>
      <h3>Talk to an Expert</h3>
      <p>Need custom design or advanced development? Connect with our expert team.</p>
      <input
        type="text"
        value={expertName}
        onChange={(e) => onExpertNameChange(e.target.value)}
        placeholder="Your name"
      />
      <input
        type="tel"
        value={expertPhone}
        onChange={(e) => onExpertPhoneChange(e.target.value)}
        placeholder="Phone number"
      />
      <button className="btn-pv" type="button" onClick={onConnectExpert}>
        {connectExpertLabel}
      </button>
      <p className="pv-status" style={{ color: expertStatusError ? "#ff8a7a" : undefined }}>
        {expertStatus}
      </p>
    </div>
  );
}
