"use client";
import { useState } from "react";
import { useAdminPreview } from "./admin-state";
import { PreviewFeedback } from "./admin-ui";

export function AdminSettings() {
  const state = useAdminPreview();
  const [feedback, setFeedback] = useState("");
  function setTheme(theme: "dark" | "light") {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("campuscare-theme", theme);
    } catch {
      /* Theme still works without storage. */
    }
    window.dispatchEvent(new Event("campuscare-theme-change"));
    setFeedback(
      `${theme === "dark" ? "Dark" : "Light"} appearance applied on this device.`,
    );
  }
  return (
    <>
      <div className="admin-grid">
        <section className="admin-section">
          <h2>Admin profile preview</h2>
          <dl className="admin-detail-list">
            <dt>Display name</dt>
            <dd>Example administrator</dd>
            <dt>Workspace</dt>
            <dd>Fictional campus operations</dd>
            <dt>Identity</dt>
            <dd>No account is signed in</dd>
          </dl>
          <p className="notice">
            This is a fixed fictional profile. Profile editing and identity
            verification await secure backend integration.
          </p>
        </section>
        <section className="admin-section">
          <h2>Appearance</h2>
          <p className="muted small">
            Choose the shared CampusCare theme. This device preference may be
            stored locally.
          </p>
          <div className="admin-actions">
            <button
              className="button button-outline"
              onClick={() => setTheme("light")}
            >
              Use light theme
            </button>
            <button
              className="button button-outline"
              onClick={() => setTheme("dark")}
            >
              Use dark theme
            </button>
          </div>
        </section>
        <section className="admin-section">
          <h2>Dashboard preferences</h2>
          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={state.compact}
              onChange={(event) => state.setCompact(event.target.checked)}
            />
            Compact table rows
          </label>
          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={state.showActivity}
              onChange={(event) => state.setShowActivity(event.target.checked)}
            />
            Show recent sample activity on overview
          </label>
          <p className="muted small">
            These preferences apply to this admin session and reset on reload.
          </p>
        </section>
        <section className="admin-section">
          <h2>Accessibility</h2>
          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={state.reduceMotion}
              onChange={(event) => state.setReduceMotion(event.target.checked)}
            />
            Reduce motion in the admin workspace
          </label>
          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={state.largeText}
              onChange={(event) => state.setLargeText(event.target.checked)}
            />
            Larger interface text
          </label>
          <p className="muted small">
            System reduced-motion preferences are always respected. Keyboard
            focus indicators remain visible in both themes.
          </p>
        </section>
      </div>
      <PreviewFeedback>{feedback}</PreviewFeedback>
      <button
        className="button button-outline"
        onClick={() => {
          state.setCompact(false);
          state.setShowActivity(true);
          state.setReduceMotion(false);
          state.setLargeText(false);
          setFeedback(
            "Admin display preferences reset locally. Your theme choice is unchanged.",
          );
        }}
      >
        Reset admin display preferences
      </button>
      <section className="admin-section" style={{ marginTop: 24 }}>
        <h2>Security and privacy</h2>
        <p className="muted">
          No authentication, permissions or security policies are enforced by
          this frontend preview. Opening an admin route does not grant
          administrative authority. Do not enter real student or staff
          information.
        </p>
        <p className="muted">
          Real administration requires server-side identity verification,
          campus-scoped authorization, audit records, retention policies and
          secure sessions. Sample UI state is held in memory and discarded on
          reload.
        </p>
        <fieldset
          disabled
          className="admin-actions"
          style={{ border: 0, padding: 0 }}
        >
          <legend className="small muted">
            Unavailable until backend integration
          </legend>
          <button className="button button-outline">Change password</button>
          <button className="button button-outline">
            Configure permissions
          </button>
        </fieldset>
      </section>
    </>
  );
}
