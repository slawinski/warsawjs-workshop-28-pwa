const CACHE_NAME = 'pwa-1.0.1';

self.addEventListener('install', (evt) => {
  evt.waitUntil(startCaching)
});

async function startCaching() {
  try {
    const cache = await caches.open(CACHE_NAME);
    self.skipWaiting();
    await cache.add('/');
    await cache.add('/*');
  } catch (err)
    {console.log(err)}
}

self.addEventListener('activate', (evt) =>{
  evt.waitUntil(startActivating)
});

async function startActivating() {
  try {
    const keys = await caches.keys();
    const deleted = keys
      .filter(key !== CACHE_NAME)
      .map(key => caches.delete(key));
    return await Promise.all(deleted);
  } catch (err) {
    console.log(err);
  }
}

self.addEventListener('fetch', (evt) => {
  console.log('[sw]', evt.request);
  evt.respondWith(
    () => handleRequest(evt)
  );
});

async function handleRequest(evt) {
  const cache = await caches.open(CACHE_NAME);
  // sprawdz czy isnieje response na request w cache
  const resource = await cache.match(evt.request);

  // nie ma w cache - zwracamy
  if (resouce) {
    return resource;
  }

  // Nie ma Cache - topwrzymy zaputanie http
  const response = await fetch(evt.request)

  //dodajemy do cache
  await cache.put(request, response.clone());

  return response;
}
