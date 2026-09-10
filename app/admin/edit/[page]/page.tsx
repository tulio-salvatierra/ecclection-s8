import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { verifySessionToken, ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";
import { getEditableContent } from "@/lib/content-fetch";
import { EditForm } from "./EditForm";

const VALID_PAGES = ["about"];

export default async function EditPage({ params }: { params: { page: string } }) {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifySessionToken(token)) redirect(`/admin/login?redirect=${encodeURIComponent(`/admin/edit/${params.page}`)}`);
  if (!VALID_PAGES.includes(params.page)) notFound();
  const fields = await getEditableContent(params.page);
  return <EditForm page={params.page} initialFields={fields} />;
}