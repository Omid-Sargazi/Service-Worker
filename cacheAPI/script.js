const APP = {
  cacheName: "CacheTest1",
  SW: null,
  init() {
    // APP.startCaching();
    document.querySelector("h2").addEventListener("click", APP.deleteCache);
  },
  startCaching() {
    caches
      .open(APP.cacheName)
      .then((cache) => {
        console.log(`Cache ${APP.cacheName} opened...`);

        let urlString = "../image/1.jpg?id=one";
        cache.add(urlString);

        let url = new URL("http://127.0.0.1:5502/image/2.jpg?id=two");
        cache.add(url);

        let req = new Request("../image/3.jpg?id=three");
        cache.add(req);

        cache.keys().then((keys) => {
          keys.forEach((id, key) => {
            // console.log(id, key);
          });
        });

        return cache;
      })
      .then((cache) => {
        caches.has(APP.cacheName).then((hasCache) => {
          //   console.log(`${APP.cacheName} ${hasCache}`);
        });

        // search for files in caches
        // cache.match() cache.matchAll()
        // caches.match() - look in all caches

        let urlString = "../image/4.jpg?id=one";
        caches
          .match(urlString)
          .then((cacheResponse) => {
            if (
              cacheResponse &&
              cacheResponse.status < 400 &&
              cacheResponse.headers.has("content-type") &&
              cacheResponse.headers.get("content-type").match(/^image\//i)
            ) {
              console.log("found in the cache");
              return cacheResponse;
            } else {
              console.log("not in cache");
              fetch(urlString).then((fetchResponse) => {
                if (!fetchResponse.ok) throw fetchResponse.statusText;
                cache.put(urlString, fetchResponse.clone());
                return fetchResponse;
              });
            }
          })
          .then((response) => {
            console.log(response);
            document.querySelector("main").textContent = response.url;
            return response.blob();
          })
          .then((blob) => {
            let url = URL.createObjectURL(blob);
            let img = document.createElement("img");
            img.src = url;
            document.querySelector("main").append(img);
          });
      });
  },
  deleteCache() {
    // caches
    //   .open(this.cacheName)
    //   .then((cache) => {
    //     let url = "../image/3.jpg?id=three";
    //     cache.delete(url);
    //   })
    //   .then((isGone) => {
    //     console.log("ok");
    //   });
    caches.delete(APP.cacheName);
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
