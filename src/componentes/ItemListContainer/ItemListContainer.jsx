import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { productos } from "../../mock/products";
import Filtro from "../Filtro/Filtro";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  let { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  //El use Effect es una especie de Listener
  useEffect(() => {
    const traerProductos = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    traerProductos
      .then((res) => {
        const categoryFilter = categoryId
          ? res.filter((item) => item.category == categoryId)
          : res;
        setProducts(categoryFilter);
        console.log(categoryFilter);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <Filtro Items={products} />
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
