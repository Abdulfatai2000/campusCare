"use client";
import Link from "next/link";
import { useState } from "react";
import { useAdminPreview } from "./admin-state";
import {
  FilterSelect,
  NoResults,
  PreviewFeedback,
  SearchField,
  StatusBadge,
} from "./admin-ui";

export function AdminNotifications() {
  const { notifications, setNotifications } = useAdminPreview();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [feedback, setFeedback] = useState("");
  const rows = notifications.filter(
    (item) =>
      `${item.title} ${item.detail}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()) &&
      (!filter || (filter === "unread" ? !item.read : item.read)),
  );
  const unread = notifications.filter((item) => !item.read).length;
  return (
    <>
      <div className="admin-actions">
        <span className="status">{unread} unread examples</span>
        <button
          className="button button-outline"
          disabled={!unread}
          onClick={() => {
            setNotifications((current) =>
              current.map((item) => ({ ...item, read: true })),
            );
            setFeedback("All examples marked as read locally.");
          }}
        >
          Mark all as read
        </button>
      </div>
      <div className="admin-toolbar">
        <SearchField
          label="Search notifications"
          value={query}
          onChange={setQuery}
        />
        <FilterSelect
          label="Read status"
          value={filter}
          onChange={setFilter}
          options={["unread", "read"]}
        />
      </div>
      <PreviewFeedback>{feedback}</PreviewFeedback>
      {rows.length ? (
        <div className="preview-list">
          {rows.map((item) => (
            <article className="admin-section" key={item.id}>
              <div className="admin-chart-label">
                <span className="eyebrow">{item.category}</span>
                <StatusBadge value={item.read ? "read" : "unread"} />
              </div>
              <h2 style={{ marginTop: 14 }}>{item.title}</h2>
              <p className="muted small">{item.detail}</p>
              <div className="admin-actions">
                <Link className="button button-outline" href={item.href}>
                  View related preview
                </Link>
                <button
                  className="button button-outline"
                  onClick={() => {
                    setNotifications((current) =>
                      current.map((notice) =>
                        notice.id === item.id
                          ? { ...notice, read: !notice.read }
                          : notice,
                      ),
                    );
                    setFeedback(
                      `Example marked as ${item.read ? "unread" : "read"} locally.`,
                    );
                  }}
                >
                  Mark as {item.read ? "unread" : "read"}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <NoResults
          reset={() => {
            setQuery("");
            setFilter("");
          }}
        />
      )}
    </>
  );
}
