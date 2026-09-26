import { readFileSync } from "node:fs";
import { join } from "node:path";
import NavbarScript from "./navbar-script";

const landingHtml = readFileSync(
  join(process.cwd(), "app", "landing-content.html"),
  "utf8",
).replaceAll('src="images/', 'src="/images/');

export default function Home() {
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: landingHtml }} />
      <NavbarScript />
    </>
  );
}
