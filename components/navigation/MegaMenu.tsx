import Link from "next/link";
import { megaMenuBar, megaMenuColumns } from "@/constants/menu";

/**
 * "Our Work" mega dropdown — colored category bar + 4 link columns + footer strip.
 * Pure CSS hover-driven (`.nav-item:hover .mega-drop`), no JS state needed on desktop.
 */
export default function MegaMenu() {
  return (
    <div className="mega-drop">
      {/* Colored top bar */}
      <div className="mega-drop-bar">
        {megaMenuBar.map((item) => (
          <div className="mega-drop-bar-item" key={item.title}>
            <div className="bar-icon-box">{item.icon}</div>
            <div className="bar-text">
              <div className="bar-text-title">{item.title}</div>
              <div className="bar-text-count">{item.count}</div>
            </div>
            <span className="bar-arrow">›</span>
          </div>
        ))}
      </div>

      {/* Links body */}
      <div className="mega-drop-body">
        {megaMenuColumns.map((col, i) => (
          <div className="mega-col" key={i}>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#">
                    <span className="li-dot" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="mega-drop-footer">
        <span>750+ Premium Templates Available</span>
        <Link href="#">View All Templates &rarr;</Link>
      </div>
    </div>
  );
}

