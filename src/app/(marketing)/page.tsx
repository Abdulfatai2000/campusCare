import type { Metadata } from "next";
import { LandingHero } from "@/components/marketing/landing-hero";
export const metadata: Metadata = { title: "A better connected campus experience", description: "Discover CampusCare, an independent student-support concept connecting issue reporting, services, appointments and clearer communication. Explore the frontend preview." };
export default function HomePage() {
  return <><LandingHero />{/* landing sections */}</>;
}