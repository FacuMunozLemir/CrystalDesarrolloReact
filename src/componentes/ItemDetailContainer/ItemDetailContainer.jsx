import { productos } from "../../mock/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
function ItemDetailContainer() {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const traerProducto = new Promise((res) => {
      setTimeout(() => {
        res(productos[0]);
      }, 600);
    });

    traerProducto
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-detail-container">
      <h2>Detalles del producto</h2>
      <ItemDetail item={product} />
    </div>
  );
}

export default ItemDetailContainer;
