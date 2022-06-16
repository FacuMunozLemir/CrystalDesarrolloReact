import "./tarjeta.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";

function Tarjeta() {
  return (
    <div className="card">
      <h3 className="titulo">Titulo</h3>
      <p className="descripcion">Descripcion</p>
      {/* <ItemCount /> */}
      <div className="areaBoton">
        <button className="btn btn-descripcion">Descripcion</button>
        <button className="btn btn-comprar">Comprar</button>
      </div>
    </div>
  );
}
export default Tarjeta;
