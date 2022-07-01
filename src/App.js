import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";
import FormasDePago from "./componentes/FormasDePago/FormasDePago";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container" name="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route
            path="/Producto/:itemId"
            element={<ItemDetailContainer greeting="Detalle del Producto" />}
          />
        </Routes>
        <FormasDePago />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
