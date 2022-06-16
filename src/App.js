import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Main from "./componentes/Main/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contador from "./componentes/Contador/Contador";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="Item List Container" />
      <Main />
    </div>
  );
}

export default App;

// {/* <BrowserRouter>
// <NavBar />
// <Main />
// <Routes>
//   <Route path="/" element={<Contador />} />{" "}
//   {/* elment es una funcion */}
// <Routes>
// <BrowserRouter> */}
