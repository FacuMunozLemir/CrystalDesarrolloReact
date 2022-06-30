import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ProductDetail from "./componentes/ProductDetail/ProductDetail";
import Main from "./componentes/Main/Main.jsx";
import Footer from "./componentes/Footer/Footer";
import FormasDePago from "./componentes/FormasDePago/FormasDePago";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container" name="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/formasDePago" href="#prices" />
          <Route path={`/descripcion`} element={<ProductDetail />} />
        </Routes>
        <FormasDePago id="formasDePago" />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
