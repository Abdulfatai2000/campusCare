"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import {
  adminReports,
  adminServices,
  adminAppointments,
  adminNotifications,
  type AdminReport,
  type AdminService,
  type AdminAppointment,
} from "@/data/admin-preview";

function usePreviewState() {
  const [reports, setReports] = useState<AdminReport[]>(adminReports);
  const [services, setServices] = useState<AdminService[]>(adminServices);
  const [appointments, setAppointments] =
    useState<AdminAppointment[]>(adminAppointments);
  const [notifications, setNotifications] = useState(adminNotifications);
  const [compact, setCompact] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [showActivity, setShowActivity] = useState(true);
  return {
    reports,
    setReports,
    services,
    setServices,
    appointments,
    setAppointments,
    notifications,
    setNotifications,
    compact,
    setCompact,
    reduceMotion,
    setReduceMotion,
    largeText,
    setLargeText,
    showActivity,
    setShowActivity,
  };
}
const AdminContext = createContext<ReturnType<typeof usePreviewState> | null>(
  null,
);
export function AdminPreviewProvider({ children }: { children: ReactNode }) {
  const state = usePreviewState();
  return (
    <AdminContext.Provider value={state}>
      <div
        className="admin-portal"
        data-compact={state.compact}
        data-reduce-motion={state.reduceMotion}
        data-large-text={state.largeText}
      >
        {children}
      </div>
    </AdminContext.Provider>
  );
}
export function useAdminPreview() {
  const state = useContext(AdminContext);
  if (!state) throw new Error("Admin preview must be inside its provider.");
  return state;
}
