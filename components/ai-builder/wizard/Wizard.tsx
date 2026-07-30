import type { RefObject } from "react";
import type { Chip, IndustryInfo, IndustryKey } from "@/lib/ai-builder/types";
import type { WizFieldError } from "@/hooks/ai-builder/useAiBuilder";
import WizardProgress from "./WizardProgress";
import StepIndustry from "./StepIndustry";
import StepSubIndustry from "./StepSubIndustry";
import StepPagesFeatures from "./StepPagesFeatures";
import StepBusinessInfo from "./StepBusinessInfo";
import WizardNav from "./WizardNav";

interface WizardProps {
  wizardRef: RefObject<HTMLDivElement | null>;
  step: number;
  industryKey: IndustryKey | "";
  currentIndustry: IndustryInfo | null;
  subIndustry: string;
  pages: Chip[];
  features: Chip[];
  addPageInput: string;
  addFeatureInput: string;
  logoDataUrl: string | null;
  bizName: string;
  bizPhone: string;
  bizEmail: string;
  bizAddress: string;
  bizExtra: string;
  bizAttachNames: string[];
  wizNavError: string;
  wizFieldError: WizFieldError;
  logoInputRef: RefObject<HTMLInputElement | null>;
  bizAttachInputRef: RefObject<HTMLInputElement | null>;
  onIndustryChange: (value: string) => void;
  onSubIndustryChange: (value: string) => void;
  onTogglePage: (idx: number) => void;
  onToggleFeature: (idx: number) => void;
  onAddPageInputChange: (value: string) => void;
  onAddFeatureInputChange: (value: string) => void;
  onAddPage: () => void;
  onAddFeature: () => void;
  onLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBizNameChange: (value: string) => void;
  onBizPhoneChange: (value: string) => void;
  onBizEmailChange: (value: string) => void;
  onBizAddressChange: (value: string) => void;
  onBizExtraChange: (value: string) => void;
  onBizAttachChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWizBack: () => void;
  onWizNext: () => void;
}

export default function Wizard({
  wizardRef,
  step,
  industryKey,
  currentIndustry,
  subIndustry,
  pages,
  features,
  addPageInput,
  addFeatureInput,
  logoDataUrl,
  bizName,
  bizPhone,
  bizEmail,
  bizAddress,
  bizExtra,
  bizAttachNames,
  wizNavError,
  wizFieldError,
  logoInputRef,
  bizAttachInputRef,
  onIndustryChange,
  onSubIndustryChange,
  onTogglePage,
  onToggleFeature,
  onAddPageInputChange,
  onAddFeatureInputChange,
  onAddPage,
  onAddFeature,
  onLogoChange,
  onBizNameChange,
  onBizPhoneChange,
  onBizEmailChange,
  onBizAddressChange,
  onBizExtraChange,
  onBizAttachChange,
  onWizBack,
  onWizNext,
}: WizardProps) {
  return (
    <div id="aiWizard" ref={wizardRef}>
      <WizardProgress step={step} />

      <StepIndustry
        active={step === 1}
        industryKey={industryKey}
        invalid={wizFieldError === "industry"}
        onChange={onIndustryChange}
      />

      <StepSubIndustry
        active={step === 2}
        currentIndustry={currentIndustry}
        subIndustry={subIndustry}
        invalid={wizFieldError === "subIndustry"}
        onChange={onSubIndustryChange}
      />

      <StepPagesFeatures
        active={step === 3}
        pages={pages}
        features={features}
        addPageInput={addPageInput}
        addFeatureInput={addFeatureInput}
        pagesInvalid={wizFieldError === "pages"}
        onTogglePage={onTogglePage}
        onToggleFeature={onToggleFeature}
        onAddPageInputChange={onAddPageInputChange}
        onAddFeatureInputChange={onAddFeatureInputChange}
        onAddPage={onAddPage}
        onAddFeature={onAddFeature}
      />

      <StepBusinessInfo
        active={step === 4}
        logoDataUrl={logoDataUrl}
        bizName={bizName}
        bizPhone={bizPhone}
        bizEmail={bizEmail}
        bizAddress={bizAddress}
        bizExtra={bizExtra}
        bizAttachNames={bizAttachNames}
        bizNameInvalid={wizFieldError === "bizName"}
        bizPhoneInvalid={wizFieldError === "bizPhone"}
        logoInputRef={logoInputRef}
        bizAttachInputRef={bizAttachInputRef}
        onLogoChange={onLogoChange}
        onBizNameChange={onBizNameChange}
        onBizPhoneChange={onBizPhoneChange}
        onBizEmailChange={onBizEmailChange}
        onBizAddressChange={onBizAddressChange}
        onBizExtraChange={onBizExtraChange}
        onBizAttachChange={onBizAttachChange}
      />

      <WizardNav step={step} wizNavError={wizNavError} onBack={onWizBack} onNext={onWizNext} />
    </div>
  );
}
