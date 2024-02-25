const APP = {
  SW: null,
  // called after DOMContentLoaded
  init() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./sw.js", {
          scope: "/",
        })
        .then((registration) => {
          APP.SW =
            registration.active ||
            registration.waiting ||
            registration.installing;
          console.log("service worker registered");
        });
    } else {
      console.log("Service workers are not supported");
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
