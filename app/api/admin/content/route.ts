import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken, ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

type Update = { id: string; draft_value: string };

export async function POST(request: NextRequest) {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifySessionToken(token)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null);
  const action = body?.action;
  const updates: Update[] = body?.updates;
  if ((action !== "save" && action !== "publish") || !Array.isArray(updates)) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  for (const update of updates) {
    if (typeof update.id !== "string" || typeof update.draft_value !== "string") return NextResponse.json({ error: "Invalid update entry" }, { status: 400 });
    const { error } = await supabaseAdmin.from("site_content").update({ draft_value: update.draft_value, updated_at: new Date().toISOString() }).eq("id", update.id);
    if (error) { console.error("Failed to save draft for", update.id, error.message); return NextResponse.json({ error: "Failed to save draft" }, { status: 500 }); }
  }
  if (action === "save") return NextResponse.json({ ok: true });
  for (const update of updates) {
    const { error: publishError } = await supabaseAdmin.from("site_content").update({ published_value: update.draft_value }).eq("id", update.id);
    if (publishError) { console.error("Failed to publish", update.id, publishError.message); return NextResponse.json({ error: "Failed to publish" }, { status: 500 }); }
    const { error: revisionError } = await supabaseAdmin.from("content_revisions").insert({ content_id: update.id, value: update.draft_value });
    if (revisionError) console.error("Failed to log revision for", update.id, revisionError.message);
  }
  return NextResponse.json({ ok: true });
}