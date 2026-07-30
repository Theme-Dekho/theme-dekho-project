import type { RefObject } from "react";
import type { FabPanel } from "@/lib/ai-builder/types";
import DownloadPanel from "./panels/DownloadPanel";
import EditPanel from "./panels/EditPanel";
import ExpertPanel from "./panels/ExpertPanel";

interface FabModalProps {
  modalOpen: boolean;
  activePanel: FabPanel;
  onClose: () => void;

  downloadWarningVisible: boolean;
  downloadStatus: string;
  onDownloadCode: () => void;
  onConfirmDownload: () => void;

  changeRequestText: string;
  changeFileName: string;
  changeStatus: string;
  changeStatusError: boolean;
  submitChangeLabel: string;
  changeFileInputRef: RefObject<HTMLInputElement | null>;
  onChangeRequestTextChange: (value: string) => void;
  onChangeFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitChange: () => void;

  expertName: string;
  expertPhone: string;
  expertStatus: string;
  expertStatusError: boolean;
  connectExpertLabel: string;
  onExpertNameChange: (value: string) => void;
  onExpertPhoneChange: (value: string) => void;
  onConnectExpert: () => void;
}

export default function FabModal({
  modalOpen,
  activePanel,
  onClose,
  downloadWarningVisible,
  downloadStatus,
  onDownloadCode,
  onConfirmDownload,
  changeRequestText,
  changeFileName,
  changeStatus,
  changeStatusError,
  submitChangeLabel,
  changeFileInputRef,
  onChangeRequestTextChange,
  onChangeFileChange,
  onSubmitChange,
  expertName,
  expertPhone,
  expertStatus,
  expertStatusError,
  connectExpertLabel,
  onExpertNameChange,
  onExpertPhoneChange,
  onConnectExpert,
}: FabModalProps) {
  return (
    <div
      className={"fab-modal-overlay" + (modalOpen ? " active" : "")}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fab-modal">
        <button className="fab-modal-close" type="button" onClick={onClose}>
          ✕
        </button>

        <DownloadPanel
          active={activePanel === "download"}
          downloadWarningVisible={downloadWarningVisible}
          downloadStatus={downloadStatus}
          onDownloadCode={onDownloadCode}
          onConfirmDownload={onConfirmDownload}
        />

        <EditPanel
          active={activePanel === "edit"}
          changeRequestText={changeRequestText}
          changeFileName={changeFileName}
          changeStatus={changeStatus}
          changeStatusError={changeStatusError}
          submitChangeLabel={submitChangeLabel}
          changeFileInputRef={changeFileInputRef}
          onChangeRequestTextChange={onChangeRequestTextChange}
          onChangeFileChange={onChangeFileChange}
          onSubmitChange={onSubmitChange}
        />

        <ExpertPanel
          active={activePanel === "expert"}
          expertName={expertName}
          expertPhone={expertPhone}
          expertStatus={expertStatus}
          expertStatusError={expertStatusError}
          connectExpertLabel={connectExpertLabel}
          onExpertNameChange={onExpertNameChange}
          onExpertPhoneChange={onExpertPhoneChange}
          onConnectExpert={onConnectExpert}
        />
      </div>
    </div>
  );
}
