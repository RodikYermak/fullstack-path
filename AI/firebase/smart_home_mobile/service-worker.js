self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activate');
});

self.addEventListener('fetch', (e) => {
    // Let the browser handle the request normally
});
