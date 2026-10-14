"use client";
import { useState, type FormEvent } from "react";
import type {
  AdminAppointment,
  AdminAppointmentStatus,
} from "@/data/admin-preview";
import { useAdminPreview } from "./admin-state";
import {
  ConfirmPreview,
  DataTable,
  FilterSelect,
  NoResults,
  PreviewDialog,
  PreviewFeedback,
  SearchField,
  StatusBadge,
} from "./admin-ui";

function AppointmentEditor({
  appointment,
  onClose,
  onUpdate,
}: {
  appointment: AdminAppointment;
  onClose: () => void;
  onUpdate: (update: Partial<AdminAppointment>, message: string) => void;
}) {
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [error, setError] = useState("");
  const [decision, setDecision] = useState<AdminAppointmentStatus | null>(null);
  const { appointments } = useAdminPreview();
  function reschedule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date || !time || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      setError("Choose a valid example date and time.");
      return;
    }
    if (
      appointments.some(
        (item) =>
          item.id !== appointment.id &&
          item.service === appointment.service &&
          item.date === date &&
          item.time === time &&
          item.status !== "rejected",
      )
    ) {
      setError(
        "This sample slot is already occupied. Choose another example time.",
      );
      return;
    }
    onUpdate(
      { date, time },
      "Rescheduled locally. No real slot was reserved and no notification was sent.",
    );
  }
  return (
    <PreviewDialog title="Appointment detail preview" onClose={onClose}>
      <dl className="admin-detail-list">
        <dt>Request</dt>
        <dd>{appointment.id}</dd>
        <dt>Person</dt>
        <dd>{appointment.person}</dd>
        <dt>Service</dt>
        <dd>{appointment.service}</dd>
        <dt>Status</dt>
        <dd>
          <StatusBadge value={appointment.status} />
        </dd>
        <dt>Example reason</dt>
        <dd>{appointment.reason}</dd>
      </dl>
      <p className="notice">
        Sample schedule only. These are not real requests or bookable slots.
      </p>
      {appointment.status !== "completed" && (
        <>
          <div className="admin-actions">
            <button
              className="button"
              disabled={appointment.status === "confirmed"}
              onClick={() => setDecision("confirmed")}
            >
              Approve preview
            </button>
            <button
              className="button button-outline"
              disabled={appointment.status === "rejected"}
              onClick={() => setDecision("rejected")}
            >
              Reject preview
            </button>
          </div>
          <h3>Reschedule preview</h3>
          <form className="form-grid" onSubmit={reschedule}>
            <label className="field">
              Example date
              <input
                type="date"
                required
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setError("");
                }}
              />
            </label>
            <label className="field">
              Example time (sample campus local time)
              <select
                required
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                  setError("");
                }}
              >
                {["09:00", "10:00", "11:00", "14:00", "15:00"].map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </label>
            {error && (
              <p role="alert" className="admin-error">
                {error}
              </p>
            )}
            <button
              className="button button-outline"
              disabled={date === appointment.date && time === appointment.time}
            >
              Save reschedule preview
            </button>
          </form>
        </>
      )}
      {appointment.status === "completed" && (
        <p className="muted">This completed example is read-only.</p>
      )}
      {decision && (
        <ConfirmPreview
          title={
            decision === "confirmed"
              ? "Approve this example?"
              : "Reject this example?"
          }
          detail={`Update ${appointment.id} to ${decision} in the sample list.`}
          onClose={() => setDecision(null)}
          onConfirm={() =>
            onUpdate(
              { status: decision },
              `Appointment ${decision} in local preview only. No booking or message was created.`,
            )
          }
        />
      )}
    </PreviewDialog>
  );
}
export function AdminAppointments() {
  const { appointments, setAppointments } = useAdminPreview();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const reset = () => {
    setQuery("");
    setStatus("");
    setService("");
  };
  const rows = appointments
    .filter(
      (item) =>
        `${item.id} ${item.person} ${item.service}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()) &&
        (!status || item.status === status) &&
        (!service || item.service === service),
    )
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  const appointment = appointments.find((item) => item.id === selected);
  function update(change: Partial<AdminAppointment>, message: string) {
    setAppointments((current) =>
      current.map((item) =>
        item.id === selected ? { ...item, ...change } : item,
      ),
    );
    setSelected(null);
    setFeedback(message);
  }
  return (
    <>
      <div className="admin-toolbar">
        <SearchField
          label="Search appointments"
          value={query}
          onChange={setQuery}
        />
        <FilterSelect
          label="Status"
          value={status}
          onChange={setStatus}
          options={["requested", "confirmed", "rejected", "completed"]}
        />
        <FilterSelect
          label="Service"
          value={service}
          onChange={setService}
          options={[...new Set(appointments.map((item) => item.service))]}
        />
        <button className="button button-outline" onClick={reset}>
          Clear filters
        </button>
      </div>
      <PreviewFeedback>{feedback}</PreviewFeedback>
      <p className="small muted" role="status">
        {rows.length} matching example appointments
      </p>
      {rows.length ? (
        <DataTable
          caption="Fictional appointment requests · sorted by example date"
          headings={[
            "Request",
            "Service",
            "Example schedule",
            "Status",
            "Details",
          ]}
        >
          {rows.map((item) => (
            <tr key={item.id}>
              <td>
                <strong>{item.person}</strong>
                <div className="small muted">{item.id}</div>
              </td>
              <td>{item.service}</td>
              <td>
                {item.date} · {item.time}
              </td>
              <td>
                <StatusBadge value={item.status} />
              </td>
              <td>
                <button
                  className="button button-outline"
                  aria-label={`View ${item.id}`}
                  onClick={() => setSelected(item.id)}
                >
                  View request
                </button>
              </td>
            </tr>
          ))}
        </DataTable>
      ) : (
        <NoResults reset={reset} />
      )}
      <section className="admin-section" style={{ marginTop: 24 }}>
        <h2>Illustrative availability</h2>
        <p className="muted">
          Example sessions: 09:00, 10:00, 11:00, 14:00 and 15:00 in sample
          campus local time. Rescheduling checks conflicts only within this
          fictional dataset.
        </p>
        <p className="notice">
          Real provider hours, time zones, capacity and booking availability
          must be verified by the backend.
        </p>
      </section>
      {appointment && (
        <AppointmentEditor
          key={appointment.id}
          appointment={appointment}
          onClose={() => setSelected(null)}
          onUpdate={update}
        />
      )}
    </>
  );
}
