"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";

type AuthControlsProps = {
  onLoginClick: () => void;
  mobile?: boolean;
};

export default function AuthControls({
  onLoginClick,
  mobile = false,
}: AuthControlsProps) {
  const {
    user,
    isLoggedIn,
    sessionChecked,
    logout,
  } = useAuth();

  const {
  savedItems,
  savedDrawer,
} = useSite();

  const [profileMenuOpen, setProfileMenuOpen] =
    useState(false);

  const verifiedPhone = user?.phone ?? "";

  if (!sessionChecked) {
    return (
      <div
        className={mobile ? "mnav-link" : "btn-login"}
        aria-hidden="true"
        style={{
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        Login / Register
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <button
        type="button"
        className={mobile ? "mnav-link" : "btn-login"}
        onClick={onLoginClick}
      >
        Login / Register
      </button>
    );
  }

  if (mobile) {
    return (
      <>
        <Link
          href="/account/profile"
          className="mnav-link"
        >
          My Account
        </Link>

        <button
          type="button"
          className="mnav-link"
          onClick={() => {
            void logout();
          }}
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <div className="profile-wrap">
      <button
        type="button"
        className="profile-btn"
        aria-expanded={profileMenuOpen}
        onClick={() => {
          setProfileMenuOpen((current) => !current);
        }}
      >
        <span className="profile-avatar">👤</span>

        <span className="profile-label">
          My Account
        </span>

        <span className="profile-arrow">
          {profileMenuOpen ? "▴" : "▾"}
        </span>
      </button>

      <div
        className={cn(
          "profile-dropdown",
          profileMenuOpen && "open",
        )}
        aria-hidden={!profileMenuOpen}
      >
        <div className="profile-dd-header">
          <div className="profile-dd-avatar">👤</div>

          <div>
            <div className="profile-dd-name">
              Welcome!
            </div>

            <div className="profile-dd-sub">
              +91 {verifiedPhone}
            </div>
          </div>
        </div>

        <div className="profile-dd-divider" />

        <Link
          href="/account/profile"
          className="profile-dd-item"
          onClick={() => setProfileMenuOpen(false)}
        >
          <span>👤</span>
          My Profile
        </Link>

        <Link
          href="/account/enquiries"
          className="profile-dd-item"
          onClick={() => setProfileMenuOpen(false)}
        >
          <span>📋</span>
          My Enquiries
        </Link>

        <Link
          href="/account/saved"
          className="profile-dd-item"
          onClick={() => setProfileMenuOpen(false)}
        >
          <span>🔖</span>
          My Saved List
        </Link>

        {/* <Link
          href="/account/wishlist"
          className="profile-dd-item"
          onClick={() => setProfileMenuOpen(false)}
        >
          <span>❤️</span>
          My Wishlist
        </Link> */}
        <button
          type="button"
          className="profile-dd-item"
          onClick={() => {
            setProfileMenuOpen(false);
            savedDrawer.open();
          }}
        >
          <span>❤️</span>

          <span>My Wishlist</span>

          {savedItems.length > 0 && (
            <span className="dd-badge">
              {savedItems.length}
            </span>
          )}
        </button>

        <div className="profile-dd-divider" />

        <button
          type="button"
          className="profile-dd-item profile-dd-logout"
          onClick={() => {
            setProfileMenuOpen(false);
            void logout();
          }}
        >
          <span>🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
}