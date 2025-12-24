const CACHE_NAME = 'songsong-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // ⭐️ Next.js local font 캐시
  if (event.request.url.includes('/_next/static/media/')) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return (
          res ||
          fetch(event.request).then((fetchRes) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
    );
  }
});
