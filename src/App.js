import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemExpandido from "./componentes/itemExpandido/ItemExpandido";
import Main from "./componentes/Main/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container" name="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/descripcion" element={<ItemExpandido />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <NavBar />
    //   <ItemListContainer saludo="Catálogo de Software" />
    //   <Main />
    // </div>
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
