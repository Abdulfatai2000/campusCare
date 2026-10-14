import { WalkthroughTabs } from "./walkthrough-tabs";
import { StudentMockup } from "./workspace-mockup";
import { TrackingMockup } from "./tracking-mockup";
import { AppointmentMockup, NotificationMockup } from "./communication-mockups";
import { AdminMockup } from "./admin-mockup";
export function ProductWalkthrough() {
  return (
    <section id="product-tour" className="cc-section cc-tour">
      <div className="cc-container">
        <div className="cc-heading-row">
          <div>
            <p className="cc-label">07 / Take a closer look</p>
            <h2 className="cc-title">
              A thoughtful experience.
              <br />
              From the first screen.
            </h2>
          </div>
          <p className="cc-copy">
            Step inside the idea. Explore five illustrative views of the product
            we’re building.
          </p>
        </div>
        <WalkthroughTabs
          items={[
            {
              id: "student",
              label: "Student workspace",
              description:
                "A central overview that connects support options, sample requests and your next steps.",
              content: <StudentMockup />,
            },
            {
              id: "tracking",
              label: "Report tracking",
              description:
                "A readable timeline that makes request progress easier to understand, with illustrative status updates.",
              content: <TrackingMockup />,
            },
            {
              id: "appointments",
              label: "Appointments",
              description:
                "An example of how students could coordinate time with participating providers. No real slots are available here.",
              content: <AppointmentMockup />,
            },
            {
              id: "notifications",
              label: "Notifications",
              description:
                "A focused sample inbox for relevant updates, with context about what changed and why it matters.",
              content: <NotificationMockup />,
            },
            {
              id: "admin",
              label: "Team overview",
              description:
                "An illustrative view for future authorized support teams. No institutional records or real staff accounts are shown.",
              content: <AdminMockup />,
            },
          ]}
        />
      </div>
    </section>
  );
}
