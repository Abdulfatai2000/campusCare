import { AdminPreviewProvider } from "@/components/admin/admin-state";
import { AdminShell } from "@/components/admin/admin-shell";
import "../admin.css";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPreviewProvider>
      <AdminShell>{children}</AdminShell>
    </AdminPreviewProvider>
  );
}
