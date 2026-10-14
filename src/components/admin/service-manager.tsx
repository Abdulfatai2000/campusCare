"use client";
import { useState } from "react";
import { serviceCategories, type AdminService } from "@/data/admin-preview";
import { useAdminPreview } from "./admin-state";
import { ServiceEditor } from "./service-editor";
import {
  ConfirmPreview,
  FilterSelect,
  NoResults,
  PreviewDialog,
  PreviewFeedback,
  SearchField,
  StatusBadge,
} from "./admin-ui";

export function AdminServices() {
  const { services, setServices } = useAdminPreview();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState<AdminService | "new" | null>(null);
  const [detail, setDetail] = useState<AdminService | null>(null);
  const [toggle, setToggle] = useState<AdminService | null>(null);
  const [feedback, setFeedback] = useState("");
  const reset = () => {
    setQuery("");
    setCategory("");
    setStatus("");
  };
  const rows = services.filter(
    (service) =>
      `${service.title} ${service.description}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()) &&
      (!category || service.category === category) &&
      (!status || (service.enabled ? "enabled" : "disabled") === status),
  );
  function save(fields: Omit<AdminService, "id" | "enabled">) {
    if (
      services.some(
        (item) =>
          item.title.toLowerCase() === fields.title.toLowerCase() &&
          (editing === "new" || item.id !== editing?.id),
      )
    )
      return "A sample service already uses this title. Choose another.";
    setServices((current) =>
      editing === "new"
        ? [
            ...current,
            {
              ...fields,
              id: `DEMO-SERVICE-${crypto.randomUUID()}`,
              enabled: false,
            },
          ]
        : current.map((item) =>
            item.id === editing?.id ? { ...item, ...fields } : item,
          ),
    );
    setEditing(null);
    setFeedback("Service saved in local preview. No directory was published.");
  }
  return (
    <>
      <button className="button" onClick={() => setEditing("new")}>
        Add service preview
      </button>
      <div className="admin-toolbar">
        <SearchField
          label="Search services"
          value={query}
          onChange={setQuery}
        />
        <FilterSelect
          label="Category"
          value={category}
          onChange={setCategory}
          options={serviceCategories}
        />
        <FilterSelect
          label="Visibility"
          value={status}
          onChange={setStatus}
          options={["enabled", "disabled"]}
        />
        <button className="button button-outline" onClick={reset}>
          Clear filters
        </button>
      </div>
      <PreviewFeedback>{feedback}</PreviewFeedback>
      <p role="status" className="small muted">
        {rows.length} matching fictional services
      </p>
      {rows.length ? (
        <div className="admin-grid">
          {rows.map((service) => (
            <article className="admin-section" key={service.id}>
              <div className="admin-chart-label">
                <span className="eyebrow">{service.category}</span>
                <StatusBadge value={service.enabled ? "enabled" : "disabled"} />
              </div>
              <h2 style={{ marginTop: 15 }}>{service.title}</h2>
              <p className="muted small">{service.description}</p>
              <p className="muted small">{service.hours}</p>
              <div className="admin-actions">
                <button
                  className="button button-outline"
                  aria-label={`Details for ${service.title}`}
                  onClick={() => setDetail(service)}
                >
                  Details
                </button>
                <button
                  className="button button-outline"
                  aria-label={`Edit ${service.title}`}
                  onClick={() => setEditing(service)}
                >
                  Edit preview
                </button>
                <button
                  className="button button-outline"
                  aria-label={`${service.enabled ? "Disable" : "Enable"} ${service.title}`}
                  onClick={() => setToggle(service)}
                >
                  {service.enabled ? "Disable" : "Enable"} preview
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <NoResults reset={reset} />
      )}
      {editing && (
        <ServiceEditor
          service={editing === "new" ? undefined : editing}
          onClose={() => setEditing(null)}
          onSave={save}
        />
      )}
      {detail && (
        <PreviewDialog title={detail.title} onClose={() => setDetail(null)}>
          <StatusBadge value={detail.enabled ? "enabled" : "disabled"} />
          <dl className="admin-detail-list">
            <dt>Category</dt>
            <dd>{detail.category}</dd>
            <dt>Description</dt>
            <dd>{detail.description}</dd>
            <dt>Example hours</dt>
            <dd>{detail.hours}</dd>
          </dl>
          <p className="notice">
            Fictional service. Provider identity, location, contact details and
            hours have not been verified.
          </p>
        </PreviewDialog>
      )}
      {toggle && (
        <ConfirmPreview
          title={`${toggle.enabled ? "Disable" : "Enable"} this sample service?`}
          detail={`${toggle.title} will change visibility only in this admin preview. Student pages remain separate samples.`}
          onClose={() => setToggle(null)}
          onConfirm={() => {
            setServices((current) =>
              current.map((item) =>
                item.id === toggle.id
                  ? { ...item, enabled: !item.enabled }
                  : item,
              ),
            );
            setFeedback(
              "Sample visibility updated locally. No live service was changed.",
            );
          }}
        />
      )}
    </>
  );
}
