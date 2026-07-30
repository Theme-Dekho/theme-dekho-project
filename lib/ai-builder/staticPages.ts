export interface StaticPageContent {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export const staticPages: StaticPageContent[] = [
  // Products
  {
    slug: "ai-website-builder",
    eyebrow: "Product",
    title: "AI Website Builder",
    description:
      "Describe your business in plain language and our AI drafts a complete, ready-to-launch website — pages, copy, layout, and colour palette included.",
    bullets: [
      "Live in under 60 seconds from a short description",
      "AI-written content tailored to your industry",
      "Fully editable — swap text, images, and sections anytime",
    ],
  },
  // "templates" has its own dedicated gallery page at app/templates/page.tsx
  {
    slug: "e-commerce-sites",
    eyebrow: "Product",
    title: "E-commerce Sites",
    description:
      "Turn your website into an online store with product listings, cart, and checkout — set up in minutes, no separate platform needed.",
    bullets: [
      "Product catalog with search & filters",
      "Secure checkout and order tracking",
      "Works alongside your existing pages",
    ],
  },
  {
    slug: "custom-domains",
    eyebrow: "Product",
    title: "Custom Domains",
    description:
      "Connect your own domain name to your Theme Dekho website, or register a new one directly — free SSL included.",
    bullets: [
      "Connect an existing domain in a few clicks",
      "Free SSL certificate on every site",
      "Easy DNS setup with guided instructions",
    ],
  },

  // Solutions
  // "for-small-business" has its own dedicated page at app/for-small-business/page.tsx
  {
    slug: "for-agencies",
    eyebrow: "Solutions",
    title: "For Agencies",
    description: "Deliver client websites faster with AI-assisted builds, reusable templates, and white-label options.",
    bullets: [
      "Spin up client sites in minutes, not weeks",
      "Reusable templates across projects",
      "Client handoff with full editing access",
    ],
  },
  {
    slug: "for-freelancers",
    eyebrow: "Solutions",
    title: "For Freelancers",
    description: "Showcase your portfolio and win more clients with a site that's live the same day you sign them.",
    bullets: [
      "Portfolio & case-study layouts",
      "Quick turnaround for client pitches",
      "Simple pricing, no long-term lock-in",
    ],
  },
  {
    slug: "for-enterprises",
    eyebrow: "Solutions",
    title: "For Enterprises",
    description: "Scale a consistent web presence across teams and locations, with centralised control and support.",
    bullets: [
      "Multi-site management from one dashboard",
      "Dedicated onboarding & support",
      "Custom integrations on request",
    ],
  },

  // Resources
  {
    slug: "docs",
    eyebrow: "Resources",
    title: "Documentation",
    description: "Guides and references for getting the most out of the AI builder, templates, and site settings.",
    bullets: ["Step-by-step setup guides", "Feature reference by section", "Troubleshooting common issues"],
  },
  {
    slug: "blog",
    eyebrow: "Resources",
    title: "Blog",
    description: "Tips on website design, SEO, and growing your business online — written for non-technical owners.",
    bullets: ["Website & SEO tips", "Customer success stories", "Product updates & new features"],
  },
  {
    slug: "blogs",
    eyebrow: "Resources",
    title: "Blogs",
    description: "Articles and guides from the Theme Dekho team on building and growing your website.",
    bullets: ["Website & SEO tips", "Customer success stories", "Product updates & new features"],
  },
  {
    slug: "help-center",
    eyebrow: "Resources",
    title: "Help Center",
    description: "Find answers fast, or reach our support team for anything the docs don't cover.",
    bullets: ["Searchable knowledge base", "Live chat support", "Email support within 24 hours"],
  },
  {
    slug: "community",
    eyebrow: "Resources",
    title: "Community",
    description: "Connect with other Theme Dekho users to share templates, feedback, and ideas.",
    bullets: ["Share and discover templates", "Get feedback on your site", "Direct line to the product team"],
  },
  {
    slug: "tutorials",
    eyebrow: "Resources",
    title: "Tutorials",
    description: "Short, practical walkthroughs for building specific pages and features on your site.",
    bullets: ["Building your first page", "Setting up online booking", "Connecting a custom domain"],
  },
  {
    slug: "connectors",
    eyebrow: "Resources",
    title: "Connectors",
    description: "Connect your website to the tools you already use — payments, CRM, email, and more.",
    bullets: ["Payment gateway integrations", "CRM & lead-capture connectors", "Email & WhatsApp automation"],
  },
  {
    slug: "sitemap",
    eyebrow: "Resources",
    title: "Sitemap",
    description: "A full overview of every page and section across Theme Dekho.",
    bullets: ["Product & solution pages", "Resources & support pages", "Legal & policy pages"],
  },

  // Company / product misc (footer "Product" items not covered above)
  {
    slug: "pricing",
    eyebrow: "Product",
    title: "Pricing",
    description: "Simple, transparent plans — start free and upgrade only when you're ready to launch.",
    bullets: ["Free to try the AI builder", "Pay only when you publish", "No hidden fees"],
  },
  {
    slug: "solve",
    eyebrow: "Product",
    title: "Solve",
    description: "See the problems Theme Dekho solves for businesses that need a website fast, without the usual cost or complexity.",
    bullets: ["No coding or design skills required", "Launch in minutes, not weeks", "One place for site, content, and hosting"],
  },
  {
    slug: "build",
    eyebrow: "Product",
    title: "Build",
    description: "Everything you need to build a website — from AI-generated first drafts to fine-grained manual edits.",
    bullets: ["AI-generated starting point", "Drag-free, form-based editing", "Preview before you publish"],
  },
  {
    slug: "intelligence",
    eyebrow: "Product",
    title: "Intelligence",
    description: "The AI layer behind Theme Dekho — writing content, picking layouts, and matching colour palettes to your business.",
    bullets: ["Industry-aware content generation", "Automatic layout & colour matching", "Continuously improves with feedback"],
  },
  {
    slug: "see-it-in-action",
    eyebrow: "Product",
    title: "See It In Action",
    description: "Watch how a business goes from a one-line description to a live website in under a minute.",
    bullets: ["Live walkthrough of the AI builder", "Real examples across industries", "No signup required to watch"],
  },

  // Legal
  {
    slug: "terms-conditions",
    eyebrow: "Legal",
    title: "Terms & Conditions",
    description: "The terms that govern your use of Theme Dekho's website builder and services.",
    bullets: ["Account & usage terms", "Payment & refund policy", "Acceptable use guidelines"],
  },
  {
    slug: "privacy-policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    description: "How Theme Dekho collects, uses, and protects your information.",
    bullets: ["What data we collect", "How it's used and stored", "Your rights and choices"],
  },
  {
    slug: "gdpr-dpa",
    eyebrow: "Legal",
    title: "GDPR / DPA",
    description: "Our data processing terms and commitments for customers in the EU and beyond.",
    bullets: ["Data processing agreement details", "Sub-processor list", "Data subject request process"],
  },
  {
    slug: "ccpa-notice",
    eyebrow: "Legal",
    title: "CCPA Notice",
    description: "Privacy rights and disclosures for California residents under the CCPA.",
    bullets: ["Categories of data collected", "Your right to opt out", "How to submit a request"],
  },
];

export function findStaticPage(slug: string): StaticPageContent | null {
  return staticPages.find((p) => p.slug === slug) ?? null;
}
