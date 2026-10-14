import {
  ArrowUpRight,
  ClipboardList,
  CalendarDays,
  Bell,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";
export function SolutionSection() {
  return (
    <section id="our-solution" className="cc-section">
      <div className="cc-container cc-split">
        <div
          className="cc-connection-map"
          aria-label="CampusCare connects reporting, services, appointments and updates"
        >
          <div className="cc-connection-center">
            <Compass size={36} />
            <strong>
              One place.
              <br />A clearer path.
            </strong>
            <small>THE CAMPUSCARE CONCEPT</small>
          </div>
          {[
            { icon: ClipboardList, label: "Report with context" },
            { icon: Compass, label: "Discover support" },
            { icon: CalendarDays, label: "Coordinate a visit" },
            { icon: Bell, label: "Follow the updates" },
          ].map((item, index) => (
            <div
              className={`cc-connection-node cc-node-${index}`}
              key={item.label}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <Reveal>
          <p className="cc-label">02 / A more connected approach</p>
          <h2 className="cc-title">
            Less running around.
            <br />
            More moving forward.
          </h2>
          <p className="cc-lede">
            CampusCare brings the journey together: understand your options,
            give your request context, and see what comes next.
          </p>
          <ul className="cc-value-list">
            <li>
              <strong>Convenience</strong>
              <span>Find support information in one organized workspace.</span>
            </li>
            <li>
              <strong>Clarity</strong>
              <span>Understand the steps and the status of a request.</span>
            </li>
            <li>
              <strong>Accountability</strong>
              <span>
                Design clearer handoffs between students and authorized teams.
              </span>
            </li>
          </ul>
          <Link className="cc-text-link" href="/features">
            Get to know the features <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
