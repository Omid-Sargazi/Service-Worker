//how to upload one or more files from the browser to a server
//FormData objects
//HTTP Methods POST, PATCH, PUT
let endpoints = "http://127.0.0.1:3000/";
export function setData() {
  const imgInput = document.getElementById("imgfile");
  const jsonInput = document.getElementById("jsonfile");

  document.getElementById("myform").addEventListener("submit", (ev) => {
    ev.preventDefault();
    let obj = {
      id: 122,
      name: "omid",
    };
    console.log(imgInput.value);
    let fd = new FormData();
    console.log(imgInput.files[0]);
    fd.append("imageFile", imgInput.files[0], imgInput.files[0].name);

    let jsonString = JSON.stringify(obj);
    console.log(fd, "fd");
    let request = new Request(endpoints, {
      method: "POST",
      //   body: jsonString,
      body: fd,
      headers: {
        // "content-type": "application/json",
        "content-type": "multipart/form-data",
      },
    });

    fetch(request)
      .then((res) => {
        if (!res.ok) throw new Error("invalid");
        return res.text();
      })
      .then((data) => {
        console.log(data, "data");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  console.log(7);
}
