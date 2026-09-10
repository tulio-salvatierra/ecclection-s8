"use client";

import { useState } from "react";
import { RichText } from "@/lib/content-render";
import type { ContentField } from "@/lib/content-fetch";

export function EditForm({ page, initialFields }: { page: string; initialFields: ContentField[] }) {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  function updateValue(id: string, value: string) { setFields((prev) => prev.map((f) => f.id === id ? { ...f, draft_value: value } : f)); }
  async function handleAction(action: "save" | "publish") {
    setSaving(true); setStatus("");
    try {
      const res = await fetch("/api/admin/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, updates: fields.map((f) => ({ id: f.id, draft_value: f.draft_value })) }) });
      if (!res.ok) { const body = await res.json().catch(() => ({})); throw new Error(body.error || `Request failed (${res.status})`); }
      if (action === "publish") { setFields((prev) => prev.map((f) => ({ ...f, published_value: f.draft_value }))); setStatus(`Published — live on ecclection.com/${page}`); } else setStatus("Draft saved");
    } catch (err) { setStatus(err instanceof Error ? `Error: ${err.message}` : "Something went wrong"); }
    finally { setSaving(false); setTimeout(() => setStatus(""), 4000); }
  }
  const hasUnpublishedChanges = fields.some((f) => f.draft_value !== f.published_value);
  return <div className="min-h-screen bg-neutral-950 text-white"><header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between sticky top-0 bg-neutral-950 z-10"><h1 className="font-brand text-lg">Editing: <span className="text-cyan-500">/{page}</span></h1><div className="flex items-center gap-3">{status && <span className="text-sm text-neutral-400">{status}</span>}<a href={`/admin/preview/${page}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-neutral-700 text-sm hover:bg-neutral-900 transition-colors">Preview full page ↗</a><button onClick={() => handleAction("save")} disabled={saving} className="px-4 py-2 rounded border border-neutral-700 text-sm hover:bg-neutral-900 disabled:opacity-50 transition-colors">Save draft</button><button onClick={() => handleAction("publish")} disabled={saving} className="px-4 py-2 rounded bg-cyan-600 text-black text-sm font-medium hover:bg-cyan-500 disabled:opacity-50 transition-colors">Publish</button></div></header>{hasUnpublishedChanges && <div className="px-6 py-2 bg-amber-950 border-b border-amber-900 text-amber-300 text-sm">You have unsaved or unpublished changes below.</div>}<div className="grid md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto"><div className="space-y-6">{fields.map((field) => { const isLong = field.field_type === "rich" || field.draft_value.length > 80; const changed = field.draft_value !== field.published_value; return <div key={field.id}><label className="block text-sm text-neutral-400 mb-1">{field.label}{changed && <span className="ml-2 text-xs text-amber-400">unpublished changes</span>}</label>{field.field_type === "rich" && <p className="text-xs text-neutral-500 mb-1">**bold**, *italic*, blank line = new paragraph</p>}{isLong ? <textarea value={field.draft_value} onChange={(e) => updateValue(field.id, e.target.value)} rows={field.field_type === "rich" ? 8 : 3} className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-700 text-sm font-mono focus:border-cyan-500 outline-none" /> : <input type="text" value={field.draft_value} onChange={(e) => updateValue(field.id, e.target.value)} className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-700 text-sm focus:border-cyan-500 outline-none" />}</div>; })}</div><div className="md:sticky md:top-20 self-start"><p className="text-xs text-neutral-500 mb-2">Live preview (reading order — not the exact page layout; use &quot;Preview full page&quot; above, after saving, to see it exactly as it&apos;ll look live)</p><div className="bg-black rounded-lg p-6 border border-neutral-800 space-y-4">{fields.map((field) => <div key={field.id} className="text-neutral-200 text-sm leading-relaxed">{field.field_type === "rich" ? <RichText value={field.draft_value} /> : <p>{field.draft_value}</p>}</div>)}</div></div></div></div>;
}