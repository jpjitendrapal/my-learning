import { useEffect, useState } from "react";
import { fetchData } from "./data";
const RenderList = () => {
  const [list, setList] = useState([]);
  const renderItem = (item) => {
    return (
      <div key={item.id}>
        {item.id} - {item.title} - {item.description}
      </div>
    );
  };
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setList(res.products);
    });
  }, []);
  return (
    <div>
      <h2>Rendering List with Key</h2>
      {list.map((item) => renderItem(item))}
    </div>
  );
};
export default RenderList;

/* Key should be from the data itself which is unique to the information for the item */
