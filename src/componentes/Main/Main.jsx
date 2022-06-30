import "./main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Filtro from "../Filtro/Filtro";
import { productos } from "../../mock/products";
import React, { useEffect, useState } from "react";

function Main() {
  return (
    <main className="main">
      <h1>Catálogo de software</h1>

      <section className="main-catalogo">
        <ItemListContainer />
      </section>
    </main>
  );
}

export default Main;
