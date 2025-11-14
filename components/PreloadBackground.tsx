export function PreloadBackground() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Preload background image
            if (!document.querySelector('link[rel="preload"][href="/ecclection-bg.svg"]')) {
              const bgLink = document.createElement('link');
              bgLink.rel = 'preload';
              bgLink.href = '/ecclection-bg.svg';
              bgLink.as = 'image';
              bgLink.type = 'image/svg+xml';
              bgLink.setAttribute('fetchPriority', 'high');
              document.head.insertBefore(bgLink, document.head.firstChild);
            }
            
            // Preload hero video
            if (!document.querySelector('link[rel="preload"][href="/Ecclection_hero.mp4"]')) {
              const videoLink = document.createElement('link');
              videoLink.rel = 'preload';
              videoLink.href = '/Ecclection_hero.mp4';
              videoLink.as = 'video';
              videoLink.type = 'video/mp4';
              videoLink.setAttribute('fetchPriority', 'high');
              document.head.insertBefore(videoLink, document.head.firstChild);
            }
          })();
        `,
      }}
    />
  );
}

