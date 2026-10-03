"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useState } from "react";
import {
  PolicyFooter,
  PolicyHero,
  PolicyShell,
} from "../components/policy/policy-shell";

export default function DataDeletionPage() {
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("all");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !email.includes("@")) {
      setError(
        "Enter the email address connected to your Owners Plus account.",
      );
      return;
    }

    setError("");
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <PolicyShell className="policy-request">
      <PolicyHero
        eyebrow="Your data, your choice"
        title="Account & data deletion"
        description="Request the permanent removal of your Owners Plus account and the financial records connected to it."
      />

      <div className="deletion-layout">
        <aside className="deletion-aside">
          <div className="deletion-step deletion-step--active">
            <span>01</span>
            <div>
              <strong>Choose what to remove</strong>
              <p>Select your deletion scope below.</p>
            </div>
          </div>
          <div className="deletion-step">
            <span>02</span>
            <div>
              <strong>Send your request</strong>
              <p>We verify the account email before processing.</p>
            </div>
          </div>
          <div className="deletion-aside__note">
            <strong>Already in the app?</strong>
            <p>
              Open Settings, choose Account, then tap Delete Account &amp; Data
              for an immediate in-app wipe.
            </p>
          </div>
        </aside>

        <section className="deletion-form-card">
          <div className="deletion-form-card__heading">
            <span className="policy-eyebrow">Online request</span>
            <h2>Tell us where to send confirmation</h2>
            <p>Your request will be reviewed and completed from our servers.</p>
          </div>

          {submitted ? (
            <div className="deletion-success" role="status">
              <span className="deletion-success__icon">✓</span>
              <div>
                <span className="policy-eyebrow">Request received</span>
                <h3>Your deletion request is in motion.</h3>
                <p>
                  We received the request for <strong>{email}</strong>. Your
                  selected data will be permanently purged within 24 to 48
                  hours, followed by a confirmation email.
                </p>
                <Link href="/privacy" className="policy-inline-action">
                  Review our privacy policy <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="deletion-form">
              <div className="deletion-field">
                <label htmlFor="email">Registered account email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  aria-invalid={Boolean(error)}
                />
                {error ? <span className="deletion-error">{error}</span> : null}
              </div>
              <fieldset className="deletion-fieldset">
                <legend>Deletion scope</legend>
                <label
                  className={`deletion-option${scope === "all" ? " is-selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="scope"
                    value="all"
                    checked={scope === "all"}
                    onChange={() => setScope("all")}
                  />
                  <span>
                    <strong>Entire account &amp; all data</strong>
                    <small>
                      Removes authentication, profile, budgets, transactions,
                      debts, and goals.
                    </small>
                  </span>
                </label>
                <label
                  className={`deletion-option${scope === "financial_only" ? " is-selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="scope"
                    value="financial_only"
                    checked={scope === "financial_only"}
                    onChange={() => setScope("financial_only")}
                  />
                  <span>
                    <strong>Financial records only</strong>
                    <small>
                      Removes transactions, debts, and budgets while preserving
                      your login account.
                    </small>
                  </span>
                </label>
              </fieldset>
              <div className="deletion-field">
                <label htmlFor="reason">
                  Reason for leaving <em>Optional</em>
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  placeholder="Tell us how we could improve Owners Plus..."
                />
              </div>
              <div className="deletion-form__footer">
                <p>This action cannot be undone once processed.</p>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Sending request..."
                    : "Submit deletion request"}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      <div className="deletion-retention">
        <strong>Need more detail?</strong>
        <span>
          Read the <Link href="/privacy">Privacy Policy</Link> or contact{" "}
          <a href="mailto:samuelab846@gmail.com">samuelab846@gmail.com</a>.
        </span>
      </div>
      <PolicyFooter />
    </PolicyShell>
  );
}
