"use client";
import Link from "next/link";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="admin-section" role="alert">
      <h1>The preview could not load.</h1>
      <p className="muted">
        Try opening this page again. No live campus data has been changed.
      </p>
      <div className="admin-actions">
        <button className="button" onClick={reset}>
          Try again
        </button>
        <Link className="button button-outline" href="/admin">
          Back to overview
        </Link>
      </div>
    </section>
  );
}
