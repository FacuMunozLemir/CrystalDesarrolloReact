import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>${item.price}</div>
    </div>
  );
};

export default Item;
