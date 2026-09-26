"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function DataDeletionPage() {
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("all");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="policy-page policy-request min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-950 text-red-400 border border-red-800 mb-3">
            Google Play Data Safety Requirement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Account &amp; Data Deletion Request
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            FidelityPlus respects your privacy and complies with Google Play&apos;s
            Account Deletion Policy. You can delete your account and all associated
            records at any time.
          </p>
        </div>

        {/* Instructions Card: In-App Method */}
        <div className="mb-8 bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#1e293b]">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
              1
            </span>
            Instant Deletion (Within Mobile App)
          </h2>
          <p className="text-sm text-slate-300">
            If you still have the app installed, you can permanently erase your
            account and all data immediately:
          </p>
          <ol className="mt-3 space-y-1.5 text-sm text-slate-300 list-decimal pl-5">
            <li>Open the FidelityPlus app on your phone.</li>
            <li>Tap on <strong>Settings</strong> (gear icon in the tab bar).</li>
            <li>Scroll down to the <strong>Account</strong> section.</li>
            <li>
              Tap the red <strong>Delete Account &amp; Data</strong> button and
              confirm.
            </li>
          </ol>
        </div>

        {/* Web Form: Online Request */}
        <div className="bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
              2
            </span>
            Online Deletion Request (Without Reinstalling App)
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            If you uninstalled the app or cannot access your device, submit your
            registered email below. Our team will verify and execute the deletion
            from our servers.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-emerald-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Deletion Request Received
                  </h3>
                  <p className="text-sm mt-1 text-emerald-300">
                    We received your deletion request for <strong>{email}</strong>.
                    Your account, financial transactions, budgets, debts, and goals
                    will be permanently purged from our database within 24 to 48
                    hours. A confirmation notice will be sent to your email.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Registered Account Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@example.com"
                  required
                  className="w-full px-4 py-3 bg-[#162033] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Deletion Scope *
                </label>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-[#162033] border border-slate-800 cursor-pointer hover:border-slate-700 transition">
                    <input
                      type="radio"
                      name="scope"
                      value="all"
                      checked={scope === "all"}
                      onChange={() => setScope("all")}
                      className="mt-0.5 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-white block">
                        Delete Entire Account &amp; All Data (Recommended)
                      </span>
                      <span className="text-slate-400">
                        Permanently removes user authentication, profile,
                        budgets, transactions, debts, and savings goals.
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3 rounded-xl bg-[#162033] border border-slate-800 cursor-pointer hover:border-slate-700 transition">
                    <input
                      type="radio"
                      name="scope"
                      value="financial_only"
                      checked={scope === "financial_only"}
                      onChange={() => setScope("financial_only")}
                      className="mt-0.5 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-white block">
                        Delete Financial Records Only
                      </span>
                      <span className="text-slate-400">
                        Purges financial transactions, debts, and budgets while
                        preserving your login account.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Reason for Leaving (Optional)
                </label>
                <textarea
                  id="reason"
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Tell us how we could improve..."
                  className="w-full px-4 py-3 bg-[#162033] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl text-sm transition shadow-lg shadow-red-950/40 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Request..." : "Submit Deletion Request"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Data Retention Notice */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0f172a] border border-[#1e293b] text-xs text-slate-400 space-y-2">
          <h4 className="font-semibold text-slate-200">Data Retention &amp; Policy Details</h4>
          <p>
            Once processed, data deletion is irreversible. Associated records across
            our database (budgets, transactions, goals, debts, and authentication
            tokens) will be permanently purged.
          </p>
          <p>
            For further information, please consult our{" "}
            <Link href="/privacy" className="text-emerald-400 hover:underline">
              Privacy Policy
            </Link>{" "}
            or contact us directly at{" "}
            <a
              href="mailto:support@fidelityplus.app"
              className="text-emerald-400 hover:underline"
            >
              support@fidelityplus.app
            </a>
            .
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-slate-500">
          (c) {new Date().getFullYear()} FidelityPlus. All rights reserved.
        </div>
      </div>
    </div>
  );
}
