const APP = {
  SW: null,
  // called after DOMContentLoaded
  init() {
    console.log("object");
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
      if (navigator.serviceWorker.controller) {
        console.log("we have a service worker installed...");
      }
      // register a handler to detect when a new or update service worker is installed & activate
      navigator.serviceWorker.oncontrollerchange = (ev) => {
        console.log("new service worker installed");
      };
      // unregister service worker
      // navigator.serviceWorker.getRegistrations().then((regs) => {
      //   for (let reg of regs) {
      //     reg.unregister().then((isUnreg) => console.log(isUnreg));
      //   }
      // });
    } else {
      console.log("Service workers are not supported");
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
