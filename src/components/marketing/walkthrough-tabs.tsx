"use client";
import { useRef, useState, type ReactNode } from "react";
export function WalkthroughTabs({
  items,
}: {
  items: {
    id: string;
    label: string;
    description: string;
    content: ReactNode;
  }[];
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <div className="cc-walkthrough-grid">
      <div>
        <div
          className="cc-walkthrough-tabs"
          role="tablist"
          aria-label="Product walkthrough"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => {
                buttons.current[index] = element;
              }}
              id={`tour-tab-${item.id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`tour-panel-${item.id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                const key = event.key;
                if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(key))
                  return;
                event.preventDefault();
                const next =
                  key === "Home"
                    ? 0
                    : key === "End"
                      ? items.length - 1
                      : (active +
                          (key === "ArrowRight" ? 1 : -1) +
                          items.length) %
                        items.length;
                setActive(next);
                buttons.current[next]?.focus();
              }}
            >
              <span>0{index + 1}</span>
              {item.label}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <p className="cc-copy cc-walkthrough-description">
          {items[active].description}
        </p>
        <p className="cc-note">
          Select a view to explore the intended experience. These illustrations
          do not open the student or admin application.
        </p>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`tour-panel-${item.id}`}
            aria-labelledby={`tour-tab-${item.id}`}
            hidden={active !== index}
            tabIndex={0}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
