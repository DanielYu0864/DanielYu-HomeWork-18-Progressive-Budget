const CACHE_FILES = [
  '/',
  '/index.html',
  '/styles.css',
  '/index.js',
  '/dist/manifest.json',
  '/dist/assets/icons/icon-192x192.png',
  '/dist/assets/icons/icon-512x512.png',
  // 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
  // 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
];

const CACHE_NAME = "static-cache-v2";
const DATA_NAME = "data-cache-v1";

// install
self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(CACHE_FILES);
    })
  );

  self.skipWaiting();
});
self.addEventListener('fatch')
