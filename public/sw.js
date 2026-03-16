// Minimal service worker - stops 404 for /sw.js (e.g. from extensions or cached registration)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
