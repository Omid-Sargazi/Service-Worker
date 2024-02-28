const jsonstr = "http://127.0.0.1:5500/local-sample.json"; // json file
const imgstr = "https://picsum.photos/id/237/300/200"; // image file
const fontstr =
  "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2"; // font file
const htmlstr = "http://127.0.0.1:5500/"; //html file
console.log("444");
// HTTP Request - HEAD, BODY
// HTTP Response - HEAD, BODY

let obj = {
  id: crypto.randomUUID(),
  name: "the one who knocks",
  favoriteColor: "blue",
};
let jasonString = JSON.stringify(obj);

export function getData() {
  fetch(imgstr)
    .then((res) => {
      if (!res.ok) {
        throw new Error("invalid...");
      }
      return res.blob();
    })
    .then((data) => {
      console.log(data);
      let url = URL.createObjectURL(data);
      let img = document.getElementById("pic");
      img.src = url;
    })
    .catch((error) => {
      console.log(error.message);
    });

  let file = new File([jasonString], "mydata.json", {
    type: "application/json",
  });

  let response = new Response(file, {
    status: 200,
    statusText: "Say may name",
    headers: {
      "content-type": "application/json",
      "content-length": file.size,
      "x-Omid": "front end developer",
    },
  });
  //   console.log(response.headers.get("content-type"));
  //   console.log(response.headers.get("content-length"));
  //   console.log(response.headers.has("content-length"));
  //   console.log(response.headers.has("content-type"));
  //   console.log(response.headers.has("x-Omid"));
  //   console.log(response.headers.get("x-Omid"));
}
