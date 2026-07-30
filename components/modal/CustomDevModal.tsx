// "use client";

// import { useState } from "react";
// import { useSite } from "@/lib/site-context";
// import { businessTypeOptions } from "@/constants/section";

// const emptyForm = {
//   name: "",
//   business: "",
//   city: "",
//   phone: "",
//   email: "",
//   type: "",
//   date: "",
//   time: "",
//   notes: "",
// };

// const today = () => new Date().toISOString().split("T")[0];

// export default function CustomDevModal() {
//   const { customDevModal } = useSite();
//   const [form, setForm] = useState(emptyForm);
//   const [errors, setErrors] = useState<Record<string, boolean>>({});
//   const [submitted, setSubmitted] = useState(false);

//   if (!customDevModal.isOpen) return null;

//   const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
//     setForm((f) => ({ ...f, [key]: e.target.value }));

//   const validEmail = (v: string) => !v.trim() || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

//   const handleSubmit = () => {
//     const required: (keyof typeof form)[] = ["name", "business", "city", "phone", "email", "type", "date", "time"];
//     const nextErrors: Record<string, boolean> = {};
//     let firstBad: string | null = null;

//     required.forEach((key) => {
//       const empty = !form[key].trim() || (key === "email" && !validEmail(form[key]));
//       nextErrors[key] = empty;
//       if (empty && !firstBad) firstBad = key;
//     });

//     setErrors(nextErrors);
//     if (firstBad) return;

//     setSubmitted(true);
//     setTimeout(() => {
//       customDevModal.close();
//       setSubmitted(false);
//       setForm(emptyForm);
//       setErrors({});
//     }, 1600);
//   };

//   const close = () => {
//     customDevModal.close();
//     setForm(emptyForm);
//     setErrors({});
//   };

//   return (
//     <div
//       className="modal-overlay"
//       style={{ display: "flex" }}
//       onClick={(e) => {
//         if (e.target === e.currentTarget) close();
//       }}
//     >
//       <div className="modal-box">
//         <div className="modal-header">
//           <button className="modal-close" onClick={close}>
//             &times;
//           </button>
//           <h3>Tell Us What You Need</h3>
//           <p>Fill in your details — our team will call you within 24 hours!</p>
//         </div>

//         <div className="modal-body">
//           <div className="modal-grid">
//             <div className="modal-field">
//               <label>Your Name *</label>
//               <input
//                 type="text"
//                 placeholder="e.g. Rahul Sharma"
//                 value={form.name}
//                 onChange={set("name")}
//                 style={errors.name ? { borderColor: "#0169DC" } : undefined}
//               />
//             </div>
//             <div className="modal-field">
//               <label>Business Name *</label>
//               <input
//                 type="text"
//                 placeholder="e.g. Sharma Interiors"
//                 value={form.business}
//                 onChange={set("business")}
//                 style={errors.business ? { borderColor: "#0169DC" } : undefined}
//               />
//             </div>
//             <div className="modal-field">
//               <label>City *</label>
//               <input
//                 type="text"
//                 placeholder="e.g. Delhi, Mumbai"
//                 value={form.city}
//                 onChange={set("city")}
//                 style={errors.city ? { borderColor: "#0169DC" } : undefined}
//               />
//             </div>
//             <div className="modal-field">
//               <label>Phone Number *</label>
//               <input
//                 type="tel"
//                 placeholder="e.g. 9876543210"
//                 value={form.phone}
//                 onChange={set("phone")}
//                 style={errors.phone ? { borderColor: "#0169DC" } : undefined}
//               />
//             </div>
//             <div className="modal-field full">
//               <label>Email Address *</label>
//               <input
//                 type="email"
//                 placeholder="e.g. rahul@sharmainteriors.com"
//                 value={form.email}
//                 onChange={set("email")}
//                 style={errors.email ? { borderColor: "#0169DC" } : undefined}
//               />
//             </div>
//             <div className="modal-field full">
//               <label>What Kind of Website Do You Need? *</label>
//               <select value={form.type} onChange={set("type")} style={errors.type ? { borderColor: "#0169DC" } : undefined}>
//                 <option value="" disabled>
//                   — Select your business type —
//                 </option>
//                 {businessTypeOptions.map((opt) => (
//                   <option key={opt}>{opt}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="modal-field full">
//               <label>Preferred Date &amp; Time for Call *</label>
//               <div style={{ display: "flex", gap: 12 }}>
//                 <input
//                   type="date"
//                   min={today()}
//                   style={{ flex: 1, ...(errors.date ? { borderColor: "#0169DC" } : {}) }}
//                   value={form.date}
//                   onChange={set("date")}
//                 />
//                 <input
//                   type="time"
//                   style={{ flex: 1, ...(errors.time ? { borderColor: "#0169DC" } : {}) }}
//                   value={form.time}
//                   onChange={set("time")}
//                 />
//               </div>
//             </div>
//             <div className="modal-field full">
//               <label>Additional Requirements</label>
//               <textarea
//                 placeholder="Tell us anything specific — features, design preference, budget, etc."
//                 value={form.notes}
//                 onChange={set("notes")}
//               />
//             </div>
//           </div>

//           <button className="modal-submit" disabled={submitted} onClick={handleSubmit}>
//             {submitted ? "Thanks! We\u2019ll call you shortly \u2713" : "Get My Free Quote \u2192"}
//           </button>
//           <p className="modal-note">
//             &#128274; Your information is safe. <span>We never share your data.</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
