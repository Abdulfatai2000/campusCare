"use client";
import Link from "next/link";
import {
  ClipboardList,
  Clock3,
  CircleCheck,
  Wrench,
  CalendarDays,
  Building2,
} from "lucide-react";
import { MetricCard } from "@/components/shared/metric-card";
import { useAdminPreview } from "./admin-state";
import { AdminCharts } from "./admin-charts";
import { ActivityTimeline, StatusBadge } from "./admin-ui";

export function AdminDashboard() {
  const { reports, appointments, services, showActivity } = useAdminPreview();
  const metrics = [
    { label: "Total reports", count: reports.length, icon: ClipboardList },
    {
      label: "Pending reports",
      count: reports.filter((report) => report.status === "pending").length,
      icon: Clock3,
    },
    {
      label: "In-progress reports",
      count: reports.filter((report) => report.status === "in_progress").length,
      icon: Wrench,
    },
    {
      label: "Resolved reports",
      count: reports.filter((report) => report.status === "resolved").length,
      icon: CircleCheck,
    },
    {
      label: "Appointment requests",
      count: appointments.filter((item) => item.status === "requested").length,
      icon: CalendarDays,
    },
    {
      label: "Active services",
      count: services.filter((service) => service.enabled).length,
      icon: Building2,
    },
  ];
  return (
    <>
      <p className="eyebrow">Sample operations snapshot</p>
      <div className="metric-grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={`${metric.label} (sample)`}
            value={String(metric.count).padStart(2, "0")}
            icon={<metric.icon size={22} />}
          />
        ))}
      </div>
      <div className="admin-actions">
        <Link className="button" href="/admin/reports">
          Review reports ↗
        </Link>
        <Link className="button button-outline" href="/admin/appointments">
          Appointment requests
        </Link>
        <Link className="button button-outline" href="/admin/services">
          Manage services
        </Link>
      </div>
      <AdminCharts />
      <div className="admin-grid">
        <section className="admin-section">
          <h2>Needs a closer look</h2>
          <div className="preview-list">
            {reports
              .filter(
                (report) =>
                  report.status === "pending" || report.status === "in_review",
              )
              .slice(0, 4)
              .map((report) => (
                <Link
                  className="preview-item"
                  key={report.id}
                  href={`/admin/reports/${report.id}`}
                >
                  <div>
                    <strong>{report.title}</strong>
                    <p>
                      {report.id} · {report.category}
                    </p>
                  </div>
                  <StatusBadge value={report.priority} />
                </Link>
              ))}
            {!reports.some(
              (report) =>
                report.status === "pending" || report.status === "in_review",
            ) && <p className="muted">The sample review queue is clear.</p>}
          </div>
        </section>
        {showActivity && (
          <section className="admin-section">
            <h2>Recent sample activity</h2>
            <ActivityTimeline
              entries={reports
                .slice()
                .reverse()
                .slice(0, 4)
                .map((report) => ({
                  title: report.title,
                  detail: report.history.at(-1)?.title + " · fictional record",
                }))}
            />
            <Link
              className="button button-outline"
              style={{ marginTop: 20 }}
              href="/admin/notifications"
            >
              Open example inbox
            </Link>
          </section>
        )}
      </div>
    </>
  );
}
