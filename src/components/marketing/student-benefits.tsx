import { ArrowUpRight, Check, Smartphone } from "lucide-react";
import Link from "next/link";
export function StudentBenefits() {
  return (
    <section id="for-students" className="cc-benefits cc-section">
      <div className="cc-container cc-split">
        <div>
          <p className="cc-label">05 / Designed around your day</p>
          <h2 className="cc-title">
            You have enough
            <br />
            on your timetable.
          </h2>
          <p className="cc-lede">
            Getting support should fit into student life, not get in its way.
            CampusCare is designed to make the small, important things easier to
            navigate.
          </p>
          <div className="cc-benefit-points">
            {[
              "Less confusion about where to start",
              "Easier access to support information",
              "Requests organized in one workspace",
              "Clearer communication and next steps",
              "A comfortable experience on your phone",
              "Better visibility into request progress",
            ].map((text) => (
              <p key={text}>
                <Check size={16} />
                {text}
              </p>
            ))}
          </div>
          <Link className="cc-text-link" href="/about">
            Meet the idea behind CampusCare <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="cc-student-art">
          <div className="cc-student-note">
            For the in-between moments.
            <br />
            <em>And the important ones.</em>
          </div>
          <div className="cc-phone">
            <div className="cc-phone-speaker" />
            <div className="cc-phone-header">
              <Smartphone size={18} />
              <span>CampusCare · sample</span>
            </div>
            <h3>
              Your next step,
              <br />a little clearer.
            </h3>
            <p>Example student workspace</p>
            <div className="cc-phone-tile">
              <span>01</span>
              <strong>Find the right support</strong>
              <small>Explore example services</small>
            </div>
            <div className="cc-phone-tile">
              <span>02</span>
              <strong>Keep things organized</strong>
              <small>See sample request progress</small>
            </div>
            <div className="cc-phone-footer">
              Less searching. More clarity. ↗
            </div>
          </div>
          <span className="cc-student-sticker" aria-hidden="true">
            made for
            <br />
            student life ✳
          </span>
        </div>
      </div>
    </section>
  );
}
