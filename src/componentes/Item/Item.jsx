import React from "react";
import { Link } from "react-router-dom";
import "../Tarjeta/tarjeta.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  return (
    <div className="card">
      <div className="titulo">{item.name}</div>
      <div className="descripcion">{item.description}</div>
      <div className="descripcion">${item.price}</div>
      <ItemCount stock={item.stock} initial={1} />
      <div className="areaBoton">
        <button className="btn btn-descripcion">
          <Link to="/descripcion">Descripcion</Link>
        </button>

        <button className="btn btn-comprar">Comprar</button>
      </div>
    </div>
  );
};

export default Item;
