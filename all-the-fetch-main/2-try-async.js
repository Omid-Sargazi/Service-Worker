const url = "https://jsonplaceholder.typicode.com/todos";

export async function getData() {
  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error("A problem in cache");
    let data = await response.json();
  } catch (error) {
    console.log(error.message);
  }
}
