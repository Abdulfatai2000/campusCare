import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function VisionSection() {
  return (
    <section id="our-vision" className="cc-section cc-vision">
      <div className="cc-container">
        <p className="cc-label">08 / A small idea. A wider possibility.</p>
        <div className="cc-vision-grid">
          <h2 className="cc-title">
            Thoughtful technology.
            <br />
            <em>More human campuses.</em>
          </h2>
          <div>
            <p className="cc-lede">
              We imagine a campus where finding support feels natural, progress
              feels visible, and students feel better connected to the people
              who can help.
            </p>
            <p className="cc-copy">
              CampusCare starts with an independent OAU-first concept. The
              longer-term ambition is to learn carefully and create a foundation
              that could serve other institutions through separately authorized
              deployments.
            </p>
            <Link className="cc-text-link" href="/about">
              Read our story <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="cc-vision-signature">
          <span>Built with care in mind.</span>
          <span>
            Independent project. Not affiliated with or endorsed by OAU.
          </span>
        </div>
      </div>
    </section>
  );
}
