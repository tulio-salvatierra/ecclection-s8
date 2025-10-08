// scripts/fetch-artists.js
// Script to fetch artist data from WordPress API and build JSON

const fs = require('fs');
const path = require('path');

// WordPress API configuration
const WP_DOMAIN = process.env.NEXT_PUBLIC_WP_DOMAIN || "ecclection.com";
const WP_PROVIDER = process.env.NEXT_PUBLIC_WP_PROVIDER || "wpcom";

function buildWpUrl(path, params = {}) {
  const cleanPath = String(path).replace(/^\//, "");
  if (WP_PROVIDER === "wpcom") {
    // WordPress.com public API
    const base = `https://public-api.wordpress.com/wp/v2/sites/ecclection.com/pages?slug=home&_embed=1`;
    const u = new URL(base);
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null) continue;
      u.searchParams.append(k, String(v));
    }
    return u.toString();
  } else {
    // Self-hosted fallback
    const base = `https://${WP_DOMAIN}/wp-json/wp/v2/${cleanPath}`;
    const u = new URL(base);
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null) continue;
      u.searchParams.append(k, String(v));
    }
    return u.toString();
  }
}

// Helper function to extract social media links from content
function extractSocialLinks(content) {
  const social = {};
  
  // Extract Instagram
  const instagramMatch = content.match(/instagram[:\s]*@?([a-zA-Z0-9_.]+)/i);
  if (instagramMatch) {
    social.instagram = `@${instagramMatch[1]}`;
  }
  
  // Extract website
  const websiteMatch = content.match(/website[:\s]*(https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
  if (websiteMatch) {
    social.website = websiteMatch[1];
  }
  
  // Extract email
  const emailMatch = content.match(/email[:\s]*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
  if (emailMatch) {
    social.email = emailMatch[1];
  }
  
  return social;
}

// Helper function to extract featured image
function extractFeaturedImage(post) {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return undefined;
}

// Helper function to check if artist is featured
function isFeatured(post) {
  return post.sticky || 
         post.tags?.some((tag) => tag.name?.toLowerCase().includes('featured')) ||
         false;
}

// Helper function to clean HTML content
function cleanHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

async function fetchArtists() {
  try {
    console.log('🎨 Fetching artists from WordPress API...');
    
    // Fetch posts with category "artists"
    const url = buildWpUrl('posts', { 
      categories: 'artists',
      per_page: 20,
      _embed: 1
    });
    
    console.log('📡 API URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    console.log(`📊 Found ${posts.length} artist posts`);
    
    // Transform posts to artist data
    const artists = posts.map((post) => ({
      id: post.id.toString(),
      name: post.title.rendered,
      specialty: cleanHtml(post.excerpt?.rendered) || 'Artist',
      bio: cleanHtml(post.content?.rendered) || '',
      image: extractFeaturedImage(post),
      social: extractSocialLinks(post.content?.rendered || ''),
      featured: isFeatured(post),
      // Additional WordPress data
      slug: post.slug,
      date: post.date,
      modified: post.modified,
      categories: post.categories || [],
      tags: post.tags || []
    }));
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write JSON file
    const outputPath = path.join(outputDir, 'artists.json');
    fs.writeFileSync(outputPath, JSON.stringify(artists, null, 2));
    
    console.log('✅ Successfully created artists.json');
    console.log(`📁 File saved to: ${outputPath}`);
    console.log(`🎯 Processed ${artists.length} artists`);
    
    // Display summary
    const featuredCount = artists.filter(a => a.featured).length;
    const withImages = artists.filter(a => a.image).length;
    const withSocial = artists.filter(a => Object.keys(a.social).length > 0).length;
    
    console.log('\n📈 Summary:');
    console.log(`   • Featured artists: ${featuredCount}`);
    console.log(`   • Artists with images: ${withImages}`);
    console.log(`   • Artists with social links: ${withSocial}`);
    
    return artists;
    
  } catch (error) {
    console.error('❌ Error fetching artists:', error.message);
    
    // Create fallback data
    const fallbackArtists = [
      {
        id: "1",
        name: "Sarah Chen",
        specialty: "Abstract Painting",
        bio: "Sarah creates vibrant abstract works that explore the intersection of color and emotion. Her pieces have been featured in galleries across the city.",
        featured: true,
        social: {
          instagram: "@sarahchenart",
          website: "sarahchen.com"
        },
        slug: "sarah-chen",
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        categories: [],
        tags: []
      },
      {
        id: "2",
        name: "Marcus Rodriguez",
        specialty: "Sculpture & Mixed Media",
        bio: "Marcus combines traditional sculpting techniques with modern materials to create thought-provoking installations that challenge our perceptions.",
        featured: true,
        social: {
          instagram: "@marcussculpts",
          website: "marcusrodriguez.art"
        },
        slug: "marcus-rodriguez",
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        categories: [],
        tags: []
      }
    ];
    
    const outputDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputPath = path.join(outputDir, 'artists.json');
    fs.writeFileSync(outputPath, JSON.stringify(fallbackArtists, null, 2));
    
    console.log('🔄 Created fallback artists.json with sample data');
    console.log(`📁 File saved to: ${outputPath}`);
    
    return fallbackArtists;
  }
}

// Run the script
if (require.main === module) {
  fetchArtists().then(() => {
    console.log('\n🎉 Script completed successfully!');
  }).catch((error) => {
    console.error('💥 Script failed:', error);
    process.exit(1);
  });
}

module.exports = { fetchArtists };
