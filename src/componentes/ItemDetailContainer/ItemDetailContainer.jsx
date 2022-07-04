import { productos } from "../../mock/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const traerProducto = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    traerProducto
      .then((res) => {
        const productFilter = productId
          ? res.filter((item) => item.id == productId)
          : res;
        setProduct(productFilter);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div className="item-detail-container">
      <ItemDetail items={product} />
    </div>
  );
}

export default ItemDetailContainer;
