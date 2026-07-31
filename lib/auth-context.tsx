"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// type AuthUser = {
//   id: number;
//   phone: string;
//   name: string | null;
// };
type AuthUser = {
  id: number;
  phone: string;
  name: string | null;
  email: string | null;
};

// type AuthContextValue = {
//   user: AuthUser | null;
//   isLoggedIn: boolean;
//   sessionChecked: boolean;
//   setAuthenticatedUser: (user: AuthUser) => void;
//   logout: () => Promise<void>;
// };
type AuthContextValue = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  sessionChecked: boolean;

  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  setAuthenticatedUser: (user: AuthUser) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [sessionChecked, setSessionChecked] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const restoreSession = async () => {
      if (!API_BASE_URL) {
        setSessionChecked(true);
        return;
      }

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/auth/me`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          },
        );

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = (await response.json()) as {
          authenticated?: boolean;
          user?: AuthUser;
        };

        if (
          data.authenticated === true &&
          data.user
        ) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          "Session restoration failed:",
          error,
        );

        setUser(null);
      } finally {
        setSessionChecked(true);
      }
    };

    void restoreSession();
  }, []);

  const openLoginModal = useCallback(() => {
  setLoginModalOpen(true);
}, []);

const closeLoginModal = useCallback(() => {
  setLoginModalOpen(false);
}, []);

  const setAuthenticatedUser = (
    authenticatedUser: AuthUser,
  ) => {
    setUser(authenticatedUser);
    setSessionChecked(true);
  };

  const logout = async () => {
    try {
      if (API_BASE_URL) {
        await fetch(
          `${API_BASE_URL}/api/auth/logout`,
          {
            method: "POST",
            credentials: "include",
          },
        );
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      setSessionChecked(true);
    }
  };

  return (
    // <AuthContext.Provider
    //   value={{
    //     user,
    //     isLoggedIn: user !== null,
    //     sessionChecked,
    //     setAuthenticatedUser,
    //     logout,
    //   }}
    // >
    //   {children}
    // </AuthContext.Provider>
    <AuthContext.Provider
  value={{
    user,
    isLoggedIn: user !== null,
    sessionChecked,

    loginModalOpen,
    openLoginModal,
    closeLoginModal,

    setAuthenticatedUser,
    logout,
  }}
>
  {children}
</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider.",
    );
  }

  return context;
}