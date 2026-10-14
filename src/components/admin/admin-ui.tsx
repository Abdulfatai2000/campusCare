"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";

export function StatusBadge({ value }: { value: string }) {
  return <span className="status admin-status" data-status={value.toLowerCase()}>{value.replaceAll("_", " ")}</span>;
}
export function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: readonly string[] }) {
  return <label className="field">{label}<select value={value} onChange={event => onChange(event.target.value)}><option value="">All {label.toLowerCase()}</option>{options.map(option => <option key={option} value={option}>{option.replaceAll("_", " ")}</option>)}</select></label>;
}
export function SearchField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="field admin-search">{label}<input type="search" value={value} maxLength={120} placeholder="Search fictional records…" onChange={event => onChange(event.target.value)} /></label>;
}
export function PreviewFeedback({ children }: { children: ReactNode }) {
  return <p className="admin-feedback" role="status" aria-live="polite">{children}</p>;
}
export function NoResults({ reset }: { reset: () => void }) {
  return <EmptyState title="No matching examples" description="Try another search or clear your filters to see the fictional records." action={<button className="button button-outline" onClick={reset}>Clear filters</button>} />;
}
export function DataTable({ caption, headings, children }: { caption: string; headings: string[]; children: ReactNode }) {
  return <div className="admin-table-wrap" role="region" aria-label={caption} tabIndex={0}><table className="admin-table"><caption>{caption}</caption><thead><tr>{headings.map(heading => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{children}</tbody></table></div>;
}
/** Native modal provides focus containment, Escape and inert background. */
export function PreviewDialog({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useId();
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const element = dialog.current;
    element?.showModal();
    return () => { element?.close(); previous?.focus(); };
  }, []);
  return <dialog ref={dialog} aria-labelledby={heading} className="admin-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div className="admin-dialog-heading"><h2 id={heading}>{title}</h2><button className="theme-button" aria-label="Close dialog" onClick={onClose}><X size={19} /></button></div>{children}</dialog>;
}
export function ConfirmPreview({ title, detail, onConfirm, onClose }: { title: string; detail: string; onConfirm: () => void; onClose: () => void }) {
  return <PreviewDialog title={title} onClose={onClose}><p className="muted">{detail}</p><p className="notice">Preview only. This changes local sample state; nothing is sent or saved to a database.</p><div className="admin-actions"><button className="button button-outline" onClick={onClose}>Cancel</button><button className="button" onClick={() => { onConfirm(); onClose(); }}>Confirm preview</button></div></PreviewDialog>;
}
export function ActivityTimeline({ entries }: { entries: { title: string; detail: string }[] }) {
  return <ol className="admin-timeline">{entries.map((entry, index) => <li key={index}><strong>{entry.title}</strong><p className="muted small">{entry.detail}</p></li>)}</ol>;
}
