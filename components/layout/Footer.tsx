import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/constants/section";
import logo from "@/public/images/logo.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-logo">
              <Image
                src={logo}
                alt="Theme Dekho"
                style={{ height: 25, width: "auto"}}
              />
            </div>
            <p>
              India&apos;s No.1 ready-made website development company. Affordable premium WordPress templates for
              businesses across India.
            </p>
            <div className="f-contact-item">
              <a href="tel:+918447731920">&#128222; 844-773-1920</a>
            </div>
            <div className="f-contact-item">
              <a href="mailto:info@themedekho.com">&#9993; info@themedekho.com</a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div className="f-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 Theme Dekho (India&apos;s No.1 Website Development Company). All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Terms &amp; Conditions</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
