"use client";

// import {
//   createContext,
//   useCallback,
//   useContext,
//   useRef,
//   useState,
//   type ReactNode,
// } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useModal } from "@/hooks/useModal";

export interface SavedItem {
  id: number;
  name: string;
  label: string;
}

export interface ReviewsModalProduct {
  name: string;
  rating: number;
  reviewCount: number;
}


interface SiteContextValue {
  // Saved list ("bookmark for later")
  savedItems: SavedItem[];
  isSaved: (name: string) => boolean;
  toggleSave: (name: string, label: string) => void;
  removeSaved: (id: number) => void;
  
  // Toast
  toastMessage: string | null;
  showToast: (message: string) => void;
  
  // Quote enquiry modal (product-specific "Get Details" / saved-list "Get Quote")
  quoteModalOpen: boolean;
  quoteProductName: string;
  openQuoteModal: (productName: string) => void;
  closeQuoteModal: () => void;
  
  // Reviews modal
  reviewsModalOpen: boolean;
  reviewsProduct: ReviewsModalProduct | null;
  openReviewsModal: (product: ReviewsModalProduct) => void;
  closeReviewsModal: () => void;
  
  // Live preview modal
  previewModalOpen: boolean;
  previewUrl: string;
  previewTitle: string;
  openPreviewModal: (url: string, title: string) => void;
  closePreviewModal: () => void;
  
  // Simple (payload-less) modals
  priceInfoModal: ReturnType<typeof useModal>;
  customQuoteModal: ReturnType<typeof useModal>;
  savedDrawer: ReturnType<typeof useModal>;
}

const SAVED_ITEMS_STORAGE_KEY = "theme-dekho-wishlist";
const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [wishlistLoaded, setWishlistLoaded] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  
useEffect(() => {
  const storedItems = localStorage.getItem(
    SAVED_ITEMS_STORAGE_KEY,
  );

  if (storedItems) {
    try {
      const parsedItems = JSON.parse(
        storedItems,
      ) as SavedItem[];

      if (Array.isArray(parsedItems)) {
        setSavedItems(parsedItems);
      }
    } catch (error) {
      console.error(
        "Failed to load wishlist items:",
        error,
      );

      localStorage.removeItem(
        SAVED_ITEMS_STORAGE_KEY,
      );
    }
  }

  setWishlistLoaded(true);
}, []);

useEffect(() => {
  if (!wishlistLoaded) {
    return;
  }

  localStorage.setItem(
    SAVED_ITEMS_STORAGE_KEY,
    JSON.stringify(savedItems),
  );
}, [savedItems, wishlistLoaded]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProductName, setQuoteProductName] = useState("");

  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [reviewsProduct, setReviewsProduct] = useState<ReviewsModalProduct | null>(null);

  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const priceInfoModal = useModal();
  const customQuoteModal = useModal();
  const savedDrawer = useModal();

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(null), 2800);
  }, []);

  const isSaved = useCallback(
    (name: string) => savedItems.some((i) => i.name === name),
    [savedItems]
  );

  const toggleSave = useCallback(
    (name: string, label: string) => {
      setSavedItems((prev) => {
        const already = prev.some((i) => i.name === name);
        if (already) {
          showToast(`❌ "${name}" removed from saved`);
          return prev.filter((i) => i.name !== name);
        }
        showToast(`🔖 "${name}" saved!`);
        return [...prev, { id: Date.now(), name, label }];
      });
    },
    [showToast]
  );

  const removeSaved = useCallback((id: number) => {
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const openQuoteModal = useCallback((productName: string) => {
    setQuoteProductName(productName);
    setQuoteModalOpen(true);
  }, []);
  const closeQuoteModal = useCallback(() => setQuoteModalOpen(false), []);

  const openReviewsModal = useCallback((product: ReviewsModalProduct) => {
    setReviewsProduct(product);
    setReviewsModalOpen(true);
  }, []);
  const closeReviewsModal = useCallback(() => setReviewsModalOpen(false), []);

  const openPreviewModal = useCallback((url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
    setPreviewModalOpen(true);
  }, []);
  const closePreviewModal = useCallback(() => {
    setPreviewModalOpen(false);
    setPreviewUrl("");
  }, []);

  const value: SiteContextValue = {
    savedItems,
    isSaved,
    toggleSave,
    removeSaved,
    toastMessage,
    showToast,
    quoteModalOpen,
    quoteProductName,
    openQuoteModal,
    closeQuoteModal,
    reviewsModalOpen,
    reviewsProduct,
    openReviewsModal,
    closeReviewsModal,
    previewModalOpen,
    previewUrl,
    previewTitle,
    openPreviewModal,
    closePreviewModal,
    priceInfoModal,
    customQuoteModal,
    savedDrawer,
  };

    return (
        <SiteContext.Provider value={value}>
        {children}
        </SiteContext.Provider>
    );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error("useSite() must be used within <SiteProvider>");
  }
  return ctx;
}
