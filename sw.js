self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('sw-cache').then(function(cache) {
        return cache.add('index.html') && cache.add('API.html') && cache.add('voice.html') && cache.add('userInput.html') 
        && cache.add('country-codes-lat-long-alpha3.json') 
        && cache.add('style.css') && cache.add('christmas-tree.png');
      })
    );
  });
   
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });