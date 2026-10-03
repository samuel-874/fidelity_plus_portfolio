import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="policy-site-header">
      <div className="policy-site-header__inner">
        <Link href="/" className="policy-site-header__brand">
          <Image
            src="/images/icon.png"
            alt="Owners Plus logo"
            width={34}
            height={34}
          />
          <span>Owners Plus</span>
        </Link>

        <nav className="policy-site-header__nav" aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/#income">Income</Link>
          <Link href="/#expenses">Expenses</Link>
          <Link href="/#tools">Tools</Link>
        </nav>

        {/* <div className="policy-site-header__actions">
          <Link href="/" className="policy-site-header__secondary">
            Sign in
          </Link>
          <Link href="/" className="policy-site-header__primary">
            Start free
          </Link>
        </div> */}
      </div>
    </header>
  );
}
