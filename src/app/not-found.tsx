import Link from "next/link";
export default function NotFound() {
  return <main className="centered"><div className="eyebrow">404 / CampusCare</div><h1>That page took a wrong turn.</h1><p>Let’s get you back to somewhere useful.</p><Link className="button" href="/">Return home →</Link></main>;
}
