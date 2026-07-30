"use client";

import { useState } from "react";
import LoginModal from "./LoginModal";
import { isValidPhone } from "@/lib/ai-builder/utils";

export default function ViewMoreGate() {
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRowVisible, setOtpRowVisible] = useState(false);
  const [sendLabel, setSendLabel] = useState("Send OTP");
  const [sendDisabled, setSendDisabled] = useState(false);
  const [verifyLabel, setVerifyLabel] = useState("Verify");
  const [error, setError] = useState("");

  function openModal() {
    setOpen(true);
    setName("");
    setPhone("");
    setOtp("");
    setOtpRowVisible(false);
    setSendLabel("Send OTP");
    setSendDisabled(false);
    setVerifyLabel("Verify");
    setError("");
  }

  function sendOtp() {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");
    setSendLabel("Sending...");
    setSendDisabled(true);
    setTimeout(() => {
      setSendLabel("OTP Sent ✓");
      setOtpRowVisible(true);
    }, 900);
  }

  function verifyOtp() {
    if (otp.trim().length < 4) {
      setError("Please enter the OTP sent to your phone.");
      return;
    }
    setError("");
    setVerifyLabel("Verifying...");
    setTimeout(() => {
      setVerified(true);
      setOpen(false);
    }, 900);
  }

  if (verified) {
    return (
      <p className="section-sub" style={{ margin: "40px auto 0" }}>
        ✅ Verified — more templates for your industry are on the way.
      </p>
    );
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <button type="button" className="btn btn-generate" onClick={openModal}>
          View More Templates
        </button>
      </div>
      <LoginModal
        open={open}
        forBuild={false}
        title="Login to view more templates"
        subtitle="Verify your phone number to unlock more templates for your industry."
        loginName={name}
        loginPhone={phone}
        loginOtp={otp}
        loginOtpRowVisible={otpRowVisible}
        loginSendOtpLabel={sendLabel}
        loginSendOtpDisabled={sendDisabled}
        loginVerifyLabel={verifyLabel}
        loginError={error}
        onClose={() => setOpen(false)}
        onLoginNameChange={setName}
        onLoginPhoneChange={setPhone}
        onLoginOtpChange={setOtp}
        onSendOtp={sendOtp}
        onVerifyOtp={verifyOtp}
      />
    </>
  );
}
