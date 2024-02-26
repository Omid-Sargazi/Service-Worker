const version = 1;
let staticName = `staticCache-${version}`;
let dynamicName = `dynamicCache`;
let fontName = "fontCache";
let imgName = "imageCache";
console.log("sw running...");

let assets = ["./", "./skipWating/index.html", "./skipWating/script.js"];

console.log({ self });

self.addEventListener("install", (ev) => {
  console.log(`Version ${version} installed`);
  ev.skipWaiting(
    caches
      .open(staticName)
      .then((cache) => {
        cache.addAll(assets);
      })
      .then(
        () => {
          console.log(`${staticName} has been updated...`);
        },
        (error) => {
          console.log("failed to updated");
        }
      )
  );
});

self.addEventListener("activate", (ev) => {
  console.log("activated");
  ev.skipWaiting(
    caches.keys().then((keys) => {
      keys.filter((key) => key != staticName).map((key) => caches.delete(key));
    })
  );
});

self.addEventListener("fetch", (ev) => {
  console.log(`fetched ${self}`);
});
