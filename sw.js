self.addEventListener('install', function (event) {
    console.log("Service has been installed");
});

self.addEventListener('activate', function (event) {
    console.log("Service has been activated");
});


self.addEventListener('fetch', function (event) {
    console.log("fetch event", event);
});
