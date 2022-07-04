import { Link } from "react-router-dom";
import { productos } from "../../mock/products";
import React, { useEffect, useState } from "react";

function ItemDetail(producto) {
  console.log(producto.items[0]);
  return (
    <div>
      <h2>Detalles del producto</h2>
    </div>
  );
}
export default ItemDetail;
