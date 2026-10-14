"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ISSUE_STATUSES, type IssueStatus } from "@/types/domain";
import { departments } from "@/data/admin-preview";
import { PageHeading } from "@/components/shared/page-heading";
import { EmptyState } from "@/components/shared/empty-state";
import { useAdminPreview } from "./admin-state";
import {
  ActivityTimeline,
  ConfirmPreview,
  PreviewFeedback,
  StatusBadge,
} from "./admin-ui";

export function AdminReportDetail({ id }: { id: string }) {
  const { reports, setReports } = useAdminPreview();
  const report = reports.find((item) => item.id === id);
  const [status, setStatus] = useState<IssueStatus>(
    report?.status ?? "pending",
  );
  const [department, setDepartment] = useState(
    report?.department ?? departments[0],
  );
  const [note, setNote] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(false);
  if (!report)
    return (
      <EmptyState
        title="Sample report not found"
        description="This identifier is not in the fictional dataset."
        action={
          <Link href="/admin/reports" className="button">
            All reports
          </Link>
        }
      />
    );
  function update() {
    setReports((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
              department,
              history: [
                ...item.history,
                {
                  title: `Preview updated: ${status.replaceAll("_", " ")}`,
                  detail: `Assigned to ${department}. Local change only.`,
                },
              ],
            }
          : item,
      ),
    );
    setFeedback("Report preview updated. No database was changed.");
  }
  function addNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (note.trim().length < 5 || note.trim().length > 500) {
      setError("Use 5–500 characters of fictional text.");
      return;
    }
    setReports((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              notes: [...item.notes, note.trim()],
              history: [
                ...item.history,
                {
                  title: "Sample internal note added",
                  detail: "Local preview only; no staff were notified.",
                },
              ],
            }
          : item,
      ),
    );
    setNote("");
    setError("");
    setFeedback("Sample note added locally. It will reset on reload.");
  }
  return (
    <>
      <PageHeading
        eyebrow={`Sample report / ${report.id}`}
        title={report.title}
        description={report.description}
      />
      <div className="admin-quicklinks">
        <StatusBadge value={report.status} />
        <StatusBadge value={report.priority} />
      </div>
      <PreviewFeedback>{feedback}</PreviewFeedback>
      <div className="admin-grid">
        <section className="admin-section">
          <h2>Report details</h2>
          <dl className="admin-detail-list">
            <dt>Location</dt>
            <dd>{report.location}</dd>
            <dt>Category</dt>
            <dd>{report.category}</dd>
            <dt>Department</dt>
            <dd>{report.department}</dd>
            <dt>Record</dt>
            <dd>Fictional · {report.id}</dd>
          </dl>
          <form
            className="form-grid"
            onSubmit={(event) => {
              event.preventDefault();
              setConfirm(true);
            }}
          >
            <label className="field">
              Responsible department
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                {departments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="field">
              Report status
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as IssueStatus)
                }
              >
                {ISSUE_STATUSES.map((item) => (
                  <option value={item} key={item}>
                    {item.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="button"
              disabled={
                status === report.status && department === report.department
              }
            >
              Apply preview changes
            </button>
          </form>
        </section>
        <section className="admin-section">
          <h2>Status timeline</h2>
          <ActivityTimeline entries={report.history} />
        </section>
      </div>
      <section className="admin-section">
        <h2>Sample internal notes</h2>
        <p className="muted small">
          Use fictional text only. These notes are not private storage and are
          never sent to staff.
        </p>
        {report.notes.length ? (
          <ul>
            {report.notes.map((item, index) => (
              <li
                key={index}
                style={{ overflowWrap: "anywhere", marginBottom: 12 }}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted">No example notes yet.</p>
        )}
        <form className="form-grid" onSubmit={addNote}>
          <label className="field">
            Add a sample note
            <textarea
              required
              minLength={5}
              maxLength={500}
              value={note}
              aria-invalid={!!error}
              aria-describedby={error ? "note-error" : undefined}
              onChange={(event) => {
                setNote(event.target.value);
                setError("");
              }}
            />
          </label>
          {error && (
            <p className="admin-error" id="note-error" role="alert">
              {error}
            </p>
          )}
          <button className="button" style={{ justifySelf: "start" }}>
            Add note preview
          </button>
        </form>
      </section>
      <div className="admin-actions">
        <Link href="/admin/reports" className="button button-outline">
          ← All reports
        </Link>
      </div>
      {confirm && (
        <ConfirmPreview
          title="Update this sample report?"
          detail={`Status: ${status.replaceAll("_", " ")}. Department: ${department}.`}
          onConfirm={update}
          onClose={() => setConfirm(false)}
        />
      )}
    </>
  );
}
