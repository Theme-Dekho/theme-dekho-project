// import Link from "next/link";
// import { slugify } from "@/lib/ai-builder/utils";
// import logo from "@/public/images/logo.jpg";
// import Image from "next/image";

// interface SiteHeaderProps {
//   loggedIn: boolean;
//   loggedInName: string;
//   onLoginClick: () => void;
//   onLogoutClick: () => void;
// }

// const navMenus = [
//   {
//     label: "Products",
//     items: ["AI Website Builder", "Templates", "E-commerce Sites", "Custom Domains"],
//   },
//   {
//     label: "Solutions",
//     items: ["For Small Business", "For Agencies", "For Freelancers", "For Enterprises"],
//   },
//   {
//     label: "Resources",
//     items: ["Docs", "Blog", "Help Center", "Community"],
//   },
// ];

// export default function SiteHeader({ loggedIn, loggedInName, onLoginClick, onLogoutClick }: SiteHeaderProps) {
//   return (
//     <header>
//       <div className="header-inner">
//         <a href="/" className="logo-img-link">
//         <Image src={logo} alt="Theme Dekho" className="logo-img" priority />
//         </a>

//         <nav className="main-nav">
//           {navMenus.map((menu) => (
//             <div className="nav-dropdown" key={menu.label}>
//               <button type="button" className="nav-dropdown-toggle">
//                 {menu.label} <span className="nav-caret">▾</span>
//               </button>
//               <div className="nav-dropdown-menu">
//                 {menu.items.map((item) => (
//                   <Link href={`/${slugify(item)}`} key={item}>
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="header-cta">
//           {loggedIn ? (
//             <button type="button" className="user-pill" onClick={onLogoutClick} title="Click to logout">
//               <span className="avatar">{loggedInName.trim().charAt(0).toUpperCase() || "U"}</span>
//               {loggedInName || "Account"}
//             </button>
//           ) : (
//             <button type="button" className="btn btn-outline" onClick={onLoginClick}>
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

import AuthControls from "@/components/auth/AuthControls";
import { slugify } from "@/lib/ai-builder/utils";

import logo from "@/public/images/logo.jpg";

interface SiteHeaderProps {
  onLoginClick: () => void;
}

const navMenus = [
  {
    label: "Products",
    items: [
      "AI Website Builder",
      "Templates",
      "E-commerce Sites",
      "Custom Domains",
    ],
  },
  {
    label: "Solutions",
    items: [
      "For Small Business",
      "For Agencies",
      "For Freelancers",
      "For Enterprises",
    ],
  },
  {
    label: "Resources",
    items: [
      "Docs",
      "Blog",
      "Help Center",
      "Community",
    ],
  },
];

export default function SiteHeader({
  onLoginClick,
}: SiteHeaderProps) {
  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo-img-link">
          <Image
            src={logo}
            alt="Theme Dekho"
            className="logo-img"
            priority
          />
        </Link>

        <nav className="main-nav">
          {navMenus.map((menu) => (
            <div
              className="nav-dropdown"
              key={menu.label}
            >
              <button
                type="button"
                className="nav-dropdown-toggle"
              >
                {menu.label}
                <span className="nav-caret">▾</span>
              </button>

              <div className="nav-dropdown-menu">
                {menu.items.map((item) => (
                  <Link
                    href={`/${slugify(item)}`}
                    key={item}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="header-cta">
          <AuthControls
            onLoginClick={onLoginClick}
          />
        </div>
      </div>
    </header>
  );
}