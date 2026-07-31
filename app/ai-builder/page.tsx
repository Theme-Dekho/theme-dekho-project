// "use client";

// import "./globals.css";
// import { useAiBuilder } from "@/hooks/ai-builder/useAiBuilder";

// import TopBar from "@/components/ai-builder/TopBar";
// import SiteHeader from "@/components/ai-builder/SiteHeader";
// import Wizard from "@/components/ai-builder/wizard/Wizard";
// import BuildStage from "@/components/ai-builder/BuildStage";
// import PreviewStage from "@/components/ai-builder/PreviewStage";
// import TrustRow from "@/components/ai-builder/TrustRow";
// import FabWrap from "@/components/ai-builder/FabWrap";
// import FabModal from "@/components/ai-builder/FabModal";
// import LoginModal from "@/components/ai-builder/LoginModal";
// import TemplatesSection from "@/components/ai-builder/TemplatesSection";
// import HowItWorks from "@/components/ai-builder/HowItWorks";
// import DemoPreview from "@/components/ai-builder/DemoPreview";
// import FeaturesGrid from "@/components/ai-builder/FeaturesGrid";
// import FaqSection from "@/components/ai-builder/FaqSection";
// import CtaBanner from "@/components/ai-builder/CtaBanner";
// import SiteHeader from "@/components/ai-builder/SiteHeader";

// export default function AiWebsiteBuilderPage() {
//   const b = useAiBuilder();

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
//         rel="stylesheet"
//       />

//       <TopBar />
//      <SiteHeader/>

//       <section className="ai-hero">
//         <div className="ai-hero-inner">
//           <div className="ai-eyebrow">
//             <span className="ai-pulse-dot"></span> AI Website Builder — Free to Try
//           </div>
//           <h1>
//             Describe your business.
//             <br />
//             <span className="grad">Get a live website in 60 seconds.</span>
//           </h1>
//           <p className="sub">
//             No coding, no designers, no waiting. Tell our AI what you do — it drafts pages, picks a layout, and
//             writes your content instantly.
//           </p>

//           {b.wizardVisible && (
//             <Wizard
//               wizardRef={b.wizardRef}
//               step={b.step}
//               industryKey={b.industryKey}
//               currentIndustry={b.currentIndustry}
//               subIndustry={b.subIndustry}
//               pages={b.pages}
//               features={b.features}
//               addPageInput={b.addPageInput}
//               addFeatureInput={b.addFeatureInput}
//               logoDataUrl={b.logoDataUrl}
//               bizName={b.bizName}
//               bizPhone={b.bizPhone}
//               bizEmail={b.bizEmail}
//               bizAddress={b.bizAddress}
//               bizExtra={b.bizExtra}
//               bizAttachNames={b.bizAttachNames}
//               wizNavError={b.wizNavError}
//               wizFieldError={b.wizFieldError}
//               logoInputRef={b.logoInputRef}
//               bizAttachInputRef={b.bizAttachInputRef}
//               onIndustryChange={b.handleIndustryChange}
//               onSubIndustryChange={b.setSubIndustry}
//               onTogglePage={b.togglePage}
//               onToggleFeature={b.toggleFeature}
//               onAddPageInputChange={b.setAddPageInput}
//               onAddFeatureInputChange={b.setAddFeatureInput}
//               onAddPage={b.addPageChip}
//               onAddFeature={b.addFeatureChip}
//               onLogoChange={b.handleLogoChange}
//               onBizNameChange={b.setBizName}
//               onBizPhoneChange={b.setBizPhone}
//               onBizEmailChange={b.setBizEmail}
//               onBizAddressChange={b.setBizAddress}
//               onBizExtraChange={b.setBizExtra}
//               onBizAttachChange={b.handleBizAttachChange}
//               onWizBack={b.handleWizBack}
//               onWizNext={b.handleWizNext}
//             />
//           )}

//           {b.buildActive && (
//             <BuildStage
//               buildFillActive={b.buildFillActive}
//               buildDuration={b.buildDuration}
//               buildStepsTotal={b.buildStepsTotal}
//               buildStepsDone={b.buildStepsDone}
//               floatItems={b.floatItems}
//             />
//           )}

//           {b.previewActive && (
//             <PreviewStage
//               previewStageRef={b.previewStageRef}
//               previewUrl={b.previewUrl}
//               previewHeadline={b.previewHeadline}
//               previewDesc={b.previewDesc}
//             />
//           )}

//           <TrustRow />
//         </div>
//       </section>

//       <FabWrap
//         fabReady={b.fabReady}
//         fabOpen={b.fabOpen}
//         onToggleOpen={() => b.setFabOpen((o) => !o)}
//         onOpenPanel={b.openPanel}
//       />

//       <FabModal
//         modalOpen={b.modalOpen}
//         activePanel={b.activePanel}
//         onClose={() => b.setModalOpen(false)}
//         downloadWarningVisible={b.downloadWarningVisible}
//         downloadStatus={b.downloadStatus}
//         onDownloadCode={b.handleDownloadCode}
//         onConfirmDownload={b.handleConfirmDownload}
//         changeRequestText={b.changeRequestText}
//         changeFileName={b.changeFileName}
//         changeStatus={b.changeStatus}
//         changeStatusError={b.changeStatusError}
//         submitChangeLabel={b.submitChangeLabel}
//         changeFileInputRef={b.changeFileInputRef}
//         onChangeRequestTextChange={b.setChangeRequestText}
//         onChangeFileChange={b.handleChangeFileChange}
//         onSubmitChange={b.handleSubmitChange}
//         expertName={b.expertName}
//         expertPhone={b.expertPhone}
//         expertStatus={b.expertStatus}
//         expertStatusError={b.expertStatusError}
//         connectExpertLabel={b.connectExpertLabel}
//         onExpertNameChange={b.setExpertName}
//         onExpertPhoneChange={b.setExpertPhone}
//         onConnectExpert={b.handleConnectExpert}
//       />

//       <LoginModal
//         open={b.loginModalOpen}
//         forBuild={b.loginForBuild}
//         loginName={b.loginName}
//         loginPhone={b.loginPhone}
//         loginOtp={b.loginOtp}
//         loginOtpRowVisible={b.loginOtpRowVisible}
//         loginSendOtpLabel={b.loginSendOtpLabel}
//         loginSendOtpDisabled={b.loginSendOtpDisabled}
//         loginVerifyLabel={b.loginVerifyLabel}
//         loginError={b.loginError}
//         onClose={b.closeLoginModal}
//         onLoginNameChange={b.setLoginName}
//         onLoginPhoneChange={b.setLoginPhone}
//         onLoginOtpChange={b.setLoginOtp}
//         onSendOtp={b.handleLoginSendOtp}
//         onVerifyOtp={b.handleLoginVerifyOtp}
//       />

//       <TemplatesSection active={b.templatesActive} templateInfo={b.templateInfo} industryKey={b.templatesKey} />
//       <HowItWorks />
//       <DemoPreview />
//       <FeaturesGrid />
//       <FaqSection />
//       <CtaBanner onStartBuilding={b.handleResetToWizard} />
//       <SiteFooter />
//     </>
//   );
// }


"use client";

import "./globals.css";

import { useAiBuilder } from "@/hooks/ai-builder/useAiBuilder";

import TopBar from "@/components/ai-builder/TopBar";
import SiteHeader from "@/components/ai-builder/SiteHeader";
import Wizard from "@/components/ai-builder/wizard/Wizard";
import BuildStage from "@/components/ai-builder/BuildStage";
import PreviewStage from "@/components/ai-builder/PreviewStage";
import TrustRow from "@/components/ai-builder/TrustRow";
import FabWrap from "@/components/ai-builder/FabWrap";
import FabModal from "@/components/ai-builder/FabModal";
import Header from "@/components/layout/Header";
import { useAuth } from "@/lib/auth-context";
import TemplatesSection from "@/components/ai-builder/TemplatesSection";
import HowItWorks from "@/components/ai-builder/HowItWorks";
import DemoPreview from "@/components/ai-builder/DemoPreview";
import FeaturesGrid from "@/components/ai-builder/FeaturesGrid";
import FaqSection from "@/components/ai-builder/FaqSection";
import CtaBanner from "@/components/ai-builder/CtaBanner";
// import SiteFooter from "@/components/ai-builder/SiteFooter";
import Footer from "@/components/layout/Footer";

export default function AiWebsiteBuilderPage() {
  const b = useAiBuilder();
  const { openLoginModal } = useAuth();

  return (
    <>
    <Header modalOnly/>

      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <TopBar />

      <SiteHeader
        onLoginClick={openLoginModal}
      />

      <section className="ai-hero">
        <div className="ai-hero-inner">
          <div className="ai-eyebrow">
            <span className="ai-pulse-dot" />
            AI Website Builder — Free to Try
          </div>

          <h1>
            Describe your business.
            <br />
            <span className="grad">
              Get a live website in 60 seconds.
            </span>
          </h1>

          <p className="sub">
            No coding, no designers, no waiting. Tell our AI
            what you do — it drafts pages, picks a layout,
            and writes your content instantly.
          </p>

          {b.wizardVisible && (
            <Wizard
              wizardRef={b.wizardRef}
              step={b.step}
              industryKey={b.industryKey}
              currentIndustry={b.currentIndustry}
              subIndustry={b.subIndustry}
              pages={b.pages}
              features={b.features}
              addPageInput={b.addPageInput}
              addFeatureInput={b.addFeatureInput}
              logoDataUrl={b.logoDataUrl}
              bizName={b.bizName}
              bizPhone={b.bizPhone}
              bizEmail={b.bizEmail}
              bizAddress={b.bizAddress}
              bizExtra={b.bizExtra}
              bizAttachNames={b.bizAttachNames}
              wizNavError={b.wizNavError}
              wizFieldError={b.wizFieldError}
              logoInputRef={b.logoInputRef}
              bizAttachInputRef={b.bizAttachInputRef}
              onIndustryChange={b.handleIndustryChange}
              onSubIndustryChange={b.setSubIndustry}
              onTogglePage={b.togglePage}
              onToggleFeature={b.toggleFeature}
              onAddPageInputChange={b.setAddPageInput}
              onAddFeatureInputChange={b.setAddFeatureInput}
              onAddPage={b.addPageChip}
              onAddFeature={b.addFeatureChip}
              onLogoChange={b.handleLogoChange}
              onBizNameChange={b.setBizName}
              onBizPhoneChange={b.setBizPhone}
              onBizEmailChange={b.setBizEmail}
              onBizAddressChange={b.setBizAddress}
              onBizExtraChange={b.setBizExtra}
              onBizAttachChange={b.handleBizAttachChange}
              onWizBack={b.handleWizBack}
              onWizNext={b.handleWizNext}
            />
          )}

          {b.buildActive && (
            <BuildStage
              buildFillActive={b.buildFillActive}
              buildDuration={b.buildDuration}
              buildStepsTotal={b.buildStepsTotal}
              buildStepsDone={b.buildStepsDone}
              floatItems={b.floatItems}
            />
          )}

          {b.previewActive && (
            <PreviewStage
              previewStageRef={b.previewStageRef}
              previewUrl={b.previewUrl}
              previewHeadline={b.previewHeadline}
              previewDesc={b.previewDesc}
            />
          )}

          <TrustRow />
        </div>
      </section>

      <FabWrap
        fabReady={b.fabReady}
        fabOpen={b.fabOpen}
        onToggleOpen={() =>
          b.setFabOpen((open) => !open)
        }
        onOpenPanel={b.openPanel}
      />

      <FabModal
        modalOpen={b.modalOpen}
        activePanel={b.activePanel}
        onClose={() => b.setModalOpen(false)}
        downloadWarningVisible={
          b.downloadWarningVisible
        }
        downloadStatus={b.downloadStatus}
        onDownloadCode={b.handleDownloadCode}
        onConfirmDownload={b.handleConfirmDownload}
        changeRequestText={b.changeRequestText}
        changeFileName={b.changeFileName}
        changeStatus={b.changeStatus}
        changeStatusError={b.changeStatusError}
        submitChangeLabel={b.submitChangeLabel}
        changeFileInputRef={b.changeFileInputRef}
        onChangeRequestTextChange={
          b.setChangeRequestText
        }
        onChangeFileChange={b.handleChangeFileChange}
        onSubmitChange={b.handleSubmitChange}
        expertName={b.expertName}
        expertPhone={b.expertPhone}
        expertStatus={b.expertStatus}
        expertStatusError={b.expertStatusError}
        connectExpertLabel={b.connectExpertLabel}
        onExpertNameChange={b.setExpertName}
        onExpertPhoneChange={b.setExpertPhone}
        onConnectExpert={b.handleConnectExpert}
      />

      {/* <LoginModal
        open={b.loginModalOpen}
        forBuild={b.loginForBuild}
        loginName={b.loginName}
        loginPhone={b.loginPhone}
        loginOtp={b.loginOtp}
        loginOtpRowVisible={b.loginOtpRowVisible}
        loginSendOtpLabel={b.loginSendOtpLabel}
        loginSendOtpDisabled={b.loginSendOtpDisabled}
        loginVerifyLabel={b.loginVerifyLabel}
        loginError={b.loginError}
        onClose={b.closeLoginModal}
        onLoginNameChange={b.setLoginName}
        onLoginPhoneChange={b.setLoginPhone}
        onLoginOtpChange={b.setLoginOtp}
        onSendOtp={b.handleLoginSendOtp}
        onVerifyOtp={b.handleLoginVerifyOtp}
      /> */}

      <TemplatesSection
        active={b.templatesActive}
        templateInfo={b.templateInfo}
        industryKey={b.templatesKey}
      />

      <HowItWorks />
      <DemoPreview />
      <FeaturesGrid />
      <FaqSection />

      <CtaBanner
        onStartBuilding={b.handleResetToWizard}
      />

      <Footer />
    </>
  );
}
