import "./main.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Filtro from "../Filtro/Filtro";

function Main() {
  return (
    <main className="main">
      <h1>Catálogo de software</h1>
      <Filtro />
      <section className="main-catalogo">
        <ItemDetailContainer saludo="Catálogo de Software" />
      </section>
    </main>
  );
}

export default Main;
