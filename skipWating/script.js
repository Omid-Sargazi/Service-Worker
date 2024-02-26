const APP = {
  SW: null,
  init() {
    document.querySelector("h2").addEventListener("click", APP.addImage);
    APP.registerSW();
  },
  registerSW() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("../sw.js").then(
        (registration) => {
          APP.SW =
            registration.active ||
            registration.waiting ||
            registration.installing;
        },
        (error) => {
          console.log("Service worker registration failed:', error");
        }
      );
    } else {
      console.log("Service workers are not supported.");
    }
  },
  addImage(ev) {
    let img = document.createElement("img");
    img.src = "../image/1.jpg";
    img.alt = "dynamically added image";
    let p = document.createElement("p");
    p.append(img);
    document.querySelector("main").append(p);
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
