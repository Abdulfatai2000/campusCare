import { previewIssues, previewServices } from "./preview";
import type { IssueSummary } from "@/types/domain";

/** Entirely fictional records. Never hydrate these from live campus APIs. */
export interface AdminReport extends IssueSummary {
  description: string;
  department: string;
  notes: string[];
  history: { title: string; detail: string }[];
}
export const departments = [
  "Unassigned",
  "Facilities team (sample)",
  "Student support (sample)",
  "IT desk (sample)",
];
export const adminReports: AdminReport[] = [
  ...previewIssues,
  {
    id: "DEMO-CC-004",
    title: "Library network restored",
    category: "IT support",
    location: "Example Library",
    status: "resolved" as const,
    createdAt: "Sample date",
    priority: "low" as const,
  },
  {
    id: "DEMO-CC-005",
    title: "Leaking water fountain",
    category: "Utilities",
    location: "Example Courtyard",
    status: "pending" as const,
    createdAt: "Sample date",
    priority: "urgent" as const,
  },
  {
    id: "DEMO-CC-006",
    title: "Study room door repaired",
    category: "Facilities",
    location: "Example Study Room",
    status: "resolved" as const,
    createdAt: "Sample date",
    priority: "medium" as const,
  },
].map((report, i) => ({
  ...report,
  description:
    "Fictional report for exploring the review workflow. This example does not describe an actual campus incident.",
  department: i % 2 ? departments[0] : departments[1],
  notes: [],
  history: [
    {
      title: "Example report created",
      detail: "Illustrative history — no real submission.",
    },
    {
      title: report.status.replaceAll("_", " "),
      detail: "Starting status in the sample dataset.",
    },
  ],
}));

export const serviceCategories = [
  "Wellbeing",
  "Campus life",
  "Facilities",
  "Academics",
];
export interface AdminService {
  id: string;
  title: string;
  category: string;
  description: string;
  hours: string;
  enabled: boolean;
}
export const adminServices: AdminService[] = previewServices.map(
  (service, i) => ({
    ...service,
    hours: "Example weekdays, 09:00–16:00",
    enabled: i !== 3,
  }),
);
export type AdminAppointmentStatus =
  "requested" | "confirmed" | "rejected" | "completed";
export interface AdminAppointment {
  id: string;
  person: string;
  service: string;
  date: string;
  time: string;
  status: AdminAppointmentStatus;
  reason: string;
}
export const adminAppointments: AdminAppointment[] = [
  {
    id: "DEMO-APT-001",
    person: "Example student A",
    service: "Student support",
    date: "2026-11-10",
    time: "10:00",
    status: "requested",
    reason: "Example orientation guidance session.",
  },
  {
    id: "DEMO-APT-002",
    person: "Example student B",
    service: "Health services",
    date: "2026-11-10",
    time: "14:00",
    status: "confirmed",
    reason: "Fictional general service introduction.",
  },
  {
    id: "DEMO-APT-003",
    person: "Example student C",
    service: "Academic guidance",
    date: "2026-11-11",
    time: "11:00",
    status: "requested",
    reason: "Example study planning session.",
  },
  {
    id: "DEMO-APT-004",
    person: "Example student D",
    service: "Student support",
    date: "2026-11-09",
    time: "09:00",
    status: "completed",
    reason: "Example campus resources discussion.",
  },
];
export const adminUsers = [
  {
    id: "DEMO-USER-01",
    name: "Example student A",
    role: "Student",
    status: "Active",
    department: "Example faculty",
    detail: "Fictional student record for interface review.",
  },
  {
    id: "DEMO-USER-02",
    name: "Example staff B",
    role: "Staff",
    status: "Active",
    department: "Example facilities team",
    detail: "Fictional staff record. No permissions are granted.",
  },
  {
    id: "DEMO-USER-03",
    name: "Example student C",
    role: "Student",
    status: "Inactive",
    department: "Example faculty",
    detail: "Fictional inactive account indicator.",
  },
  {
    id: "DEMO-USER-04",
    name: "Example administrator D",
    role: "Campus admin",
    status: "Active",
    department: "Example support team",
    detail: "Fictional administrator record. No signed-in identity.",
  },
];
export const adminNotifications = [
  {
    id: "notice-1",
    title: "Sample report awaiting review",
    detail: "A fictional utilities report appears in the review queue.",
    href: "/admin/reports/DEMO-CC-005",
    category: "Reports",
    read: false,
  },
  {
    id: "notice-2",
    title: "Example appointment request",
    detail: "Explore the appointment approval preview.",
    href: "/admin/appointments",
    category: "Appointments",
    read: false,
  },
  {
    id: "notice-3",
    title: "Sample service directory review",
    detail: "Example academic guidance is disabled in the directory.",
    href: "/admin/services",
    category: "Services",
    read: true,
  },
];
