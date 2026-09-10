import { supabaseAdmin } from "./supabase-admin";

export type FieldType = "plain" | "rich";

export type ContentField = {
  id: string;
  page: string;
  section_key: string;
  label: string;
  field_type: FieldType;
  sort_order: number;
  draft_value: string;
  published_value: string;
};

/** Published content for a page, keyed by section_key. Used by public-facing pages. */
export async function getPageContent(page: string): Promise<Record<string, string>> {
  const { data, error } = await supabaseAdmin
    .from("site_content")
    .select("section_key, published_value")
    .eq("page", page);

  if (error) {
    console.error(`Failed to load content for page "${page}":`, error.message);
    return {};
  }

  return Object.fromEntries(data.map((row) => [row.section_key, row.published_value]));
}

/** Draft content for a page, keyed by section_key. Used only by the protected admin preview route. */
export async function getDraftContent(page: string): Promise<Record<string, string>> {
  const { data, error } = await supabaseAdmin
    .from("site_content")
    .select("section_key, draft_value")
    .eq("page", page);

  if (error) {
    console.error(`Failed to load draft content for page "${page}":`, error.message);
    return {};
  }

  return Object.fromEntries(data.map((row) => [row.section_key, row.draft_value]));
}

/** All fields (draft + published) for a page, in display order. Used by the admin edit form. */
export async function getEditableContent(page: string): Promise<ContentField[]> {
  const { data, error } = await supabaseAdmin
    .from("site_content")
    .select("*")
    .eq("page", page)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(`Failed to load editable content for page "${page}":`, error.message);
    return [];
  }

  return data as ContentField[];
}