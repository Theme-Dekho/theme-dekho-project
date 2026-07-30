// "use client";

// import { useRef, useState } from "react";
// import { CategoryHeroContent } from "@/types/category";

// interface CategoryHeroProps {
//   content: CategoryHeroContent;
// }

// export default function CategoryHero({ content }: CategoryHeroProps) {
//   const [submitted, setSubmitted] = useState(false);
//   const nameRef = useRef<HTMLInputElement>(null);
//   const phoneRef = useRef<HTMLInputElement>(null);

//   function handleSubmit() {
//     const name = nameRef.current?.value.trim();
//     const phone = phoneRef.current?.value.trim();
//     if (!name) {
//       alert("Please enter your business name.");
//       return;
//     }
//     if (!phone) {
//       alert("Please enter your WhatsApp number.");
//       return;
//     }
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       if (nameRef.current) nameRef.current.value = "";
//       if (phoneRef.current) phoneRef.current.value = "";
//     }, 3000);
//   }

//   return (
//     <div className="cat-hero">
//       <div className="cat-hero-inner">
//         <div className="cat-hero-left">
//           <div className="cat-hero-tag">{content.tag}</div>
//           <h1>
//             {content.titleLine1}
//             <br />
//             <span>{content.titleHighlight}</span>
//           </h1>
//           <p className="cat-hero-sub">{content.subtitle}</p>
//           <div className="cat-hero-stats">
//             {content.stats.map((stat) => (
//               <div className="hs" key={stat.label}>
//                 <div className={`hs-num${stat.tone === "orange" ? " o" : stat.tone === "green" ? " g" : ""}`}>
//                   {stat.value}
//                 </div>
//                 <div className="hs-lbl">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="cat-hero-right">
//           <div
//             style={{
//               background: "#fff",
//               border: "1px solid var(--border)",
//               borderRadius: 16,
//               padding: 24,
//               minWidth: 300,
//               maxWidth: 320,
//               boxShadow: "0 12px 40px rgba(15,23,42,0.10)",
//             }}
//           >
//             <div
//               style={{
//                 fontSize: 11,
//                 fontWeight: 700,
//                 color: "var(--blue-600)",
//                 textTransform: "uppercase",
//                 letterSpacing: "0.08em",
//                 marginBottom: 5,
//               }}
//             >
//               🛠️ Custom Web Development
//             </div>
//             <div
//               style={{
//                 fontSize: 18,
//                 fontWeight: 800,
//                 color: "var(--dark)",
//                 marginBottom: 5,
//                 lineHeight: 1.3,
//                 fontFamily: "var(--font-display)",
//               }}
//             >
//               Build Your Dream Website
//             </div>
//             <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 18, lineHeight: 1.6 }}>
//               Tell us your requirement — our expert team will contact you within 30 minutes.
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//               <input ref={nameRef} placeholder="Your Business Name *" className="hero-form-input" />
//               <input ref={phoneRef} placeholder="WhatsApp Number *" type="tel" className="hero-form-input" />
//               <select className="hero-form-input" defaultValue="">
//                 <option value="">Type of Website</option>
//                 <option>Interior &amp; Architecture</option>
//                 <option>Healthcare &amp; Clinic</option>
//                 <option>E-Commerce Store</option>
//                 <option>Real Estate</option>
//                 <option>Education &amp; Coaching</option>
//                 <option>Restaurant &amp; Food</option>
//                 <option>Other Business</option>
//               </select>
//             </div>
//             <button
//               onClick={handleSubmit}
//               disabled={submitted}
//               style={{
//                 marginTop: 14,
//                 width: "100%",
//                 background: submitted ? "#12855A" : "var(--blue-600)",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 10,
//                 padding: 12,
//                 fontSize: 14,
//                 fontWeight: 700,
//                 cursor: submitted ? "default" : "pointer",
//                 fontFamily: "var(--font-display)",
//                 letterSpacing: "-0.01em",
//                 boxShadow: "0 6px 18px rgba(27,77,228,0.32)",
//                 transition: "all 0.2s",
//               }}
//             >
//               {submitted ? "✅ Request Submitted!" : "🚀 Get Free Quote Now"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import type { CategoryHeroContent } from "@/types/category";
import { useSite } from "@/lib/site-context";

interface CategoryHeroProps {
  content: CategoryHeroContent;
}

export default function CategoryHero({ content }: CategoryHeroProps) {
  const { customQuoteModal } = useSite();

  return (
    <section className="cat-hero">
      <div className="cat-hero-inner">
        <div className="cat-hero-left">
          <div className="cat-hero-tag">{content.tag}</div>

          <h1>
            {content.titleLine1}
            <br />
            <span>{content.titleHighlight}</span>
          </h1>

          <p className="cat-hero-sub">{content.subtitle}</p>

          <div className="cat-hero-stats">
            {content.stats.map((stat) => {
              const toneClass =
                stat.tone === "orange"
                  ? " o"
                  : stat.tone === "green"
                    ? " g"
                    : "";

              return (
                <article className="hs" key={stat.label}>
                  <div className={`hs-num${toneClass}`}>
                    {stat.value}
                  </div>

                  <div className="hs-lbl">{stat.label}</div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="cat-hero-right">
          <div className="category-quote-card">
            <div className="category-quote-eyebrow">
              <span aria-hidden="true">🛠️</span>
              Custom Web Development
            </div>

            <h2>Build Your Dream Website</h2>

            <p>
              Tell us your requirement — our expert team will contact you within
              30 minutes.
            </p>

            <button
              type="button"
              className="category-quote-button"
              onClick={customQuoteModal.open}
            >
              🚀 Get Free Quote Now
            </button>

            <span className="category-quote-note">
              🔒 100% Free · No Spam · Reply in 30 Min
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
