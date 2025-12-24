const CACHE_NAME = 'songsong-v1';

const PRECACHE_IMAGES = [
  '/images/main.png',
  '/images/money.png',
  '/images/work.png',
  '/images/love.png',
  '/images/friends.png',
  '/images/relax.png',
];

// 1️⃣ install: 이미지 precache + 즉시 활성화
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_IMAGES);
      })
      .then(() => self.skipWaiting())
  );
});

// 2️⃣ activate: 즉시 컨트롤
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 3️⃣ fetch: 폰트 + 이미지 + 기본 캐시
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = req.url;

  // Next.js local font / static media
  if (url.includes('/_next/static/media/')) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // 이미지 요청
  if (req.destination === 'image') {
    event.respondWith(cacheFirst(req));
    return;
  }
});

// 공통 cache-first 전략
async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;

  const res = await fetch(req);
  const cache = await caches.open(CACHE_NAME);
  cache.put(req, res.clone());
  return res;
}
