import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | FidelityPlus",
  description:
    "Privacy Policy for FidelityPlus personal and business financial management app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page policy-document min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#1e293b]">
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:text-emerald-400 transition"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-lg">
              F
            </div>
            <span className="font-bold text-xl tracking-tight">FidelityPlus</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg bg-[#0f172a] border border-[#1e293b] hover:border-slate-700 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 mb-3">
            Google Play Policy Compliant
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Last Updated: September 2026 • Effective Date: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to <strong>FidelityPlus</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              We are dedicated to safeguarding your privacy and ensuring your personal
              and financial data is handled with maximum transparency and security.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how our mobile application and associated web
              services collect, use, store, and protect your information when you use
              FidelityPlus on Android, iOS, or the web.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-3">
              2. Information We Collect
            </h2>
            <p>
              We only collect data strictly necessary to provide you with budgeting,
              expense tracking, debt management, and financial insights.
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-4 rounded-xl bg-[#162033] border border-[#1e293b]">
                <h3 className="font-semibold text-white">A. Account Credentials</h3>
                <p className="text-sm text-slate-300 mt-1">
                  When you register, we collect your email address and encrypted password
                  via our authentication provider (Supabase Auth). If you sign in via
                  OAuth (Google or Apple), we receive your authenticated email identifier.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162033] border border-[#1e293b]">
                <h3 className="font-semibold text-white">
                  B. User-Entered Financial Information
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  You voluntarily enter financial records including transaction names,
                  amounts, dates, budget categories, debts/loans to track, and savings goals.
                  This data is stored solely for your private tracking purposes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162033] border border-[#1e293b]">
                <h3 className="font-semibold text-white">
                  C. Device &amp; Telemetry Data
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  We collect basic technical information such as device OS version and
                  app version to ensure app stability and debug issues. We do not track
                  precise physical location or access contacts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and synchronize your budget and debt records across your devices.</li>
              <li>To securely authenticate your account and preserve your session.</li>
              <li>
                To provide optional AI-powered spending analysis and tips when you enable
                AI Analytics in Settings (processed securely via Google Gemini API).
              </li>
              <li>To respond to your support inquiries and account deletion requests.</li>
            </ul>
            <p className="mt-4 font-semibold text-emerald-400">
              We NEVER sell, rent, or monetize your personal or financial data to advertisers or third-party brokers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-3">
              4. Third-Party Service Providers
            </h2>
            <p>We work with trusted cloud infrastructure providers to operate the app:</p>
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-[#162033] rounded-lg">
                <span className="font-semibold text-white">Supabase:</span> Provides secure database hosting and authentication with Row-Level Security (RLS) ensuring only you can access your records.
              </div>
              <div className="p-3 bg-[#162033] rounded-lg">
                <span className="font-semibold text-white">Google Generative AI (Gemini):</span> Powers optional AI insights without using your financial prompts to train public models.
              </div>
            </div>
          </section>

          {/* Section 5 - Deletion */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-emerald-900/60 shadow-lg shadow-emerald-950/20">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-400">★</span> 5. Account and Data Deletion Policy
            </h2>
            <p>
              In compliance with Google Play Developer Policies and global privacy
              regulations (GDPR, CCPA), you have the absolute right to delete your
              account and all associated data at any time.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#162033] rounded-xl border border-slate-800">
                <h4 className="font-bold text-white">Option 1: In-App Deletion</h4>
                <p className="text-sm text-slate-300 mt-2">
                  1. Open the FidelityPlus mobile app.<br />
                  2. Navigate to <strong>Settings</strong>.<br />
                  3. Scroll to the <strong>Account</strong> section.<br />
                  4. Tap <strong>Delete Account &amp; Data</strong> and confirm.
                </p>
                <p className="text-xs text-emerald-400 mt-2">
                  Immediate permanent wipe of all your data.
                </p>
              </div>

              <div className="p-4 bg-[#162033] rounded-xl border border-slate-800">
                <h4 className="font-bold text-white">Option 2: Online Deletion Request</h4>
                <p className="text-sm text-slate-300 mt-2">
                  If you have uninstalled the app or lost your device, you can submit an
                  online request without reinstalling the app:
                </p>
                <div className="mt-3">
                  <Link
                    href="/data-deletion"
                    className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg text-xs transition"
                  >
                    Go to Data Deletion Form →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-3">6. Security &amp; Encryption</h2>
            <p>
              All communication between your device, Supabase servers, and API services is
              encrypted in transit using modern Transport Layer Security (TLS/HTTPS).
              Passwords are cryptographically hashed and never stored in plain text.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
            <h2 className="text-xl font-bold text-white mb-3">7. Contact Us</h2>
            <p>
              If you have any questions, feedback, or privacy-related requests regarding this
              policy or your data, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-[#162033] rounded-xl font-mono text-sm text-emerald-300">
              Email: support@fidelityplus.app
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#1e293b] text-center text-xs text-slate-500">
          (c) {new Date().getFullYear()} FidelityPlus. All rights reserved.
        </div>
      </div>
    </div>
  );
}
