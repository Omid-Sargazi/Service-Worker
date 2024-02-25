console.log("sw running...");
////d
console.log({ self });

self.addEventListener("install", (ev) => {
  console.log("installed");
});

self.addEventListener("activate", (ev) => {
  console.log("activated");
});

self.addEventListener("fetch", (ev) => {
  console.log(`fetched ${self}`);
});
