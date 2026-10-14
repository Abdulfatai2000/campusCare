"use client";
import { ISSUE_STATUSES } from "@/types/domain";
import { useAdminPreview } from "./admin-state";

function Distribution({
  title,
  values,
  total,
}: {
  title: string;
  values: { label: string; count: number }[];
  total: number;
}) {
  return (
    <section className="admin-section">
      <h2>{title}</h2>
      <figure className="admin-chart" style={{ margin: 0 }}>
        {values.map((item) => (
          <div key={item.label}>
            <div className="admin-chart-label">
              <span>{item.label.replaceAll("_", " ")}</span>
              <span>
                {item.count} ·{" "}
                {total ? Math.round((item.count / total) * 100) : 0}%
              </span>
            </div>
            <div className="admin-bar" aria-hidden="true">
              <span
                style={{ width: `${total ? (item.count / total) * 100 : 0}%` }}
              />
            </div>
          </div>
        ))}
        <figcaption>
          Fictional records only. Counts and percentages reflect this local
          preview.
        </figcaption>
      </figure>
    </section>
  );
}
export function AdminCharts() {
  const { reports } = useAdminPreview();
  const categories = [...new Set(reports.map((report) => report.category))];
  return (
    <div className="admin-grid">
      <Distribution
        title="Issue categories"
        total={reports.length}
        values={categories.map((category) => ({
          label: category,
          count: reports.filter((report) => report.category === category)
            .length,
        }))}
      />
      <Distribution
        title="Report status"
        total={reports.length}
        values={ISSUE_STATUSES.map((status) => ({
          label: status,
          count: reports.filter((report) => report.status === status).length,
        }))}
      />
    </div>
  );
}
