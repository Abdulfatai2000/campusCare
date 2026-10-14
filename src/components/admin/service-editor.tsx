"use client";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { serviceCategories, type AdminService } from "@/data/admin-preview";
import { PreviewDialog } from "./admin-ui";

const serviceSchema = z.object({ title: z.string().trim().min(3).max(80), description: z.string().trim().min(15).max(500), category: z.enum(["Wellbeing", "Campus life", "Facilities", "Academics"]), hours: z.string().trim().min(5).max(100) });
export function ServiceEditor({ service, onClose, onSave }: { service?: AdminService; onClose: () => void; onSave: (fields: Omit<AdminService, "id" | "enabled">) => string | void }) {
  const [title, setTitle] = useState(service?.title ?? "");
  const [description, setDescription] = useState(service?.description ?? "");
  const [category, setCategory] = useState(service?.category ?? serviceCategories[0]);
  const [hours, setHours] = useState(service?.hours ?? "");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = serviceSchema.safeParse({ title, description, category, hours });
    if (!parsed.success) { setError("Use a title of 3–80 characters, description of 15–500 characters, listed category and sample hours of 5–100 characters. Blank spaces alone are not valid."); return; }
    const result = onSave(parsed.data);
    if (result) setError(result);
  }
  return <PreviewDialog title={service ? "Edit service preview" : "Add service preview"} onClose={onClose}><p className="notice">Fictional information only. No provider is created or contacted. New examples start disabled.</p><form className="form-grid" onSubmit={submit} style={{ marginTop: 20 }}><label className="field">Service title<input value={title} onChange={event => setTitle(event.target.value)} required minLength={3} maxLength={80} /></label><label className="field">Service category<select value={category} onChange={event => setCategory(event.target.value)}>{serviceCategories.map(item => <option key={item}>{item}</option>)}</select></label><label className="field">Example description<textarea value={description} onChange={event => setDescription(event.target.value)} required minLength={15} maxLength={500} /></label><label className="field">Example opening hours<input value={hours} onChange={event => setHours(event.target.value)} placeholder="Example weekdays, 09:00–16:00" required minLength={5} maxLength={100} /></label>{error && <p role="alert" className="admin-error">{error}</p>}<div className="admin-actions"><button type="button" className="button button-outline" onClick={onClose}>Cancel</button><button className="button">Save service preview</button></div></form></PreviewDialog>;
}
