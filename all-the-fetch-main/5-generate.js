const jsonstr = "https://jsonplaceholder.typicode.com/posts";
const imgstr = "https://picsum.photos/id/237/300/200";
const textstr = "http://127.0.0.1:3000";
export function getData() {
  let list = document.getElementById("list");
  let img = document.getElementById("pic");
  let header = document.querySelector("header");

  fetch(jsonstr)
    .then((resposnse) => {
      if (!resposnse.ok) throw new Error("invalid");
      return resposnse.json();
    })
    .then((data) => {
      console.log(data, "json");
      list.innerHTML = data
        .map(({ userId, id, title, body }) => {
          return `<li data-uid="${userId}">${id}</li> <p>${title}</p> <div>${body}</div>`;
        })
        .join("");
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(textstr)
    .then((response) => {
      if (!response.ok) throw new Error("invalid...");
      return response.text();
    })
    .then((text) => {
      console.log(text);
      header.innerHTML += `<h2>${text}</h2>`;
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(imgstr)
    .then((resp) => {
      if (!resp.ok) throw new Error("invalid");
      return resp.blob();
    })
    .then((blob) => {
      let url = URL.createObjectURL(blob);
      console.log(url);
      let img = document.getElementById("pic");
      img.src = url;
    })
    .catch((error) => {
      console.log(error.message);
    });
}
console.log("5");
