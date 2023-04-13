const data = [
  { id: 1, name: "Name 1", title: "Title 1" },
  { id: 2, name: "Name 2", title: "Title 2" },
  { id: 3, name: "Name 3", title: "Title 3" },
  { id: 4, name: "Name 4", title: "Title 4" },
  { id: 5, name: "Name 5", title: "Title 5" }
];
export default data;
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
};
export { fetchData };
