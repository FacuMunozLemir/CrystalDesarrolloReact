import ItemCount from "../ItemCount/ItemCount";
import { productos } from "../../mock/products";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";

import "./itemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    traerProductos
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);
  //   const onAdd = () => {
  //     console.log("hola");

  return (
    <div className="item-list-container">
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
