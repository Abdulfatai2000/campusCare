import { CalendarDays, LayoutDashboard, ClipboardList, LifeBuoy, ShieldAlert, UserRound, Settings2, Bell, Building2, ChartNoAxesCombined, UsersRound, Stethoscope, FilePlus2, type LucideIcon } from "lucide-react";

export interface NavEntry { label: string; href: string; icon: LucideIcon }
export const studentNavigation: NavEntry[] = [
  {label:"Dashboard",href:"/dashboard",icon:LayoutDashboard},
  {label:"Report an issue",href:"/report-issue",icon:FilePlus2},
  {label:"My reports",href:"/my-reports",icon:ClipboardList},
  {label:"Campus services",href:"/services",icon:Building2},
  {label:"Appointments",href:"/appointments",icon:CalendarDays},
  {label:"Emergency",href:"/emergency",icon:ShieldAlert},
  {label:"Notifications",href:"/notifications",icon:Bell},
  {label:"Profile",href:"/profile",icon:UserRound},
  {label:"Settings",href:"/settings",icon:Settings2},
];
export const adminNavigation: NavEntry[] = [
  {label:"Overview",href:"/admin",icon:LayoutDashboard},
  {label:"Manage reports",href:"/admin/reports",icon:ClipboardList},
  {label:"Services",href:"/admin/services",icon:Stethoscope},
  {label:"Appointments",href:"/admin/appointments",icon:CalendarDays},
  {label:"Emergency contacts",href:"/admin/emergency-contacts",icon:ShieldAlert},
  {label:"Users",href:"/admin/users",icon:UsersRound},
  {label:"Analytics",href:"/admin/analytics",icon:ChartNoAxesCombined},
  {label:"Settings",href:"/admin/settings",icon:Settings2},
];
