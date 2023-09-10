const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/online01/index.html',
  '/assets/*',
  '/images/*',
  'https://*.js'
];

// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
            .filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
        );
        })
    );
});