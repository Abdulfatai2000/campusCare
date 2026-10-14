export default function Loading() {
  return (
    <section
      className="admin-section admin-loading"
      role="status"
      aria-live="polite"
    >
      <div className="loader" aria-hidden="true" />
      <h2 style={{ marginTop: 18 }}>Opening admin preview…</h2>
      <p className="muted">Preparing the fictional workspace.</p>
    </section>
  );
}
