import "./main.css";
import Tarjeta from "../Tarjeta/Tarjeta";
import Contador from "../Contador/Contador";

function Main() {
  return (
    <main className="main">
      <h1>Catálogo de software</h1>
      <section className="main-catalogo">
        <Tarjeta />
      </section>
    </main>
  );
}

export default Main;
