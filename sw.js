/* AeroFarm service worker */
const CACHE = "goldenfiber-v1";
const SHELL = [
  "./",
  "./index.html",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./assets/img/logo.webp",
  "./assets/img/logo_nt.webp",
  "./assets/img/hero.webp"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // never cache the manifest: an installed app must see changes to it
  if (url.pathname.endsWith("manifest.webmanifest")) {
    e.respondWith(fetch(new Request(req, { cache: "no-store" })).catch(() => caches.match(req)));
    return;
  }

  // pages: network first, fall back to the cached page when offline
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put("./index.html", copy));
        return r;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // everything else: cache first, then network
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return r;
      }).catch(() => hit))
    );
  }
});
