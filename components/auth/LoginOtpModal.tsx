// "use client";

// import {
//   ChangeEvent,
//   FormEvent,
//   KeyboardEvent,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// type LoginOtpModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onVerified?: (data: VerificationResponse) => void;
// };

// type AuthMode = "login" | "register";

// type ModalStep =
//   | "form"
//   | "otp"
//   | "success";

// type GenerateOtpResponse = {
//   success?: boolean;
//   message?: string;
//   expires_in?: number;
//   retry_after?: number;
// };

// export type VerificationResponse = {
//   success?: boolean;
//   message?: string;
//   access_token?: string;
//   token?: string;
//   user?: {
//     id?: string;
//     name?: string;
//     phone?: string;
//   };
// };

// const OTP_LENGTH = 6;
// const DEFAULT_RESEND_SECONDS = 30;

// function getErrorMessage(error: unknown): string {
//   if (error instanceof Error) {
//     return error.message;
//   }

//   return "Something went wrong. Please try again.";
// }

// async function parseApiResponse<T>(response: Response): Promise<T> {
//   const contentType = response.headers.get("content-type") ?? "";

//   if (!contentType.includes("application/json")) {
//     const text = await response.text();

//     throw new Error(
//       text || `Server returned an invalid response (${response.status}).`,
//     );
//   }

//   const data = (await response.json()) as T & {
//     detail?: string;
//     error?: string;
//     message?: string;
//   };

//   if (!response.ok) {
//     throw new Error(
//       data.detail ||
//         data.error ||
//         data.message ||
//         `Request failed with status ${response.status}.`,
//     );
//   }

//   return data;
// }

// export default function LoginOtpModal({
//   isOpen,
//   onClose,
//   onVerified,
// }: LoginOtpModalProps) {
//   // const [step, setStep] = useState<ModalStep>("phone");
//   // const [phone, setPhone] = useState("");
//   const [authMode, setAuthMode] = useState<AuthMode>("login");
//   const [step, setStep] = useState<ModalStep>("form");
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isLoggingIn, setIsLoggingIn] = useState(false);
//   const [otp, setOtp] = useState<string[]>(
//     Array.from({ length: OTP_LENGTH }, () => ""),
//   );

//   const [isSendingOtp, setIsSendingOtp] = useState(false);
//   const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [resendSeconds, setResendSeconds] = useState(0);

//   const phoneInputRef = useRef<HTMLInputElement>(null);
//   const otpInputRefs = useRef<Array<HTMLInputElement | null>>([]);

//   const sanitizedPhone = phone.replace(/\D/g, "");
//   // const formattedPhone = `+91${sanitizedPhone}`;
//   const completeOtp = otp.join("");

//   const resetModal = () => {
//     // setStep("phone");
//     setAuthMode("login");
//     setStep("form");

//     setName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     setIsLoggingIn(false);

//     setPhone("");
//     setOtp(Array.from({ length: OTP_LENGTH }, () => ""));
//     setError("");
//     setMessage("");
//     setResendSeconds(0);
//     setIsSendingOtp(false);
//     setIsVerifyingOtp(false);
//   };

//   const handleClose = () => {
//     if ( isSendingOtp || isVerifyingOtp || isLoggingIn) {
//       return;
//     }

//     resetModal();
//     onClose();
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       return;
//     }

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const focusTimer = window.setTimeout(() => {
//       if (step === "form") {
//         phoneInputRef.current?.focus();
//       } else if (step === "otp") {
//         otpInputRefs.current[0]?.focus();
//       }
//     }, 50);

//     return () => {
//       window.clearTimeout(focusTimer);
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [isOpen, step]);

//   useEffect(() => {
//     if (!isOpen) {
//       return;
//     }

//     const handleEscape = (event: globalThis.KeyboardEvent) => {
//       if (event.key === "Escape") {
//         handleClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [isOpen, isSendingOtp, isVerifyingOtp]);

//   useEffect(() => {
//     if (resendSeconds <= 0) {
//       return;
//     }

//     const timer = window.setInterval(() => {
//       setResendSeconds((current) => Math.max(current - 1, 0));
//     }, 1000);

//     return () => {
//       window.clearInterval(timer);
//     };
//   }, [resendSeconds]);

//   const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 10);

//     setPhone(digitsOnly);
//     setError("");
//   };

//   const handleLogin = async (
//     event: FormEvent<HTMLFormElement>,
//   ) => {
//     event.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(sanitizedPhone)) {
//       setError(
//         "Enter a valid 10-digit Indian mobile number.",
//       );
//       return;
//     }

//     if (password.length < 8) {
//       setError(
//         "Password must be at least 8 characters.",
//       );
//       return;
//     }

//     if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
//       setError(
//         "NEXT_PUBLIC_API_BASE_URL is missing.",
//       );
//       return;
//     }

//     try {
//       setIsLoggingIn(true);
//       setError("");
//       setMessage("");

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
//         {
//           method: "POST",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             phone: sanitizedPhone,
//             password,
//           }),
//         },
//       );

//       const data =
//         await parseApiResponse<VerificationResponse>(
//           response,
//         );

//       setStep("success");
//       setMessage(
//         data.message || "Logged in successfully.",
//       );

//       onVerified?.(data);
//     } catch (error: unknown) {
//       setError(getErrorMessage(error));
//     } finally {
//       setIsLoggingIn(false);
//     }
//   };

//   const sendOtp = async () => {
//     if (!/^[6-9]\d{9}$/.test(sanitizedPhone)) {
//       setError("Enter a valid 10-digit Indian mobile number.");
//       return;
//     }

//     try {
//       setIsSendingOtp(true);
//       setError("");
//       setMessage("");

//       // const response = await fetch("/api/auth/generate-otp", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({
//       //     phone: formattedPhone,
//       //   }),
//       // });
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/generate-otp`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify({
//             phone: sanitizedPhone,
//           }),
//         },
//       );

//       const data = await parseApiResponse<GenerateOtpResponse>(response);

//       setStep("otp");
//       setOtp(Array.from({ length: OTP_LENGTH }, () => ""));
//       setMessage(data.message || "OTP sent successfully.");
//       setResendSeconds(data.retry_after || DEFAULT_RESEND_SECONDS);
//     } catch (error: unknown) {
//       setError(getErrorMessage(error));
//     } finally {
//       setIsSendingOtp(false);
//     }
//   };

//   const handlePhoneSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await sendOtp();
//   };

//   const handleOtpChange = (
//     index: number,
//     event: ChangeEvent<HTMLInputElement>,
//   ) => {
//     const value = event.target.value.replace(/\D/g, "");

//     if (!value) {
//       const updatedOtp = [...otp];
//       updatedOtp[index] = "";
//       setOtp(updatedOtp);
//       setError("");
//       return;
//     }

//     /*
//      * This also handles browser autofill or pasting several digits
//      * into one OTP field.
//      */
//     const digits = value.slice(0, OTP_LENGTH - index).split("");
//     const updatedOtp = [...otp];

//     digits.forEach((digit, offset) => {
//       updatedOtp[index + offset] = digit;
//     });

//     setOtp(updatedOtp);
//     setError("");

//     const nextIndex = Math.min(index + digits.length, OTP_LENGTH - 1);
//     otpInputRefs.current[nextIndex]?.focus();
//   };

//   const handleOtpKeyDown = (
//     index: number,
//     event: KeyboardEvent<HTMLInputElement>,
//   ) => {
//     if (event.key === "Backspace") {
//       if (otp[index]) {
//         const updatedOtp = [...otp];
//         updatedOtp[index] = "";
//         setOtp(updatedOtp);
//         return;
//       }

//       if (index > 0) {
//         otpInputRefs.current[index - 1]?.focus();
//       }
//     }

//     if (event.key === "ArrowLeft" && index > 0) {
//       otpInputRefs.current[index - 1]?.focus();
//     }

//     if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
//       otpInputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleOtpPaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
//     event.preventDefault();

//     const pastedOtp = event.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, OTP_LENGTH);

//     if (!pastedOtp) {
//       return;
//     }

//     const updatedOtp = Array.from(
//       { length: OTP_LENGTH },
//       (_, index) => pastedOtp[index] ?? "",
//     );

//     setOtp(updatedOtp);
//     setError("");

//     const focusIndex = Math.min(pastedOtp.length, OTP_LENGTH - 1);
//     otpInputRefs.current[focusIndex]?.focus();
//   };

//   const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!new RegExp(`^\\d{${OTP_LENGTH}}$`).test(completeOtp)) {
//       setError(`Enter the complete ${OTP_LENGTH}-digit OTP.`);
//       return;
//     }

//     if (name.trim().length < 2) {
//       setError("Enter your full name.");
//       return;
//     }

//     if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
//         email.trim(),
//       )
//     ) {
//       setError("Enter a valid email address.");
//       return;
//     }

//     if (password.length < 8) {
//       setError(
//         "Password must be at least 8 characters.",
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
//       setError(
//         "NEXT_PUBLIC_API_BASE_URL is missing.",
//       );
//       return;
//     }

//     try {
//       setIsVerifyingOtp(true);
//       setError("");
//       setMessage("");

//       // const response = await fetch("/api/auth/verify-otp", {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/verify-otp`,
//         {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         // body: JSON.stringify({
//         //   phone: sanitizedPhone,
//         //   otp: completeOtp,
//         // }),
//           body: JSON.stringify({
//           name: name.trim(),
//           email: email.trim().toLowerCase(),
//           phone: sanitizedPhone,
//           otp: completeOtp,
//           password,
//         }),
//       });

//       const data = await parseApiResponse<VerificationResponse>(response);

//       /*
//        * Prefer an HTTP-only cookie from the backend.
//        * Avoid localStorage for authentication tokens when possible.
//        */
//       setStep("success");
//       setMessage(data.message || "Mobile number verified successfully.");
//       onVerified?.(data);
//     } catch (error: unknown) {
//       setError(getErrorMessage(error));

//       setOtp(Array.from({ length: OTP_LENGTH }, () => ""));

//       window.setTimeout(() => {
//         otpInputRefs.current[0]?.focus();
//       }, 0);
//     } finally {
//       setIsVerifyingOtp(false);
//     }
//   };

//   const handleChangeNumber = () => {
//     setStep("form");
//     setOtp(Array.from({ length: OTP_LENGTH }, () => ""));
//     setError("");
//     setMessage("");
//     setResendSeconds(0);
//   };

//   const handleResendOtp = async () => {
//     if (resendSeconds > 0 || isSendingOtp) {
//       return;
//     }

//     await sendOtp();
//   };

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div
//       className="login-modal-overlay"
//       role="presentation"
//       onMouseDown={(event) => {
//         if (event.target === event.currentTarget) {
//           handleClose();
//         }
//       }}
//     >
//       <section
//         className="login-modal"
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="login-modal-title"
//         aria-describedby="login-modal-description"
//       >
//         <button
//           type="button"
//           className="login-modal-close"
//           aria-label="Close login modal"
//           onClick={handleClose}
//           // disabled={isSendingOtp || isVerifyingOtp}
//           disabled={isSendingOtp || isVerifyingOtp || isLoggingIn}
//         >
//           &times;
//         </button>

//         {step === "form" && (
//           <>
//             <div className="login-modal-icon" aria-hidden="true">
//               📱
//             </div>

//             {/* <h2 id="login-modal-title">Login or register</h2>

//             <p id="login-modal-description" className="login-modal-description">
//               Enter your mobile number. We will send an OTP for verification.
//             </p> */}
//             <h2 id="login-modal-title">
//               {authMode === "login"
//                 ? "Login to your account"
//                 : "Create your account"}
//             </h2>

//             <p
//               id="login-modal-description"
//               className="login-modal-description"
//             >
//               {authMode === "login"
//                 ? "Enter your mobile number and password."
//                 : "Register once using OTP, then use your password for future logins."}
//             </p>

//             <div className="login-auth-tabs">
//               <button
//                 type="button"
//                 className={
//                   authMode === "login"
//                     ? "login-auth-tab active"
//                     : "login-auth-tab"
//                 }
//                 onClick={() => {
//                   setAuthMode("login");
//                   setError("");
//                   setMessage("");
//                 }}
//               >
//                 Login
//               </button>

//               <button
//                 type="button"
//                 className={
//                   authMode === "register"
//                     ? "login-auth-tab active"
//                     : "login-auth-tab"
//                 }
//                 onClick={() => {
//                   setAuthMode("register");
//                   setError("");
//                   setMessage("");
//                 }}
//               >
//                 Register
//               </button>
//             </div>

//             {/* <form onSubmit={handlePhoneSubmit}> */}
//             <form
//                 onSubmit={
//                   authMode === "login"
//                     ? handleLogin
//                     : handlePhoneSubmit
//                 }
//               >
//               <label className="login-field-label" htmlFor="login-phone">
//                 Mobile number
//               </label>

//               <div className="login-phone-field">
//                 <span className="login-country-code">+91</span>

//                 <input
//                   ref={phoneInputRef}
//                   id="login-phone"
//                   type="tel"
//                   inputMode="numeric"
//                   autoComplete="tel-national"
//                   placeholder="Enter 10-digit number"
//                   value={phone}
//                   onChange={handlePhoneChange}
//                   maxLength={10}
//                   aria-invalid={Boolean(error)}
//                   aria-describedby={error ? "login-error" : undefined}
//                 />
//               </div>

//               {authMode === "register" && (
//                 <>
//                   <label
//                     className="login-field-label"
//                     htmlFor="register-name"
//                   >
//                     Full name
//                   </label>

//                   <input
//                     id="register-name"
//                     type="text"
//                     value={name}
//                     onChange={(event) => {
//                       setName(event.target.value);
//                       setError("");
//                     }}
//                     placeholder="Enter your full name"
//                     autoComplete="name"
//                   />

//                   <label
//                     className="login-field-label"
//                     htmlFor="register-email"
//                   >
//                     Email address
//                   </label>

//                   <input
//                     id="register-email"
//                     type="email"
//                     value={email}
//                     onChange={(event) => {
//                       setEmail(event.target.value);
//                       setError("");
//                     }}
//                     placeholder="Enter your email"
//                     autoComplete="email"
//                   />
//                 </>
//               )}

//               <label
//                 className="login-field-label"
//                 htmlFor="login-password"
//               >
//                 Password
//               </label>

//               <input
//                 id="login-password"
//                 type="password"
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                   setError("");
//                 }}
//                 placeholder="Enter your password"
//                 autoComplete={
//                   authMode === "login"
//                     ? "current-password"
//                     : "new-password"
//                 }
//               />

//               {authMode === "register" && (
//                 <>
//                   <label
//                     className="login-field-label"
//                     htmlFor="register-confirm-password"
//                   >
//                     Confirm password
//                   </label>

//                   <input
//                     id="register-confirm-password"
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(event) => {
//                       setConfirmPassword(event.target.value);
//                       setError("");
//                     }}
//                     placeholder="Re-enter your password"
//                     autoComplete="new-password"
//                   />
//                 </>
//               )}

//               {error && (
//                 <p id="login-error" className="login-modal-error" role="alert">
//                   {error}
//                 </p>
//               )}

//               {/* <button
//                 type="submit"
//                 className="login-primary-button"
//                 disabled={isSendingOtp || sanitizedPhone.length !== 10}
//               >
//                 {isSendingOtp ? (
//                   <>
//                     <span className="login-button-spinner" />
//                     Sending OTP...
//                   </>
//                 ) : (
//                   "Continue"
//                 )}
//               </button> */}
//               <button
//                 type="submit"
//                 className="login-primary-button"
//                 disabled={
//                   authMode === "login"
//                     ? isLoggingIn ||
//                       sanitizedPhone.length !== 10 ||
//                       password.length < 8
//                     : isSendingOtp ||
//                       sanitizedPhone.length !== 10 ||
//                       name.trim().length < 2 ||
//                       !email.trim() ||
//                       password.length < 8 ||
//                       confirmPassword.length < 8
//                 }
//               >
//                 {authMode === "login"
//                   ? isLoggingIn
//                     ? "Logging in..."
//                     : "Login"
//                   : isSendingOtp
//                     ? "Sending OTP..."
//                     : "Register with OTP"}
//               </button>
//             </form>

//             <p className="login-modal-terms">
//               By continuing, you agree to our Terms &amp; Conditions and Privacy
//               Policy.
//             </p>
//           </>
//         )}

//         {step === "otp" && (
//           <>
//             <div className="login-modal-icon" aria-hidden="true">
//               🔐
//             </div>

//             <h2 id="login-modal-title">Verify OTP</h2>

//             <p id="login-modal-description" className="login-modal-description">
//               Enter the {OTP_LENGTH}-digit OTP sent to{" "}
//               <strong>+91 {sanitizedPhone}</strong>.
//             </p>

//             <button
//               type="button"
//               className="login-change-number"
//               onClick={handleChangeNumber}
//               disabled={isVerifyingOtp}
//             >
//               Change number
//             </button>

//             {message && (
//               <p className="login-modal-message" role="status">
//                 {message}
//               </p>
//             )}

//             <form onSubmit={handleVerifyOtp}>
//               <div
//                 className="login-otp-fields"
//                 onPaste={handleOtpPaste}
//                 aria-label="Enter OTP"
//               >
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     ref={(element) => {
//                       otpInputRefs.current[index] = element;
//                     }}
//                     type="text"
//                     inputMode="numeric"
//                     autoComplete={index === 0 ? "one-time-code" : "off"}
//                     maxLength={OTP_LENGTH}
//                     value={digit}
//                     onChange={(event) => handleOtpChange(index, event)}
//                     onKeyDown={(event) => handleOtpKeyDown(index, event)}
//                     aria-label={`OTP digit ${index + 1}`}
//                     aria-invalid={Boolean(error)}
//                   />
//                 ))}
//               </div>

//               {error && (
//                 <p className="login-modal-error" role="alert">
//                   {error}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 className="login-primary-button"
//                 disabled={
//                   isVerifyingOtp || completeOtp.length !== OTP_LENGTH
//                 }
//               >
//                 {isVerifyingOtp ? (
//                   <>
//                     <span className="login-button-spinner" />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             </form>

//             <div className="login-resend-row">
//               <span>Didn&apos;t receive the OTP?</span>

//               <button
//                 type="button"
//                 onClick={handleResendOtp}
//                 disabled={resendSeconds > 0 || isSendingOtp}
//               >
//                 {isSendingOtp
//                   ? "Sending..."
//                   : resendSeconds > 0
//                     ? `Resend in ${resendSeconds}s`
//                     : "Resend OTP"}
//               </button>
//             </div>
//           </>
//         )}

//         {step === "success" && (
//           <div className="login-success-content">
//             <div className="login-success-icon" aria-hidden="true">
//               ✓
//             </div>

//             {/* <h2 id="login-modal-title">Verification successful</h2>

//             <p id="login-modal-description" className="login-modal-description">
//               Your mobile number has been verified successfully.
//             </p> */}
//             <h2 id="login-modal-title">
//               {authMode === "login"
//                 ? "Login successful"
//                 : "Registration successful"}
//             </h2>

//             <p
//               id="login-modal-description"
//               className="login-modal-description"
//             >
//               {message ||
//                 (authMode === "login"
//                   ? "You have logged in successfully."
//                   : "Your account has been created successfully.")}
//             </p>

//             <button
//               type="button"
//               className="login-primary-button"
//               onClick={handleClose}
//             >
//               Continue
//             </button>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }