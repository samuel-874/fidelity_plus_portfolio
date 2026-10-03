import Link from "next/link";
import SiteHeader from "../../site-header";

export function PolicyShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`policy-page ${className}`}>
      <SiteHeader />
      <main className="policy-content">{children}</main>
    </div>
  );
}

export function PolicyHero({
  eyebrow,
  title,
  description,
  updated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
}) {
  return (
    <header className="policy-hero">
      <span className="policy-eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {updated ? <small>{updated}</small> : null}
    </header>
  );
}

export function PolicyFooter() {
  return (
    <footer className="policy-footer">
      <span>© {new Date().getFullYear()} Owners Plus</span>
      <div>
        <Link href="/privacy">Privacy policy</Link>
        <Link href="/data-deletion">Data deletion</Link>
      </div>
    </footer>
  );
}
