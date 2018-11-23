//run is background
var CACHE_NAME = 'todo-app-cache-v1';
var urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/img/feather-sprite.svg'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});