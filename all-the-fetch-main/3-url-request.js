const str = "http://127.0.0.1:5502/local-sample.json?attempt=123&other=hello";
export function getData() {
  const url = new URL(str);
  //   console.log(url.host, url.origin, url.protocol, url.port, url.pathname);
  const req = new Request(url, {
    headers: { "x-omid": "hello" },
    method: "GET",
    cache: "no-store",
  });
  fetch(req)
    .then((response) => {
      if (!response.ok) throw new Error("something wrong error");
      console.log(response.status);
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log("3-url-request");
}
