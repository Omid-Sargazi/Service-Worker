const url = "https://jsonplaceholder.typicode.com/todos";
export function getData() {
  fetch(url)
    .then((response) => {
      console.log(response);
      console.log(response.status);
      if (!response.ok) throw new Error("fetch not successful");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
