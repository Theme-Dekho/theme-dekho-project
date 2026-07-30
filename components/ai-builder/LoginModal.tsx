interface LoginModalProps {
  open: boolean;
  forBuild: boolean;
  title?: string;
  subtitle?: string;
  loginName: string;
  loginPhone: string;
  loginOtp: string;
  loginOtpRowVisible: boolean;
  loginSendOtpLabel: string;
  loginSendOtpDisabled: boolean;
  loginVerifyLabel: string;
  loginError: string;
  onClose: () => void;
  onLoginNameChange: (value: string) => void;
  onLoginPhoneChange: (value: string) => void;
  onLoginOtpChange: (value: string) => void;
  onSendOtp: () => void;
  onVerifyOtp: () => void;
}

export default function LoginModal({
  open,
  forBuild,
  title,
  subtitle,
  loginName,
  loginPhone,
  loginOtp,
  loginOtpRowVisible,
  loginSendOtpLabel,
  loginSendOtpDisabled,
  loginVerifyLabel,
  loginError,
  onClose,
  onLoginNameChange,
  onLoginPhoneChange,
  onLoginOtpChange,
  onSendOtp,
  onVerifyOtp,
}: LoginModalProps) {
  return (
    <div
      className={"fab-modal-overlay" + (open ? " active" : "")}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fab-modal">
        <button className="fab-modal-close" type="button" onClick={onClose}>
          ✕
        </button>

        <div className="pv-card active">
          <div className="pv-icon">🔒</div>
          <h3>{title ?? (forBuild ? "Login to build your website" : "Login")}</h3>
          <p>
            {subtitle ??
              (forBuild
                ? "Verify your phone number so AI can start building your website."
                : "Enter your name and phone number to receive an OTP.")}
          </p>
          <input
            type="text"
            value={loginName}
            onChange={(e) => onLoginNameChange(e.target.value)}
            placeholder="Your name"
          />
          <div className="gate-phone-row">
            <input
              type="tel"
              value={loginPhone}
              onChange={(e) => onLoginPhoneChange(e.target.value)}
              placeholder="10-digit mobile number"
            />
            <button className="btn-gate-verify" type="button" disabled={loginSendOtpDisabled} onClick={onSendOtp}>
              {loginSendOtpLabel}
            </button>
          </div>
          {loginOtpRowVisible && (
            <div className="gate-otp-row" style={{ display: "flex" }}>
              <input
                type="text"
                value={loginOtp}
                onChange={(e) => onLoginOtpChange(e.target.value)}
                placeholder="Enter OTP"
                maxLength={6}
              />
              <button className="btn-gate-verify" type="button" onClick={onVerifyOtp}>
                {loginVerifyLabel}
              </button>
            </div>
          )}
          {loginError && (
            <p className="pv-status" style={{ color: "#ff8a7a" }}>
              {loginError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
