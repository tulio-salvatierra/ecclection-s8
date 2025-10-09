import { getPageBySlug } from "@/lib/wp";
import { extractContentBlocks } from "@/lib/content-parser";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Events } from "@/components/sections/Events";
import { Artists } from "@/components/sections/Artists";
import { Contact } from "@/components/sections/Contact";
import { ContentCard } from "@/components/layouts/ContentCard";

export default async function HomePage() {
  const page = await getPageBySlug("home"); // create/edit this page in WP
  if (!page) {
    return <div>Page not found</div>;
    console.log(page, "page");
  return (
    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "2rem", background: "#222", color: "#fff", borderRadius: "8px" }}>
      {JSON.stringify(page, null, 2)}
    </pre>
  );
  }

  // Extract content blocks from WordPress content
  const contentBlocks = extractContentBlocks(page.html);
  console.log(contentBlocks, "contentBlocks");
  
  // // Separate the first few blocks for featured display
  // const featuredBlocks = contentBlocks.slice(0, 3);
  // const remainingBlocks = contentBlocks.slice(3);
  return (
    <>
      {/* Hero Section */}
      <Hero 
        title={page.title}
        subtitle="Welcome to Ecclection - Where Art Meets Community"
      />

      {/* About Section */}
      <About 
        content="Ecclection is more than just an art space – it's a vibrant community where creativity flourishes, artists connect, and art lovers discover new perspectives."
      />

      {/* Featured Artists Section */}
      <Artists />

      {/* Events Section */}
      <Events />

      {/* WordPress Content Section */}
      {contentBlocks.length > 0 && (
        <section className="container section-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 font-brand mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Stay updated with the latest from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentBlocks.map((block, index) => (
              <ContentCard
                key={block.id}
                content={block}
                variant={block.type === 'image' ? 'image' : block.type === 'quote' ? 'quote' : 'default'}
              />
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <Contact />
    </>
  );
}