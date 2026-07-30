import type { RefObject } from "react";

interface StepBusinessInfoProps {
  active: boolean;
  logoDataUrl: string | null;
  bizName: string;
  bizPhone: string;
  bizEmail: string;
  bizAddress: string;
  bizExtra: string;
  bizAttachNames: string[];
  bizNameInvalid: boolean;
  bizPhoneInvalid: boolean;
  logoInputRef: RefObject<HTMLInputElement | null>;
  bizAttachInputRef: RefObject<HTMLInputElement | null>;
  onLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBizNameChange: (value: string) => void;
  onBizPhoneChange: (value: string) => void;
  onBizEmailChange: (value: string) => void;
  onBizAddressChange: (value: string) => void;
  onBizExtraChange: (value: string) => void;
  onBizAttachChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StepBusinessInfo({
  active,
  logoDataUrl,
  bizName,
  bizPhone,
  bizEmail,
  bizAddress,
  bizExtra,
  bizAttachNames,
  bizNameInvalid,
  bizPhoneInvalid,
  logoInputRef,
  bizAttachInputRef,
  onLogoChange,
  onBizNameChange,
  onBizPhoneChange,
  onBizEmailChange,
  onBizAddressChange,
  onBizExtraChange,
  onBizAttachChange,
}: StepBusinessInfoProps) {
  return (
    <div className={"wizard-panel" + (active ? " active" : "")}>
      <div className="wiz-card">
        <span className="wiz-label">Tell us about your business</span>
        <p className="wiz-sub">Our AI uses this to personalise your content, logo, and contact details.</p>

        <div className="wiz-field full" style={{ marginBottom: 16 }}>
          <label>Business Logo</label>
          <div className="logo-upload">
            <div className="logo-preview">{logoDataUrl ? <img src={logoDataUrl} alt="logo" /> : "🖼️"}</div>
            <button type="button" className="btn-upload-logo" onClick={() => logoInputRef.current?.click()}>
              Upload Logo
            </button>
            <input type="file" ref={logoInputRef} accept="image/*" hidden onChange={onLogoChange} />
          </div>
        </div>

        <div className="wiz-grid">
          <div className="wiz-field full">
            <label>Business Name *</label>
            <input
              type="text"
              className={bizNameInvalid ? "invalid" : undefined}
              value={bizName}
              onChange={(e) => onBizNameChange(e.target.value)}
              placeholder="e.g. Sunrise Interiors"
            />
          </div>
          <div className="wiz-field">
            <label>Phone Number *</label>
            <input
              type="tel"
              className={bizPhoneInvalid ? "invalid" : undefined}
              value={bizPhone}
              onChange={(e) => onBizPhoneChange(e.target.value)}
              placeholder="10-digit mobile number"
            />
          </div>
          <div className="wiz-field">
            <label>Email Address</label>
            <input
              type="email"
              value={bizEmail}
              onChange={(e) => onBizEmailChange(e.target.value)}
              placeholder="you@business.com"
            />
          </div>
          <div className="wiz-field full">
            <label>Business Address</label>
            <input
              type="text"
              value={bizAddress}
              onChange={(e) => onBizAddressChange(e.target.value)}
              placeholder="City, State"
            />
          </div>
          <div className="wiz-field full">
            <label>Describe Your Business</label>
            <div className="describe-box">
              <textarea
                value={bizExtra}
                onChange={(e) => onBizExtraChange(e.target.value)}
                placeholder="Describe your business — we'll bring it to life... (services you offer, tone, colours you like, anything else the AI should know)"
              />
              <div className="describe-box-footer">
                <button
                  type="button"
                  className="describe-attach-btn"
                  title="Attach reference files"
                  onClick={() => bizAttachInputRef.current?.click()}
                >
                  +
                </button>
                <span className="describe-attach-name">
                  {bizAttachNames.length
                    ? `${bizAttachNames.length} file${bizAttachNames.length > 1 ? "s" : ""} attached`
                    : ""}
                </span>
                <input type="file" ref={bizAttachInputRef} multiple hidden onChange={onBizAttachChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
