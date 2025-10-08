# WordPress API Scripts

This directory contains scripts to fetch data from your WordPress API and build JSON files for your Next.js application.

## Artists Data Script

The `fetch-artists.js` script connects to your WordPress API and fetches artist data to build a JSON file.

### Usage

```bash
# Run the JavaScript version
npm run fetch-artists

# Run the TypeScript version (requires tsx)
npm run fetch-artists:ts
```

### What it does

1. **Connects to WordPress API** using your configured domain
2. **Fetches posts** from the "artists" category
3. **Extracts data** including:
   - Artist name (post title)
   - Specialty (post excerpt)
   - Bio (post content)
   - Featured image
   - Social media links (Instagram, website, email)
   - Featured status (sticky posts)
4. **Creates JSON file** at `data/artists.json`
5. **Provides fallback data** if WordPress is unavailable

### WordPress Setup Required

1. **Create "artists" category** in WordPress admin
2. **Create artist posts** with this category
3. **Add featured images** to artist posts
4. **Include social media info** in post content:
   ```
   Instagram: @username
   Website: https://example.com
   Email: artist@example.com
   ```

### Environment Variables

The script uses these environment variables:
- `NEXT_PUBLIC_WP_DOMAIN` - Your WordPress domain (default: "ecclection.com")
- `NEXT_PUBLIC_WP_PROVIDER` - "wpcom" for WordPress.com or "self" for self-hosted

### Output

The script creates `data/artists.json` with this structure:

```json
[
  {
    "id": "123",
    "name": "Artist Name",
    "specialty": "Art Medium",
    "bio": "Artist biography...",
    "image": "https://example.com/image.jpg",
    "social": {
      "instagram": "@username",
      "website": "https://example.com",
      "email": "artist@example.com"
    },
    "featured": true,
    "slug": "artist-name",
    "date": "2024-01-01T00:00:00",
    "modified": "2024-01-01T00:00:00",
    "categories": [1, 2],
    "tags": [3, 4]
  }
]
```

### Error Handling

- If WordPress API is unavailable, creates fallback data
- Logs detailed error information
- Always creates a valid JSON file

### Integration

The generated JSON can be imported into your Next.js components:

```typescript
import artistsData from '../data/artists.json';

// Use in your component
const artists = artistsData as Artist[];
```
