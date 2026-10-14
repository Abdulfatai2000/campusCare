import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Compass, Sprout } from "lucide-react";
import { VisionSection } from "@/components/marketing/vision-section";
import { ClosingCta } from "@/components/marketing/closing-cta";
export const metadata: Metadata = {
  title: "Our story — thoughtful technology for campus life",
  description:
    "Meet the independent OAU-first CampusCare concept, its student-focused design principles and its vision for more connected campus support.",
};
export default function AboutPage() {
  return (
    <>
      <section className="cc-section cc-container">
        <p className="cc-label">Our story / Why CampusCare</p>
        <div className="cc-split">
          <div>
            <h1 className="cc-title">
              Good technology
              <br />
              starts with
              <br />
              <em>a little care.</em>
            </h1>
            <p className="cc-lede">
              CampusCare is built around a simple idea: finding support should
              be easier to understand, and asking for it should feel less
              complicated.
            </p>
          </div>
          <div className="cc-about-quote">
            <HeartHandshake size={55} strokeWidth={1.2} />
            <blockquote>
              “What if campus support felt a little more connected?”
            </blockquote>
            <p>
              The question guiding this project — not a student testimonial.
            </p>
          </div>
        </div>
      </section>
      <section className="cc-section cc-rule cc-container">
        <div className="cc-split">
          <div>
            <p className="cc-label">The starting point</p>
            <h2 className="cc-title">
              One campus context.
              <br />
              Many everyday moments.
            </h2>
          </div>
          <div>
            <p className="cc-lede">
              A broken facility. An unanswered question. A visit that needs
              coordinating. These ordinary moments shape how supported a student
              can feel.
            </p>
            <p className="cc-copy">
              CampusCare began as a mobile-development exercise and is growing
              into a full-stack product concept. Its first design context is
              Obafemi Awolowo University, Ile-Ife. That context is inspiration,
              not institutional authorization.
            </p>
            <p className="cc-copy">
              The current frontend explores student and administrator journeys
              with fictional information. Real authentication, verified
              providers and secure operational workflows are still ahead.
            </p>
            <Link className="cc-text-link" href="/features">
              See the product direction <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="cc-section cc-container cc-rule">
        <p className="cc-label">What guides the work</p>
        <h2 className="cc-title">Useful. Thoughtful. Human.</h2>
        <div className="cc-about-values">
          {[
            {
              icon: Compass,
              title: "Clarity over complexity",
              detail:
                "Make the next step understandable. Give each screen a clear purpose and explain what is actually available.",
            },
            {
              icon: HeartHandshake,
              title: "Respect the person",
              detail:
                "Consider the time, attention and privacy of the person behind each question or request.",
            },
            {
              icon: Sprout,
              title: "Grow responsibly",
              detail:
                "Verify information, learn from feedback and establish trust before expanding into real campus operations.",
            },
          ].map((item) => (
            <article key={item.title}>
              <item.icon size={27} />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <VisionSection />
      <ClosingCta />
    </>
  );
}
