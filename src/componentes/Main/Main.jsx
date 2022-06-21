import "./main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Filtro from "../Filtro/Filtro";

function Main() {
  return (
    <main className="main">
      <h1>Catálogo de software</h1>
      <Filtro />
      <section className="main-catalogo">
        <ItemListContainer saludo="Catálogo de Software" />
      </section>
    </main>
  );
}

export default Main;
