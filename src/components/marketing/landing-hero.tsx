import Link from "next/link";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { StudentMockup } from "./workspace-mockup";
export function LandingHero() {
  return (
    <section className="cc-hero" aria-labelledby="hero-title">
      <div className="cc-container cc-hero-grid">
        <div className="cc-hero-copy">
          <p className="cc-label">A little more care. A better campus.</p>
          <h1 id="hero-title">
            Better campus days.
            <br />
            <em>Connected.</em>
          </h1>
          <p className="cc-lede">
            A better campus experience starts with better connections.
            CampusCare is being designed to make student support more
            accessible, organized and easier to navigate.
          </p>
          <div className="cc-actions">
            <Link className="cc-button" href="/auth/signup">
              Get started <ArrowUpRight size={18} />
            </Link>
            <Link className="cc-button cc-button-secondary" href="/features">
              Explore features
            </Link>
          </div>
          <p className="cc-hero-disclaimer">
            <span />
            Independent OAU-first concept. Registration is a preview.
          </p>
          <a href="#the-problem" className="cc-hero-scroll">
            <ArrowDown size={16} /> Meet a more thoughtful approach
          </a>
        </div>
        <div className="cc-hero-art">
          <div className="cc-orbit" aria-hidden="true" />
          <div className="cc-art-caption">
            <Sparkles size={17} /> More clarity. Less chasing.
          </div>
          <StudentMockup />
          <div className="cc-floating-note">
            <span aria-hidden="true">↗</span>
            <div>
              Made for the moments
              <br />
              <strong>between lectures.</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="cc-container cc-hero-foot">
        <span>DESIGNED AROUND STUDENT LIFE</span>
        <span>Find your way.</span>
        <span>Ask with confidence.</span>
        <span>Know what comes next.</span>
      </div>
    </section>
  );
}
