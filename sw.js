/* Cuaderno de Frases — funcionamiento sin conexión.
   Guarda la aplicación y las fuentes en la caché del navegador. */
const CACHE = 'cuaderno-v5';
const CORE = ['./', './index.html', './manifest.webmanifest', './icono.png', './icono-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) {
      // refresca en segundo plano sin bloquear
      fetch(req).then(r => { if (r && r.ok) caches.open(CACHE).then(c => c.put(req, r.clone())); }).catch(() => {});
      return cached;
    }
    try {
      const res = await fetch(req);
      if (res && res.ok && (new URL(req.url).origin === location.origin
          || /fonts\.(googleapis|gstatic)\.com/.test(req.url))) {
        const c = await caches.open(CACHE); c.put(req, res.clone());
      }
      return res;
    } catch (err) {
      const fb = await caches.match('./index.html');
      if (fb) return fb;
      throw err;
    }
  })());
});
