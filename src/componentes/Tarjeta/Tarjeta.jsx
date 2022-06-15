import "./tarjeta.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";

function Tarjeta() {
  let urlRequest = "https://pokeapi.co/api/v2/pokemon/";
  const [pokeList, setPokeList] = useState();

  console.log("pokelist", pokeList);
  useEffect(() => {
    fetch(urlRequest)
      .then((respuesta) => respuesta.json())
      .then((respuestaJSON) => setPokeList(respuestaJSON.results));
    // .catch((error) =>
    //   console.error("Error obteniendo datos del pokemon", error)
    // );
  }, []);

  return (
    // {pokeList.map(
    //     (pokemon) =>

    // )}
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
