import type { RefObject } from "react";

interface EditPanelProps {
  active: boolean;
  changeRequestText: string;
  changeFileName: string;
  changeStatus: string;
  changeStatusError: boolean;
  submitChangeLabel: string;
  changeFileInputRef: RefObject<HTMLInputElement | null>;
  onChangeRequestTextChange: (value: string) => void;
  onChangeFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitChange: () => void;
}

export default function EditPanel({
  active,
  changeRequestText,
  changeFileName,
  changeStatus,
  changeStatusError,
  submitChangeLabel,
  changeFileInputRef,
  onChangeRequestTextChange,
  onChangeFileChange,
  onSubmitChange,
}: EditPanelProps) {
  return (
    <div className={"pv-card pv-edit" + (active ? " active" : "")}>
      <div className="pv-icon">✏️</div>
      <h3>Request AI Changes</h3>
      <p>Tell us what to change — our AI will update your site.</p>
      <textarea
        value={changeRequestText}
        onChange={(e) => onChangeRequestTextChange(e.target.value)}
        placeholder="e.g. Change the homepage banner image, shorten the About Us text..."
      />
      <div className="pv-file-row">
        <button className="btn-pv-outline" type="button" onClick={() => changeFileInputRef.current?.click()}>
          📎 Attach File
        </button>
        <span className="pv-file-name">{changeFileName}</span>
        <input type="file" ref={changeFileInputRef} hidden onChange={onChangeFileChange} />
      </div>
      <button className="btn-pv" type="button" onClick={onSubmitChange}>
        {submitChangeLabel}
      </button>
      <p className="pv-status" style={{ color: changeStatusError ? "#ff8a7a" : undefined }}>
        {changeStatus}
      </p>
    </div>
  );
}
