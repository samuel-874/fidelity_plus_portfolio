"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Income", href: "#income" },
  { label: "Expenses", href: "#expenses" },
  { label: "Tools", href: "#tools" },
];

export default function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="landing-header">
      <div className="landing-header__inner">
        <Link href="/" className="landing-brand" aria-label="Owners Plus home">
          <Image src="/images/icon.png" alt="" width={36} height={36} />
          <span>Owners Plus</span>
        </Link>

        <nav
          className={`landing-nav${isOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* <div className="landing-header__actions">
          <Link
            href="#contact"
            className="landing-button landing-button--quiet"
          >
            Sign in
          </Link>
          <Link href="#start" className="landing-button landing-button--green">
            Start free
          </Link>
        </div> */}

        <button
          type="button"
          className="landing-menu-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
