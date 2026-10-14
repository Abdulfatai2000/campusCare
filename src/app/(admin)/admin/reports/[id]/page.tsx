import { AdminReportDetail } from "@/components/admin/report-detail";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <AdminReportDetail key={id} id={id} />;
}
