import { getPageBySlug } from "@/lib/wp";

export default async function HomePage() {
  const page = await getPageBySlug("home"); // create/edit this page in WP
  if (!page) {
    return (
      <main className="container">
        <h1>Home page not found</h1>
        <p>Create a WordPress page with the slug <code>home</code>.</p>
      </main>
    );
  }
  return (
    <main className="container section-pad">
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <article
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}