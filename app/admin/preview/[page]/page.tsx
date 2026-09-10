import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { verifySessionToken, ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";
import { getDraftContent } from "@/lib/content-fetch";
import { AboutContent } from "@/components/pages/AboutContent";

const PAGE_COMPONENTS: Record<string, (content: Record<string, string>) => JSX.Element> = { about: (content) => <AboutContent content={content} /> };

export default async function PreviewPage({ params }: { params: { page: string } }) {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifySessionToken(token)) redirect(`/admin/login?redirect=${encodeURIComponent(`/admin/preview/${params.page}`)}`);
  const renderPage = PAGE_COMPONENTS[params.page];
  if (!renderPage) notFound();
  const content = await getDraftContent(params.page);
  return <div><div className="bg-amber-500 text-black text-center text-sm py-2 font-medium sticky top-0 z-50">Preview mode — showing unpublished draft content, not what visitors currently see</div>{renderPage(content)}</div>;
}