export function PreloadBackground() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (!document.querySelector('link[rel="preload"][href="/ecclection-bg.svg"]')) {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.href = '/ecclection-bg.svg';
              link.as = 'image';
              link.type = 'image/svg+xml';
              link.setAttribute('fetchPriority', 'high');
              document.head.insertBefore(link, document.head.firstChild);
            }
          })();
        `,
      }}
    />
  );
}

