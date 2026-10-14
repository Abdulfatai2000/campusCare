import { AdminReportDirectory } from "@/components/admin/report-directory";
import { PageHeading } from "@/components/shared/page-heading";
export default function Page() {
  return (
    <>
      <PageHeading
        eyebrow="Operations / Reports"
        title="Every concern deserves attention."
        description="Search fictional reports, explore details and try a local review workflow."
      />
      <AdminReportDirectory />
    </>
  );
}
