"use client";
import Link from "next/link";
import { useState } from "react";
import { ISSUE_PRIORITIES, ISSUE_STATUSES } from "@/types/domain";
import { useAdminPreview } from "./admin-state";
import { DataTable, FilterSelect, NoResults, SearchField, StatusBadge } from "./admin-ui";

export function AdminReportDirectory() {
  const { reports } = useAdminPreview();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("priority");
  const reset = () => { setQuery(""); setStatus(""); setCategory(""); setPriority(""); setSort("priority"); };
  const rows = reports.filter(report => `${report.id} ${report.title} ${report.location} ${report.department}`.toLowerCase().includes(query.trim().toLowerCase()) && (!status || report.status === status) && (!category || report.category === category) && (!priority || report.priority === priority)).sort((a, b) => sort === "title" ? a.title.localeCompare(b.title) : sort === "id" ? a.id.localeCompare(b.id) : ISSUE_PRIORITIES.indexOf(b.priority) - ISSUE_PRIORITIES.indexOf(a.priority));
  return <><div className="admin-toolbar"><SearchField label="Search reports" value={query} onChange={setQuery} /><FilterSelect label="Status" value={status} onChange={setStatus} options={ISSUE_STATUSES} /><FilterSelect label="Category" value={category} onChange={setCategory} options={[...new Set(reports.map(report => report.category))]} /><FilterSelect label="Priority" value={priority} onChange={setPriority} options={ISSUE_PRIORITIES} /><label className="field">Sort reports<select value={sort} onChange={event => setSort(event.target.value)}><option value="priority">Priority: highest first</option><option value="title">Title: A–Z</option><option value="id">Report ID</option></select></label><button className="button button-outline" onClick={reset}>Clear filters</button></div><p role="status" className="small muted">{rows.length} of {reports.length} fictional reports</p>{rows.length ? <DataTable caption="Sample report queue — select a report to explore its local workflow" headings={["Report", "Category", "Priority", "Status", "Department"]}>{rows.map(report => <tr key={report.id}><td><Link href={`/admin/reports/${report.id}`}>{report.title}</Link><div className="small muted">{report.id} · {report.location}</div></td><td>{report.category}</td><td><StatusBadge value={report.priority} /></td><td><StatusBadge value={report.status} /></td><td>{report.department}</td></tr>)}</DataTable> : <NoResults reset={reset} />}</>;
}
