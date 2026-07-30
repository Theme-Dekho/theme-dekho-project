import Link from "next/link";

/** Slim dark bar above the header — announcement text + "Website Build with AI" badge. */
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="inner">
        <span>🇮🇳 India&apos;s No.1 Custom Website Development Company</span>
        <Link href="/ai-builder" className="ai-badge-topbar">
          <span className="ai-badge-dot" />
          🤖 Website Build with AI
          {/* <span className="ai-free-tag">FREE</span> */}
            <span className="ai-free-tag">FREE</span>
        </Link>
      </div>
    </div>
  );
}
