import "./main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Main() {
  return (
    <main className="main">
      <h1>Catálogo de software</h1>
      <section className="main-catalogo">
        <ItemListContainer saludo="Catálogo de Software" />
      </section>
    </main>
  );
}

export default Main;
