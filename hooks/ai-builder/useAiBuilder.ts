import { useEffect, useRef, useState } from "react";
import { industryData, templateData, TOTAL_STEPS } from "@/lib/ai-builder/data";
import { isValidPhone } from "@/lib/ai-builder/utils";
import type { Chip, FabPanel, FloatItem, IndustryKey } from "@/lib/ai-builder/types";

export type WizFieldError = "industry" | "subIndustry" | "pages" | "bizName" | "bizPhone" | null;

let floatItemId = 0;

export function useAiBuilder() {
  const [step, setStep] = useState(1);
  const [industryKey, setIndustryKey] = useState<IndustryKey | "">("");
  const [subIndustry, setSubIndustry] = useState("");
  const [pages, setPages] = useState<Chip[]>([]);
  const [features, setFeatures] = useState<Chip[]>([]);
  const [addPageInput, setAddPageInput] = useState("");
  const [addFeatureInput, setAddFeatureInput] = useState("");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [bizName, setBizName] = useState("");
  const [bizPhone, setBizPhone] = useState("");
  const [bizEmail, setBizEmail] = useState("");
  const [bizAddress, setBizAddress] = useState("");
  const [bizExtra, setBizExtra] = useState("");
  const [bizAttachNames, setBizAttachNames] = useState<string[]>([]);
  const [wizNavError, setWizNavError] = useState("");
  const [wizFieldError, setWizFieldError] = useState<WizFieldError>(null);
  const [wizardVisible, setWizardVisible] = useState(true);

  const [buildActive, setBuildActive] = useState(false);
  const [buildFillActive, setBuildFillActive] = useState(false);
  const [buildDuration, setBuildDuration] = useState(0);
  const [buildStepsTotal, setBuildStepsTotal] = useState(0);
  const [buildStepsDone, setBuildStepsDone] = useState(0);
  const [floatItems, setFloatItems] = useState<FloatItem[]>([]);

  const [previewActive, setPreviewActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("yourbusiness.themedekho.com");
  const [previewHeadline, setPreviewHeadline] = useState("Your website is ready");
  const [previewDesc, setPreviewDesc] = useState(
    "AI created your homepage and pages, complete with copy, layout, and a matching colour palette."
  );

  const [fabReady, setFabReady] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<FabPanel>("download");

  const [downloadWarningVisible, setDownloadWarningVisible] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("");

  const [changeRequestText, setChangeRequestText] = useState("");
  const [changeFileName, setChangeFileName] = useState("");
  const [changeStatus, setChangeStatus] = useState("");
  const [changeStatusError, setChangeStatusError] = useState(false);
  const [submitChangeLabel, setSubmitChangeLabel] = useState("Request Changes");

  const [expertName, setExpertName] = useState("");
  const [expertPhone, setExpertPhone] = useState("");
  const [expertStatus, setExpertStatus] = useState("");
  const [expertStatusError, setExpertStatusError] = useState(false);
  const [connectExpertLabel, setConnectExpertLabel] = useState("Connect to Expert");

  const [templatesActive, setTemplatesActive] = useState(false);
  const [templatesKey, setTemplatesKey] = useState<IndustryKey>("other");

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [loginOtpRowVisible, setLoginOtpRowVisible] = useState(false);
  const [loginSendOtpLabel, setLoginSendOtpLabel] = useState("Send OTP");
  const [loginSendOtpDisabled, setLoginSendOtpDisabled] = useState(false);
  const [loginVerifyLabel, setLoginVerifyLabel] = useState("Verify");
  const [loginError, setLoginError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInName, setLoggedInName] = useState("");
  const [loginForBuild, setLoginForBuild] = useState(false);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const bizAttachInputRef = useRef<HTMLInputElement>(null);
  const changeFileInputRef = useRef<HTMLInputElement>(null);
  const previewStageRef = useRef<HTMLDivElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const list = timeouts.current;
    return () => {
      list.forEach(clearTimeout);
    };
  }, []);

  function addTimeout(fn: () => void, ms: number) {
    const id = setTimeout(fn, ms);
    timeouts.current.push(id);
    return id;
  }

  function canProceed(n: number) {
    setWizNavError("");
    setWizFieldError(null);
    if (n === 1) {
      if (!industryKey) {
        setWizNavError("Please select your industry.");
        setWizFieldError("industry");
        return false;
      }
      return true;
    }
    if (n === 2) {
      if (!subIndustry) {
        setWizNavError("Please select a sub-industry.");
        setWizFieldError("subIndustry");
        return false;
      }
      return true;
    }
    if (n === 3) {
      if (pages.filter((p) => p.checked).length === 0) {
        setWizNavError("Please select at least one page.");
        setWizFieldError("pages");
        return false;
      }
      return true;
    }
    if (n === 4) {
      if (!bizName.trim()) {
        setWizNavError("Please enter your business name.");
        setWizFieldError("bizName");
        return false;
      }
      if (!isValidPhone(bizPhone)) {
        setWizNavError("Please enter a valid 10-digit phone number.");
        setWizFieldError("bizPhone");
        return false;
      }
      return true;
    }
    return true;
  }

  function handleIndustryChange(value: string) {
    setIndustryKey(value as IndustryKey);
    setSubIndustry("");
  }

  function populatePagesFeatures() {
    const data = industryKey ? industryData[industryKey] : industryData.other;
    setPages(data.pages.map((label) => ({ label, checked: true })));
    setFeatures(data.features.map((label) => ({ label, checked: true })));
  }

  function togglePage(idx: number) {
    setPages((prev) => prev.map((c, i) => (i === idx ? { ...c, checked: !c.checked } : c)));
  }
  function toggleFeature(idx: number) {
    setFeatures((prev) => prev.map((c, i) => (i === idx ? { ...c, checked: !c.checked } : c)));
  }
  function addPageChip() {
    const val = addPageInput.trim();
    if (!val) return;
    setPages((prev) => [...prev, { label: val, checked: true }]);
    setAddPageInput("");
  }
  function addFeatureChip() {
    const val = addFeatureInput.trim();
    if (!val) return;
    setFeatures((prev) => [...prev, { label: val, checked: true }]);
    setAddFeatureInput("");
  }

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setLogoDataUrl(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  function handleBizAttachChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).map((f) => f.name);
    setBizAttachNames(files);
  }

  function handleWizNext() {
    if (!canProceed(step)) return;
    if (step === 2) populatePagesFeatures();
    if (step === TOTAL_STEPS) {
      if (!loggedIn) {
        openLoginModal(true);
        return;
      }
      startBuild();
      return;
    }
    setStep((s) => s + 1);
  }
  function handleWizBack() {
    if (step === 1) return;
    setStep((s) => s - 1);
  }

  function startBuild() {
    setWizardVisible(false);
    setBuildActive(true);
    setBuildFillActive(false);
    setFloatItems([]);

    const checkedPages = pages.filter((p) => p.checked);
    const checkedFeatures = features.filter((f) => f.checked);
    const items = [
      ...checkedPages.map((p) => "📄 " + p.label),
      ...checkedFeatures.map((f) => "⚙️ " + f.label),
      "🎨 Choosing colour palette",
      "🖋️ Writing content with AI",
      "📱 Optimising for mobile",
    ];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    const stepGap = 320;
    const totalTime = items.length * stepGap + 1600;
    setBuildDuration(totalTime);
    setBuildStepsTotal(items.length);
    setBuildStepsDone(0);
    requestAnimationFrame(() => setBuildFillActive(true));

    items.forEach((label, idx) => {
      addTimeout(() => {
        const id = ++floatItemId;
        const left = Math.random() * 65 + 5;
        const top = Math.random() * 60 + 5;
        setFloatItems((prev) => [...prev, { id, label, left, top }]);
        setBuildStepsDone((n) => n + 1);
        addTimeout(() => {
          setFloatItems((prev) => prev.filter((it) => it.id !== id));
        }, 2700);
      }, idx * stepGap);
    });

    addTimeout(() => {
      setBuildActive(false);
      showPreview();
    }, totalTime + 300);
  }

  function showPreview() {
    const nameVal = bizName.trim() || "Your Business";
    const slug = nameVal.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const data = industryKey ? industryData[industryKey] : industryData.other;
    const checkedPagesCount = pages.filter((p) => p.checked).length;
    const checkedFeaturesCount = features.filter((f) => f.checked).length;

    setPreviewUrl(slug + ".themedekho.com");
    setPreviewHeadline('"' + nameVal + '" is ready');
    setPreviewDesc(
      "AI created " +
        checkedPagesCount +
        " pages and " +
        checkedFeaturesCount +
        " features for your " +
        data.label.toLowerCase() +
        " website — complete with copy, layout, and a matching colour palette."
    );

    setPreviewActive(true);

    // Mobile number was already verified via OTP during login before the build
    // started, so the preview unlocks immediately with no second gate.
    setFabReady(true);
    setExpertName(bizName.trim());
    setExpertPhone(bizPhone.trim());
    renderTemplates(industryKey || "other");

    addTimeout(() => {
      previewStageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }

  function renderTemplates(key: IndustryKey) {
    setTemplatesKey(key);
    setTemplatesActive(true);
  }

  function openPanel(panel: FabPanel) {
    setActivePanel(panel);
    setModalOpen(true);
    setFabOpen(false);
  }

  function openLoginModal(forBuild: boolean = false) {
    setLoginModalOpen(true);
    setLoginForBuild(forBuild);
    setLoginName("");
    setLoginPhone("");
    setLoginOtp("");
    setLoginOtpRowVisible(false);
    setLoginSendOtpLabel("Send OTP");
    setLoginSendOtpDisabled(false);
    setLoginVerifyLabel("Verify");
    setLoginError("");
  }

  function closeLoginModal() {
    setLoginModalOpen(false);
  }

  function handleLoginSendOtp() {
    if (!loginName.trim()) {
      setLoginError("Please enter your name.");
      return;
    }
    if (!isValidPhone(loginPhone)) {
      setLoginError("Please enter a valid 10-digit phone number.");
      return;
    }
    setLoginError("");
    setLoginSendOtpLabel("Sending...");
    setLoginSendOtpDisabled(true);
    addTimeout(() => {
      setLoginSendOtpLabel("OTP Sent ✓");
      setLoginOtpRowVisible(true);
    }, 900);
  }

  function handleLoginVerifyOtp() {
    if (loginOtp.trim().length < 4) {
      setLoginError("Please enter the OTP sent to your phone.");
      return;
    }
    setLoginError("");
    setLoginVerifyLabel("Verifying...");
    addTimeout(() => {
      setLoggedIn(true);
      setLoggedInName(loginName.trim());
      setLoginModalOpen(false);
      if (loginForBuild) {
        setLoginForBuild(false);
        startBuild();
      }
    }, 900);
  }

  function handleLogout() {
    setLoggedIn(false);
    setLoggedInName("");
  }

  function handleDownloadCode() {
    setDownloadWarningVisible(true);
  }

  function handleConfirmDownload() {
    const nameVal = bizName.trim() || "Your Business";
    const slug =
      nameVal
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "website";
    const data = industryKey ? industryData[industryKey] : industryData.other;
    const pagesHtml = pages
      .filter((p) => p.checked)
      .map((p) => "<li>" + p.label + "</li>")
      .join("");
    const featuresHtml = features
      .filter((f) => f.checked)
      .map((f) => "<li>" + f.label + "</li>")
      .join("");
    const siteHtml =
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">' +
      "<title>" +
      nameVal +
      '</title></head><body style="font-family:sans-serif;max-width:720px;margin:40px auto;padding:0 20px;">' +
      "<h1>" +
      nameVal +
      "</h1><p><strong>Industry:</strong> " +
      data.label +
      "</p>" +
      "<h2>Pages</h2><ul>" +
      pagesHtml +
      "</ul>" +
      "<h2>Features</h2><ul>" +
      featuresHtml +
      "</ul>" +
      "<h2>Contact</h2><p>" +
      (bizAddress || "") +
      "<br>" +
      (bizPhone || "") +
      " · " +
      (bizEmail || "") +
      "</p>" +
      "</body></html>";
    const blob = new Blob([siteHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = slug + "-website.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadWarningVisible(false);
    setDownloadStatus("✅ Download started.");
  }

  function handleChangeFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setChangeFileName(file ? file.name : "");
  }

  function handleSubmitChange() {
    const txt = changeRequestText.trim();
    if (!txt) {
      setChangeStatusError(true);
      setChangeStatus("Please describe what you would like to change.");
      return;
    }
    setSubmitChangeLabel("Submitting...");
    addTimeout(() => {
      setSubmitChangeLabel("Request Changes");
      setChangeStatusError(false);
      setChangeStatus("✅ Request submitted — AI will apply this shortly.");
      setChangeRequestText("");
      setChangeFileName("");
      if (changeFileInputRef.current) changeFileInputRef.current.value = "";
    }, 900);
  }

  function handleConnectExpert() {
    if (!expertName.trim()) {
      setExpertStatusError(true);
      setExpertStatus("Please enter your name.");
      return;
    }
    if (!isValidPhone(expertPhone)) {
      setExpertStatusError(true);
      setExpertStatus("Please enter a valid 10-digit phone number.");
      return;
    }
    setExpertStatusError(false);
    setConnectExpertLabel("Connecting...");
    addTimeout(() => {
      setConnectExpertLabel("Connect to Expert");
      setExpertStatus("✅ Thanks! Our team will contact you within 24 hours.");
    }, 900);
  }

  function handleResetToWizard() {
    setWizardVisible(true);
    setBuildActive(false);
    setPreviewActive(false);
    setFabReady(false);
    setFabOpen(false);
    setModalOpen(false);
    setTemplatesActive(false);
    addTimeout(() => {
      wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }

  const currentIndustry = industryKey ? industryData[industryKey] : null;
  const templateInfo = templateData[templatesKey];

  return {
    step,
    industryKey,
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
    wizardVisible,
    buildActive,
    buildFillActive,
    buildDuration,
    buildStepsTotal,
    buildStepsDone,
    floatItems,
    previewActive,
    previewUrl,
    previewHeadline,
    previewDesc,
    fabReady,
    fabOpen,
    modalOpen,
    activePanel,
    downloadWarningVisible,
    downloadStatus,
    changeRequestText,
    changeFileName,
    changeStatus,
    changeStatusError,
    submitChangeLabel,
    expertName,
    expertPhone,
    expertStatus,
    expertStatusError,
    connectExpertLabel,
    templatesActive,
    templatesKey,
    currentIndustry,
    templateInfo,

    loginModalOpen,
    loginForBuild,
    loginName,
    loginPhone,
    loginOtp,
    loginOtpRowVisible,
    loginSendOtpLabel,
    loginSendOtpDisabled,
    loginVerifyLabel,
    loginError,
    loggedIn,
    loggedInName,

    logoInputRef,
    bizAttachInputRef,
    changeFileInputRef,
    previewStageRef,
    wizardRef,

    setSubIndustry,
    setAddPageInput,
    setAddFeatureInput,
    setBizName,
    setBizPhone,
    setBizEmail,
    setBizAddress,
    setBizExtra,
    setFabOpen,
    setModalOpen,
    setChangeRequestText,
    setExpertName,
    setExpertPhone,
    setLoginName,
    setLoginPhone,
    setLoginOtp,

    handleIndustryChange,
    togglePage,
    toggleFeature,
    addPageChip,
    addFeatureChip,
    handleLogoChange,
    handleBizAttachChange,
    handleWizNext,
    handleWizBack,
    openPanel,
    handleDownloadCode,
    handleConfirmDownload,
    handleChangeFileChange,
    handleSubmitChange,
    handleConnectExpert,
    handleResetToWizard,
    openLoginModal,
    closeLoginModal,
    handleLoginSendOtp,
    handleLoginVerifyOtp,
    handleLogout,
  };
}
