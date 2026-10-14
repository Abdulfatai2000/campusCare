import { UserPlus, LayoutDashboard, Compass, Send, Route } from "lucide-react";
const steps = [
  {
    icon: UserPlus,
    title: "Make it yours",
    detail: "Create a verified account when registration opens.",
  },
  {
    icon: LayoutDashboard,
    title: "Find your workspace",
    detail: "Enter a student space organized around your campus.",
  },
  {
    icon: Compass,
    title: "Explore your options",
    detail: "Discover the participating services that fit your needs.",
  },
  {
    icon: Send,
    title: "Start a request",
    detail: "Share the right context when operational services are enabled.",
  },
  {
    icon: Route,
    title: "See what comes next",
    detail: "Follow genuine updates and understand the next step.",
  },
];
export function HowItWorks() {
  return (
    <section id="how-it-works" className="cc-section cc-rule">
      <div className="cc-container">
        <div className="cc-heading-row">
          <div>
            <p className="cc-label">04 / A journey with fewer detours</p>
            <h2 className="cc-title">
              From a question
              <br />
              to a clear next step.
            </h2>
          </div>
          <p className="cc-copy">
            The intended experience, once verified accounts and participating
            service providers are connected.
          </p>
        </div>
        <ol className="cc-journey">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div className="cc-journey-icon">
                <step.icon size={23} />
                <span>0{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <p className="cc-note">
          PLANNED LIVE JOURNEY · Today’s frontend demonstrates these steps with
          fictional examples. Authentication and real requests are not enabled.
        </p>
      </div>
    </section>
  );
}
