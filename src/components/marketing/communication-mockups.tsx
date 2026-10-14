import { CalendarDays, Bell, Check } from "lucide-react";
import { MockupFrame } from "./workspace-mockup";
export function AppointmentMockup() {
  return (
    <MockupFrame title="appointment coordination">
      <div className="cc-mockup-greeting">
        <div>
          <span className="cc-note">MAKE TIME FOR SUPPORT</span>
          <h3>A conversation starts here.</h3>
          <p>Illustrative schedule · no bookable slots</p>
        </div>
        <CalendarDays size={27} color="#b9a3ff" />
      </div>
      <div
        className="cc-calendar-strip"
        aria-label="Illustrative weekdays, not an availability calendar"
      >
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
          <div key={day} data-selected={index === 2}>
            <span>{day}</span>
            <strong>{10 + index}</strong>
          </div>
        ))}
      </div>
      <div className="cc-mockup-row">
        <div>
          <strong>Student support consultation</strong>
          <small>Example time · 10:00 · requested</small>
        </div>
        <span className="cc-mockup-status">Sample request</span>
      </div>
      <div className="cc-mockup-row">
        <div>
          <strong>Academic guidance</strong>
          <small>Example time · 14:00 · confirmed sample</small>
        </div>
        <Check size={18} color="#c8fa78" />
      </div>
      <div className="cc-mockup-bottom">
        Clearer coordination, without the guesswork.
      </div>
    </MockupFrame>
  );
}
export function NotificationMockup() {
  return (
    <MockupFrame title="notification inbox">
      <div className="cc-mockup-greeting">
        <div>
          <span className="cc-note">THE NEXT STEP, IN VIEW</span>
          <h3>Updates with a little context.</h3>
          <p>Fictional inbox · no messages have been delivered</p>
        </div>
        <Bell size={27} color="#89bfff" />
      </div>
      {[
        {
          title: "An example report moved forward",
          detail: "See where the sample concern stands.",
          tag: "Reports",
        },
        {
          title: "A sample appointment update",
          detail: "Understand the next step in the request.",
          tag: "Appointments",
        },
        {
          title: "Explore a support option",
          detail: "Discover an illustrative student service.",
          tag: "Services",
        },
      ].map((item) => (
        <div className="cc-mockup-row" key={item.title}>
          <span className="cc-notice-dot" />
          <div>
            <strong>{item.title}</strong>
            <small>{item.detail}</small>
          </div>
          <span className="cc-mockup-status">{item.tag}</span>
        </div>
      ))}
      <div className="cc-mockup-bottom">
        A focused place for what needs your attention.
      </div>
    </MockupFrame>
  );
}
