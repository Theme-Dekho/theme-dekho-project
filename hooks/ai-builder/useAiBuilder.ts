import { useEffect, useRef, useState } from "react";
import { industryData, templateData, TOTAL_STEPS } from "@/lib/ai-builder/data";
import { isValidPhone } from "@/lib/ai-builder/utils";
import type { Chip, FabPanel, IndustryKey } from "@/lib/ai-builder/types";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type WizFieldError = "industry" | "subIndustry" | "pages" | "bizName" | "bizPhone" | null;

type UseAiBuilderOptions = {
  isLoggedIn: boolean;
  sessionChecked: boolean;
  openAuthModal: () => void;
};


export function useAiBuilder({
  isLoggedIn,
  sessionChecked,
  openAuthModal,
}: UseAiBuilderOptions) {
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
  const [generatedWebsite, setGeneratedWebsite] = useState<any | null>(null);
  const [buildFillActive, setBuildFillActive] = useState(false);

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


  useEffect(() => {
  if (!sessionChecked || !isLoggedIn) {
    return;
  }

  if (!API_BASE_URL) {
    console.error(
      "NEXT_PUBLIC_API_BASE_URL is not configured.",
    );
    return;
  }

  let cancelled = false;

  const restoreGeneratedWebsite = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/ai-websites/me`,
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (cancelled) return;

      if (response.status === 404) {
        // User has never generated a website.
        setWizardVisible(true);
        return;
      }

      if (response.status === 410) {
        // User already used generation, but website expired.
        setWizardVisible(true);
        setWizNavError(
          "Your previously generated website has expired.",
        );
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        console.error(
          "Unable to restore generated website:",
          data,
        );
        return;
      }

      if (data.generation_status === "failed") {
        // Previous AI attempt failed, so backend allows retry.
        setWizardVisible(true);
        return;
      }

      if (data.generation_status !== "completed") {
        return;
      }

      setGeneratedWebsite(data);

      setWizardVisible(false);
      setBuildActive(false);
      setBuildFillActive(false);

      setPreviewUrl(
        data.generated_url ?? "Website generated",
      );

      setPreviewHeadline(
        `${data.business_name} website is ready`,
      );

      setPreviewDesc(
        "Your previously generated AI website has been restored.",
      );

      setPreviewActive(true);
      setFabReady(true);

      setBizName(data.business_name ?? "");
      setBizPhone(data.business_phone ?? "");
      setBizEmail(data.business_email ?? "");
      setBizAddress(data.business_address ?? "");
      setBizExtra(data.business_description ?? "");

      setSubIndustry(data.sub_industry ?? "");

      setPages(
        Array.isArray(data.selected_pages)
          ? data.selected_pages.map((label: string) => ({
              label,
              checked: true,
            }))
          : [],
      );

      setFeatures(
        Array.isArray(data.selected_features)
          ? data.selected_features.map((label: string) => ({
              label,
              checked: true,
            }))
          : [],
      );

      setExpertName(data.business_name ?? "");
      setExpertPhone(data.business_phone ?? "");
    } catch (error) {
      if (!cancelled) {
        console.error(
          "Generated website restore error:",
          error,
        );
      }
    }
  };

  void restoreGeneratedWebsite();

  return () => {
    cancelled = true;
  };
}, [sessionChecked, isLoggedIn]);


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
      if (!sessionChecked) {
        setWizNavError(
          "Checking your login session. Please try again.",
        );
        return;
      }

      if (!isLoggedIn) {
        openAuthModal();
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

  async function startBuild() {
    if (!API_BASE_URL) {
      setWizNavError(
        "AI website service is not configured.",
      );
      return;
    }

    const selectedPages = pages
      .filter((page) => page.checked)
      .map((page) => page.label);

    const selectedFeatures = features
      .filter((feature) => feature.checked)
      .map((feature) => feature.label);

    const industry =
      industryKey
        ? industryData[industryKey]
        : industryData.other;

    setWizNavError("");
    setWizardVisible(false);
    setPreviewActive(false);


    setBuildFillActive(false);
    setBuildActive(true);
    

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setBuildFillActive(true);
      });
    });

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/ai-websites`,
        {
          method: "POST",

          credentials: "include",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            source_page: "ai_builder",

            industry: industry.label,

            sub_industry: subIndustry,

            selected_pages:
              selectedPages,

            selected_features:
              selectedFeatures,

            business_name:
              bizName.trim(),

            business_phone:
              bizPhone.trim(),

            business_email:
              bizEmail.trim() || null,

            business_address:
              bizAddress.trim() || null,

            business_description:
              bizExtra.trim() || null,
          }),
        },
      );

      const data =
        await response.json();

      if (!response.ok) {
        setBuildActive(false);
        setBuildFillActive(false);
        setWizardVisible(true);

        setWizNavError(
          data.detail ??
            "AI website generation failed.",
        );

        return;
      }

      setGeneratedWebsite(data);

      setBuildActive(false);
      setBuildFillActive(false);

      setPreviewUrl(
        data.generated_url ??
          "Website generated",
      );

      setPreviewHeadline(
        `${data.business_name} website is ready`,
      );

      setPreviewDesc(
        "Your AI-generated website has been created successfully.",
      );

      setPreviewActive(true);

      setFabReady(true);

      setExpertName(
        bizName.trim(),
      );

      setExpertPhone(
        bizPhone.trim(),
      );

      renderTemplates(
        industryKey || "other",
      );

      addTimeout(() => {
        previewStageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    } catch (error) {
      console.error(
        "AI website generation error:",
        error,
      );

      setBuildActive(false);
      setBuildFillActive(false);
      setWizardVisible(true);

      setWizNavError(
        "Unable to generate website. Please try again.",
      );
    }
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
    setBuildFillActive(false);
    setPreviewActive(false);
    setGeneratedWebsite(null);
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
    generatedWebsite,
    buildActive,
    buildFillActive,
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
  };
}
