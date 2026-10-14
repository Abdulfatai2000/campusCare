import { AdminUsers } from "@/components/admin/user-directory";
import { PageHeading } from "@/components/shared/page-heading";
export default function Page() {
  return (
    <>
      <PageHeading
        eyebrow="Operations / People"
        title="People at the heart of campus."
        description="Browse fictional student and staff records. Privileged account actions are unavailable."
      />
      <AdminUsers />
    </>
  );
}
