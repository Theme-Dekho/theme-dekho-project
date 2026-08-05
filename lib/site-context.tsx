"use client";

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
import { useAuth } from "@/lib/auth-context";


export interface SavedItem {
  id: number;
  productId: string;
  slug: string;
  name: string;
  label: string | null;
  image: string | null;
  createdAt: string;
}

export interface WishlistProductInput {
  productId: string;
  slug: string;
  name: string;
  label?: string | null;
  image?: string | null;
}

interface WishlistApiItem {
  id: number;
  product_id: string;
  product_slug: string;
  product_name: string;
  product_label: string | null;
  product_image: string | null;
  created_at: string;
}

interface WishlistApiResponse {
  items: WishlistApiItem[];
  count: number;
}

export interface EnquiryItem {
  id: number;
  productId: string;
  slug: string;
  productName: string;
  customerName: string;
  email: string;
  phone: string;
  city: string | null;
  selectedAddons: string[];
  message: string | null;
  status: string;
  createdAt: string;
}

interface EnquiryApiItem {
  id: number;
  product_id: string;
  product_slug: string;
  product_name: string;
  customer_name: string;
  email: string;
  phone: string;
  city: string | null;
  selected_addons: string[] | null;
  message: string | null;
  status: string;
  created_at: string;
}

interface EnquiryApiResponse {
  items: EnquiryApiItem[];
  count: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface ReviewsModalProduct {
  name: string;
  rating: number;
  reviewCount: number;
}


interface SiteContextValue {
  savedItems: SavedItem[];
  isSaved: (productId: string) => boolean;
  toggleSave: (product: WishlistProductInput) => Promise<void>;
  removeSaved: (productId: string) => Promise<void>;
  
  // Toast
  toastMessage: string | null;
  showToast: (message: string) => void;
  
  // Quote enquiry modal (product-specific "Get Details" / saved-list "Get Quote")
  quoteModalOpen: boolean;
  quoteProductName: string;
  openQuoteModal: (productName: string) => void;
  closeQuoteModal: () => void;

  //Enquiry
  enquiryItems: EnquiryItem[];
  refreshEnquiries: () => Promise<void>;
  enquiryDrawer: ReturnType<typeof useModal>;
  removeEnquiry: (enquiryId: number) => Promise<void>;

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

// const SAVED_ITEMS_STORAGE_KEY = "theme-dekho-wishlist";
  const mapWishlistItem = (item: WishlistApiItem): SavedItem => {
    return {
      id: item.id,
      productId: item.product_id,
      slug: item.product_slug,
      name: item.product_name,
      label: item.product_label,
      image: item.product_image,
      createdAt: item.created_at,
    };
  };

// Enquiry
  const mapEnquiryItem = (
    item: EnquiryApiItem,
  ): EnquiryItem => {
    return {
      id: item.id,
      productId: item.product_id,
      slug: item.product_slug,
      productName: item.product_name,
      customerName: item.customer_name,
      email: item.email,
      phone: item.phone,
      city: item.city,
      selectedAddons: item.selected_addons ?? [],
      message: item.message,
      status: item.status,
      createdAt: item.created_at,
    };
  };  

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  // const [wishlistLoaded, setWishlistLoaded] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const {isLoggedIn, sessionChecked,} = useAuth();
  const enquiryDrawer = useModal();
  

useEffect(() => {
  const loadWishlist = async () => {
    if (!sessionChecked) {
      return;
    }

    if (!isLoggedIn) {
      setSavedItems([]);
      return;
    }

    if (!API_BASE_URL) {
      console.error(
        "NEXT_PUBLIC_API_BASE_URL is missing.",
      );
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/wishlist`,
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error(
          `Wishlist request failed: ${response.status}`,
        );
      }

      const data =
        (await response.json()) as WishlistApiResponse;

      setSavedItems(
        data.items.map(mapWishlistItem),
      );
    } catch (error) {
      console.error(
        "Failed to load wishlist:",
        error,
      );

      setSavedItems([]);
    }
  };

  void loadWishlist();
}, [isLoggedIn, sessionChecked]);


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
    (productId: string) =>
      savedItems.some(
        (item) =>
          item.productId === productId,
      ),
    [savedItems],
  );


  const toggleSave = useCallback(
    async (
      product: WishlistProductInput,
    ) => {
      if (!API_BASE_URL) {
        console.error(
          "NEXT_PUBLIC_API_BASE_URL is missing.",
        );
        return;
      }

      const alreadySaved = savedItems.some(
        (item) =>
          item.productId === product.productId,
      );

      try {
        if (alreadySaved) {
          const response = await fetch(
            `${API_BASE_URL}/api/wishlist/${encodeURIComponent(
              product.productId,
            )}`,
            {
              method: "DELETE",
              credentials: "include",
            },
          );

          if (!response.ok) {
            throw new Error(
              `Wishlist removal failed: ${response.status}`,
            );
          }

          setSavedItems((previousItems) =>
            previousItems.filter(
              (item) =>
                item.productId !== product.productId,
            ),
          );

          showToast(
            `❌ "${product.name}" removed from wishlist`,
          );

          return;
        }

        const response = await fetch(
          `${API_BASE_URL}/api/wishlist`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product_id: product.productId,
              product_slug: product.slug,
              product_name: product.name,
              product_label:
                product.label ?? null,
              product_image:
                product.image ?? null,
            }),
          },
        );

        if (!response.ok) {
          throw new Error(
            `Wishlist save failed: ${response.status}`,
          );
        }

        const data =
          (await response.json()) as WishlistApiItem;

        setSavedItems((previousItems) => {
          const exists = previousItems.some(
            (item) =>
              item.productId === data.product_id,
          );

          if (exists) {
            return previousItems;
          }

          return [
            mapWishlistItem(data),
            ...previousItems,
          ];
        });

        showToast(
          `🔖 "${product.name}" added to wishlist`,
        );
      } catch (error) {
        console.error(
          "Wishlist update failed:",
          error,
        );

        showToast(
          "Unable to update wishlist. Please try again.",
        );
      }
    },
    [
      savedItems,
      showToast,
    ],
  );

  const refreshEnquiries = useCallback(async () => {
    if (!sessionChecked || !isLoggedIn) {
      setEnquiryItems([]);
      return;
    }

    if (!API_BASE_URL) {
      console.error(
        "NEXT_PUBLIC_API_BASE_URL is missing.",
      );
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/enquiries`,
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error(
          `Enquiries request failed: ${response.status}`,
        );
      }

      const data =
        (await response.json()) as EnquiryApiResponse;

      setEnquiryItems(
        data.items.map(mapEnquiryItem),
      );
    } catch (error) {
      console.error(
        "Failed to load enquiries:",
        error,
      );

      setEnquiryItems([]);
    }
  }, [isLoggedIn, sessionChecked]);

  useEffect(() => {
  void refreshEnquiries();
}, [refreshEnquiries]);

  const removeEnquiry = useCallback(
    async (enquiryId: number) => {
      if (!API_BASE_URL) {
        console.error(
          "NEXT_PUBLIC_API_BASE_URL is missing.",
        );
        return;
      }

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/enquiries/${enquiryId}`,
          {
            method: "DELETE",
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error(
            `Enquiry deletion failed: ${response.status}`,
          );
        }

        setEnquiryItems((previousItems) =>
          previousItems.filter(
            (item) => item.id !== enquiryId,
          ),
        );

        showToast("Enquiry removed successfully.");
      } catch (error) {
        console.error(
          "Failed to delete enquiry:",
          error,
        );

        showToast(
          "Unable to remove enquiry. Please try again.",
        );
      }
    },
    [showToast],
  );


  const removeSaved = useCallback(
    async (productId: string) => {
      if (!API_BASE_URL) {
        console.error(
          "NEXT_PUBLIC_API_BASE_URL is missing.",
        );
        return;
      }

      const savedItem = savedItems.find(
        (item) =>
          item.productId === productId,
      );

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/wishlist/${encodeURIComponent(
            productId,
          )}`,
          {
            method: "DELETE",
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error(
            `Wishlist removal failed: ${response.status}`,
          );
        }

        setSavedItems((previousItems) =>
          previousItems.filter(
            (item) =>
              item.productId !== productId,
          ),
        );

        showToast(
          savedItem
            ? `❌ "${savedItem.name}" removed from wishlist`
            : "Product removed from wishlist",
        );
      } catch (error) {
        console.error(
          "Failed to remove wishlist item:",
          error,
        );

        showToast(
          "Unable to remove wishlist item. Please try again.",
        );
      }
    },
    [
      savedItems,
      showToast,
    ],
  );

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

    enquiryItems,
    refreshEnquiries,
    removeEnquiry,
    enquiryDrawer,

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
