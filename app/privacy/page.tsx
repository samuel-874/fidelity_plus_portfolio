import type { Metadata } from "next";
import Link from "next/link";
import {
  PolicyFooter,
  PolicyHero,
  PolicyShell,
} from "../components/policy/policy-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Owners",
  description:
    "Privacy Policy for the Owners mobile application and Owners Plus financial platform.",
};

const sections = [
  [
    "Introduction",
    "Welcome to Owners (also referred to as Owners Plus). We built the app around a simple idea: owning your finances should feel clear, private, and practical. This Privacy Policy applies to the Owners mobile application (com.appbakery.owner) and our related services. This policy explains what information we collect, why we use it, and the choices you have.",
  ],
  [
    "Information we collect",
    "We collect only the information needed to provide budgeting, expense tracking, debt management, and financial insights.",
    [
      [
        "Account credentials",
        "Your email address and encrypted password. If you use Google or Apple sign-in, we receive your authenticated email identifier.",
      ],
      [
        "Financial information",
        "The transactions, budgets, debts, loans, and savings goals that you choose to enter for your own tracking.",
      ],
      [
        "Device information",
        "Basic device OS and app-version information used to keep the app stable and troubleshoot problems. We do not collect precise location or contacts.",
      ],
    ],
  ],
  [
    "How we use information",
    "We use your information to provide and synchronize your records, authenticate your account, provide optional AI-powered analysis when enabled, respond to support requests, and process deletion requests. We never sell, rent, or monetize personal or financial data to advertisers or brokers.",
  ],
  [
    "Service providers",
    "Owners Plus uses trusted infrastructure providers to operate the service. Supabase provides database hosting and authentication with row-level security. Google Generative AI may process prompts for optional insights without using your financial prompts to train public models.",
  ],
  [
    "Your deletion rights",
    "You can delete your account and associated data at any time. You can delete everything from the mobile app, or use our online deletion form if you no longer have access to the app.",
    "deletion",
  ],
  [
    "Security",
    "Communication between your device, our servers, and supporting services is encrypted in transit using TLS/HTTPS. Passwords are cryptographically hashed and are never stored in plain text.",
  ],
  [
    "Contact us",
    "For questions, feedback, or privacy requests, contact us at samuelab846@gmail.com.",
  ],
] as const;

export default function PrivacyPolicyPage() {
  return (
    <PolicyShell className="policy-document">
      <PolicyHero
        eyebrow="Trust, by design"
        title="Privacy Policy"
        description="A clear explanation of how Owners Plus handles the information that helps you make better financial decisions."
        updated="Last updated September 2026 · Effective September 2026"
      />

      <div className="policy-document-layout">
        <aside className="policy-toc" aria-label="Policy sections">
          <span>On this page</span>
          {sections.map(([title]) => (
            <a
              href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
              key={title}
            >
              {title}
            </a>
          ))}
        </aside>

        <div className="policy-document__sections">
          {sections.map(([title, text, details]) => {
            const id = title.toLowerCase().replaceAll(" ", "-");
            return (
              <section id={id} className="policy-document__section" key={title}>
                <span className="policy-section-number">
                  {String(
                    sections.findIndex(([name]) => name === title) + 1,
                  ).padStart(2, "0")}
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  {Array.isArray(details) ? (
                    <div className="policy-detail-grid">
                      {details.map(([detailTitle, detailText]) => (
                        <article key={detailTitle}>
                          <h3>{detailTitle}</h3>
                          <p>{detailText}</p>
                        </article>
                      ))}
                    </div>
                  ) : null}
                  {details === "deletion" ? (
                    <Link
                      href="/data-deletion"
                      className="policy-inline-action"
                    >
                      Open data deletion form <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <PolicyFooter />
    </PolicyShell>
  );
}
