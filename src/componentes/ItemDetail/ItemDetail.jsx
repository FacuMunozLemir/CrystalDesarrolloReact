import React, { useEffect, useState } from "react";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="fila">
      <div className="columnaI">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="columnaD">
        <div className="titulo">{item.name}</div>
        <div className="descripcion">{item.description}</div>
        <div className="precio">Precio final por unidad ${item.price}</div>
      </div>
    </div>
  );
}

export default ItemDetail;
