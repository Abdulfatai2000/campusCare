import { FaqSection } from "@/components/marketing/faq-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { VisionSection } from "@/components/marketing/vision-section";
import { ProductWalkthrough } from "@/components/marketing/product-walkthrough";
import { CoordinationSection } from "@/components/marketing/coordination-section";
import { StudentBenefits } from "@/components/marketing/student-benefits";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { SolutionSection } from "@/components/marketing/solution-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import type { Metadata } from "next";
import { LandingHero } from "@/components/marketing/landing-hero";
export const metadata: Metadata = { title: "A better connected campus experience", description: "Discover CampusCare, an independent student-support concept connecting issue reporting, services, appointments and clearer communication. Explore the frontend preview." };
export default function HomePage() {
  return <><LandingHero /><ProblemSection /><SolutionSection /><FeatureShowcase /><HowItWorks /><StudentBenefits /><CoordinationSection /><ProductWalkthrough /><VisionSection /><TrustSection /><FaqSection />{/* landing sections */}</>;
}