const cacheVersion = "v2";

const addToCache = async resources => {
  const cache = await caches.open(cacheVersion);
  await cache.add(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open(cacheVersion);
  await cache.put(request, response);
};

const cacheFirst = async request => {
  if (request.url.includes("chrome-extension")) {
    return fetch(request);
  }
  const cachedResponse = await caches.match(request);
  if (cachedResponse) return cachedResponse;
  const networkResponse = await fetch(request);
  putInCache(request, networkResponse.clone());
  return networkResponse;
};

const deleteOldCache = async key => {
  await caches.delete(key);
};

const deleteCaches = async () => {
  const cachesToKeep = [cacheVersion];
  const keys = await caches.keys();
  const filteredKeys = keys.filter(key => !cachesToKeep.includes(key));
  await Promise.all(filteredKeys.map(deleteOldCache));
};

self.addEventListener("activate", event => {
  event.waitUntil(deleteCaches());
});

self.addEventListener("install", event => {
  event.waitUntil(addToCache(["/http-diagram.png"]));
});

self.addEventListener("fetch", event => {
  event.respondWith(cacheFirst(event.request));
});
