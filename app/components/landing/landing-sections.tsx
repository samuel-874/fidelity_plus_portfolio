"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    eyebrow: "Track",
    title: "See where every dollar goes",
    text: "Automatically organize spending, income, and recurring payments so your whole financial picture is easy to read.",
    image: "/images/placeholder-image-1-145.png",
  },
  {
    eyebrow: "Plan",
    title: "Build budgets that actually work",
    text: "Create flexible budgets using proven methods like 50/30/20 and get alerts before you drift past a limit.",
    image: "/images/placeholder-image-1-158.png",
  },
  {
    eyebrow: "Grow",
    title: "Turn clarity into momentum",
    text: "Set goals, pay down debt, and use practical insights to make the next smart move with confidence.",
    image: "/images/placeholder-image-1-171.png",
  },
];

const faqs = [
  [
    "Is my data secure?",
    "Yes. Owners Plus uses end-to-end encryption to protect your financial information. Only you can access your data.",
  ],
  [
    "Can I use it offline?",
    "Yes. Owners Plus works without internet and syncs your changes automatically when you reconnect.",
  ],
  [
    "Does it work on all devices?",
    "Access Owners Plus on your phone, tablet, or desktop. Your changes sync across devices.",
  ],
  [
    "Can I import my bank data?",
    "Yes. Upload statements or connect your accounts directly. Owners Plus categorizes transactions automatically.",
  ],
];

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="landing-section-heading">
      <span className="landing-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="landing-hero" id="start">
      <div className="landing-hero__copy">
        <span className="landing-eyebrow">
          Financial clarity, without the fog
        </span>
        <h1>
          Own your money.
          <br />
          <em>Change your future.</em>
        </h1>
        <p>
          Owners Plus turns financial confusion into a clear next step. Track
          every dollar, build a plan that fits your life, and move forward with
          confidence.
        </p>
        <div className="landing-actions">
          <Link
            href="#features"
            className="landing-button landing-button--green"
          >
            Start free
          </Link>
          <Link href="#how-it-works" className="landing-text-link">
            See how it works <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div
        className="landing-hero__visual"
        aria-label="Owners Plus financial overview preview"
      >
        <div className="landing-orbit landing-orbit--one" />
        <div className="landing-orbit landing-orbit--two" />
        <div className="landing-dashboard">
          <div className="landing-dashboard__top">
            <span>Good morning, Alex</span>
            <span className="landing-status">● On track</span>
          </div>
          <div className="landing-balance">
            <small>Total balance</small>
            <strong>$24,680.42</strong>
            <span>+12.8% this month</span>
          </div>
          <div className="landing-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="landing-dashboard__footer">
            <span>Spending</span>
            <strong>$3,240</strong>
            <span>Budget left&nbsp; $1,760</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSection() {
  return (
    <section className="landing-section landing-feature-section" id="features">
      <SectionHeading
        eyebrow="The essentials"
        title="A calmer way to handle money"
        text="The right information, in the right place, when you need it."
      />
      <div className="landing-feature-grid">
        {features.map((feature) => (
          <article className="landing-feature-card" key={feature.title}>
            <div className="landing-feature-card__image">
              <Image src={feature.image} alt="" width={405} height={608} />
            </div>
            <span className="landing-eyebrow">{feature.eyebrow}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <Link href="#start" className="landing-text-link">
              Explore <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProfileSection() {
  return (
    <section className="landing-section landing-split-section" id="income">
      <div className="landing-split-section__copy">
        <SectionHeading
          eyebrow="One clear view"
          title="Personal, business, and everything between"
          text="Switch between profiles without losing the thread. See the whole picture while keeping every account organized."
        />
        <div className="landing-actions">
          <Link
            href="#start"
            className="landing-button landing-button--outline"
          >
            Get started
          </Link>
          <Link href="#tools" className="landing-text-link">
            Learn more <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="landing-profile-board">
        <div className="landing-profile-board__tabs">
          <span className="is-active">Personal</span>
          <span>Business</span>
          <span>Multi-wallet</span>
        </div>
        <div className="landing-profile-board__content">
          <small>Monthly overview</small>
          <strong>$8,420.00</strong>
          <div className="landing-mini-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="landing-profile-board__row">
            <span>Income</span>
            <b>+$6,800</b>
          </div>
          <div className="landing-profile-board__row">
            <span>Expenses</span>
            <b>-$3,240</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsightSection() {
  return (
    <section className="landing-section landing-insight-section" id="expenses">
      <SectionHeading
        eyebrow="Make it yours"
        title="Small signals. Better decisions."
        text="Your habits become easier to understand when the noise is out of the way."
      />
      <div className="landing-insight-grid">
        <article>
          <span>01</span>
          <h3>Notice patterns</h3>
          <p>
            See the habits that shape your month, without digging through
            spreadsheets.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Stay accountable</h3>
          <p>Gentle alerts keep your goals visible when life gets busy.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Build momentum</h3>
          <p>Turn a clear view today into more options tomorrow.</p>
        </article>
      </div>
    </section>
  );
}

export function AppShowcaseSection() {
  const budget = {
    income: "$500,000",
    expenses: "$442,400",
    remaining: "$57,600",
  };
  const transactions = [
    ["Salary", "+ $250,000", "income"],
    ["Data Allowance", "+ $50,000", "income"],
    ["Unity Bank", "- $100,000", "expense"],
    ["Internet Subscription", "- $30,000", "expense"],
  ];

  return (
    <section className="landing-section landing-showcase" id="app-preview">
      <div className="landing-showcase__intro">
        <SectionHeading
          eyebrow="Built for real life"
          title="Your money, at a glance"
          text="A focused view for the morning check-in, the quick transaction, and the monthly reset."
        />
        <span className="landing-showcase__note">
          A closer look inside Owners Plus
        </span>
      </div>
      <div className="landing-phone-row">
        <article className="landing-phone landing-phone--overview">
          <div className="landing-phone__status">
            <span>4:17</span>
            <span>◦ ◌ ▱</span>
          </div>
          <div className="landing-phone__heading">
            <div>
              <small>August 2026</small>
              <h3>Owners</h3>
            </div>
          </div>
          <div className="landing-phone__metrics">
            <div>
              <small>Income</small>
              <strong>{budget.income}</strong>
              <b>This month</b>
            </div>
            <div>
              <small>Expenses</small>
              <strong>{budget.expenses}</strong>
              <b>This month</b>
            </div>
            <div>
              <small>Remaining</small>
              <strong>{budget.remaining}</strong>
              <b>To allocate</b>
            </div>
            <div>
              <small>Debts</small>
              <strong>$0</strong>
              <b>Outstanding</b>
            </div>
          </div>
          <div className="landing-phone__strip">
            <span className="landing-phone__profit-icon" aria-hidden="true">
              ▦
            </span>
            <b>Profit &amp; Loss</b>
            <span>›</span>
          </div>
          <div className="landing-phone__breakdown">
            <h4>Budget Breakdown</h4>
            <span>
              Wants <b>$20,000 (5%)</b>
            </span>
            <i>
              <em />
            </i>
            <span>
              Debts <b>$91,000 (23%)</b>
            </span>
            <i>
              <em className="is-long" />
            </i>
          </div>
        </article>

        <article className="landing-phone landing-phone--transactions">
          <div className="landing-phone__status">
            <span>4:17</span>
            <span>◦ ◌ ▱</span>
          </div>
          <h3>Transactions</h3>
          <div className="landing-transaction-list">
            {transactions.map(([name, amount, type]) => (
              <div className="landing-transaction" key={name}>
                <span
                  className={type === "income" ? "is-income" : "is-expense"}
                >
                  {type === "income" ? "↓" : "↑"}
                </span>
                <div>
                  <b>{name}</b>
                  <small>{type} · 2025-12-30</small>
                </div>
                <strong
                  className={type === "income" ? "is-income" : "is-expense"}
                >
                  {amount}
                </strong>
              </div>
            ))}
          </div>
        </article>

        <article className="landing-phone landing-phone--budget">
          <div className="landing-phone__status">
            <span>4:17</span>
            <span>◦ ◌ ▱</span>
          </div>
          <div className="landing-phone__heading">
            <div>
              <small>September</small>
              <h3>Budget</h3>
            </div>
            <span className="landing-phone__add">＋ Add</span>
          </div>
          <div className="landing-budget-totals">
            <div>
              <small>Total Income</small>
              <strong>{budget.income}</strong>
            </div>
            <div>
              <small>Total Expense</small>
              <strong>{budget.expenses}</strong>
            </div>
          </div>
          <div className="landing-budget-balance">
            <small>Remaining Balance</small>
            <strong>{budget.remaining}</strong>
          </div>
          <h4 className="landing-phone__section-title">Expenses</h4>
          {[
            ["0pay", "$125,600"],
            ["Aunty mayo", "$146,000"],
            ["Data", "$170,800"],
          ].map(([name, amount]) => (
            <div className="landing-budget-row" key={name}>
              <div>
                <b>{name}</b>
                <small>Debts</small>
              </div>
              <strong>{amount}</strong>
              <span>×</span>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="landing-stats">
      <div>
        <strong>50K+</strong>
        <span>people taking control</span>
      </div>
      <div>
        <strong>4.9</strong>
        <span>average rating</span>
      </div>
      <div>
        <strong>24/7</strong>
        <span>clarity when you need it</span>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    [
      "01",
      "Set up your profile",
      "Choose personal or business mode and connect your accounts.",
    ],
    [
      "02",
      "Let AI categorize",
      "Owners Plus sorts transactions into needs, wants, and goals.",
    ],
    [
      "03",
      "Build your budget",
      "Use proven methods or create categories that fit your life.",
    ],
    [
      "04",
      "Watch it get clearer",
      "Make informed decisions with a view that stays current.",
    ],
  ];
  return (
    <section className="landing-section landing-steps" id="how-it-works">
      <SectionHeading
        eyebrow="Simple by design"
        title="Get started in four steps"
        text="Download the app, connect your accounts, and let Owners Plus do the organizing."
      />
      <div className="landing-steps__grid">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="landing-section landing-faq" id="tools">
      <SectionHeading
        eyebrow="Questions, answered"
        title="A little more clarity"
        text="Common questions about Owners Plus and how it works."
      />
      <div className="landing-faq__list">
        {faqs.map(([question, answer], index) => (
          <div
            className={`landing-faq__item${open === index ? " is-open" : ""}`}
            key={question}
          >
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              <span>{question}</span>
              <b>{open === index ? "−" : "+"}</b>
            </button>
            {open === index && <p>{answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="landing-footer" id="contact">
      <div className="landing-footer__top">
        <div>
          <span className="landing-eyebrow">Stay in the loop</span>
          <h2>More clarity, in your inbox.</h2>
        </div>
        <div className="landing-newsletter">
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email address"
          />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <div className="landing-footer__bottom">
        <span>© {new Date().getFullYear()} Owners Plus</span>
        <div>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/data-deletion">Data deletion</Link>
        </div>
      </div>
    </footer>
  );
}
