import type { Metadata } from "next";
import "./globals.css";
import "./phase1.css";
import "./phase1-auth.css";
export const metadata: Metadata = {
  title: { default: "CampusCare — Your campus, your community", template: "%s | CampusCare" },
  description: "An independent prototype for student services, campus issue reporting, support and appointments. Not affiliated with Obafemi Awolowo University.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
