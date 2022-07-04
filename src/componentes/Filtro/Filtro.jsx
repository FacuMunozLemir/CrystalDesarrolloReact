import "./filtro.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Filtro(props) {
  const { Items } = props;

  let select = document.getElementById("filtro");

  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="filtro">
      <h3>Filtrar por SO:</h3>
      <div className="filtro--busqueda">
        <select name="filtro" id="filtro" onChange={handleChange}>
          <option>Selecciona un S.O.</option>
          <option value="/">
            <Link to="/">Todos</Link>
          </option>
          <option value="/category/android">
            <Link to="/category/android">Android</Link>
          </option>
          <option value="/category/windows">
            <Link to="/category/windows">Windows</Link>
          </option>
        </select>
      </div>
    </div>
  );
}

export default Filtro;
