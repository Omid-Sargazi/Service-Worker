export function getData() {
  // what is an API key
  //   where can we pass it to the server
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers
  let str = "http://127.0.0.1:3000/?name=value&create=omidSa";
  let url = new URL(str);
  console.log("6");
  let sp = url.searchParams;
  sp.append("api-key", "sakodijwfdoijwepiofjewpiofjerpio");
  sp.append("hello", "world");
  let h = new Headers();
  // document.cookie();
  // h.append()
  h.append("origin", "omid");
  h.append("x-api-key", "sakodijwfdoijwepiofjewpiofjerpio");
  h.append("Authorization", "Omid sakodijwfdoijwepiofjewpiofjerpio");

  // forbidden Header Names

  let request = new Request(url, {
    // method: "POST",
    method: "GET",
    headers: h,
  });
  fetch(request)
    .then((res) => {
      if (!res.ok) throw new Error("invalid");
      return res.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(request, "sp");
}
