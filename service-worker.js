const CACHE_NAME = 'anki-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/src/core/cardManager.js',
    '/src/core/gameFlow.js',
    '/src/database/dbManager.js',
    '/src/events/eventHandlers.js',
    '/src/i18n/translations.js',
    '/src/i18n/en.js',
    '/src/i18n/ja.js',
    '/src/i18n/zh-cn.js',
    '/src/io/fileOperations.js',
    '/src/ui/uiHelpers.js',
    '/src/utils/algorithms.js',
    '/lib/sql.js/sql-wasm.js',
    '/lib/sql.js/sql-wasm.wasm',
    '/icon.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        // Network first, fallback to cache (for HTML/JS/CSS)
        fetch(event.request)
            .then(response => {
                // Clone the response before caching
                const responseToCache = response.clone();

                // Update cache with fresh content
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            })
            .catch(() => {
                // If network fails, use cache
                return caches.match(event.request).then(response => {
                    return response || caches.match('/index.html');
                });
            })
    );
});

// Notify clients when new version is available
self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});