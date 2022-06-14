import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Main from "./componentes/Main/Main.js";
import Contador from "./componentes/Contador/Contador";
import { useEffect, useState } from "react";

function App() {
  // let urlRequest = "https://pokeapi.co/api/v2/pokemon/";
  // const [pokeList, setPokeList] = useState();
  // console.log("pokelist", pokeList);
  // useEffect(() => {
  //   fetch(urlRequest)
  //     .then((respuesta) => respuesta.json())
  //     .then((respuestaJSON) => setPokeList(respuestaJSON.results));
  //   // .catch((error) =>
  //   //   console.error("Error obteniendo datos del pokemon", error)
  //   // );
  // }, []);

  return (
    <div className="App">
      <NavBar />

      <Main />
      <Contador />
    </div>
  );
}

export default App;
