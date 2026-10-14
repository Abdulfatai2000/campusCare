import { AdminAppointments } from "@/components/admin/appointment-manager";
import { PageHeading } from "@/components/shared/page-heading";
export default function Page() {
  return (
    <>
      <PageHeading
        eyebrow="Operations / Appointments"
        title="Make room for better support."
        description="Review sample requests and explore approval, rejection and rescheduling without creating real bookings."
      />
      <AdminAppointments />
    </>
  );
}
