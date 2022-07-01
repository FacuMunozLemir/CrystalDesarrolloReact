import "./filtro.css";
import { Link } from "react-router-dom";

function Filtro(props) {
  const { Items } = props;

  let select = document.getElementById("filtro");

  function handleSubmit() {
    const filterValue = [];

    // console.log(select.value);
    // console.log(Items);
    Items.map((el) => {
      // console.log(el.category);
      if (el.category == select.value) {
        filterValue.push(el);
        // console.log(filterValue);
      }
    });
  }

  return (
    <div className="filtro">
      <h3>Filtrar por SO:</h3>
      <div className="filtro--busqueda">
        <select name="filtro" id="filtro">
          <option selected disabled>
            Selecciona un S.O.
          </option>
          <option>
            <Link to="/">Todos</Link>
          </option>
          <option>
            <Link to="/category/android">Android</Link>
          </option>
          <option>
            <Link to="/category/windows">Windows</Link>
          </option>
        </select>
      </div>
    </div>
  );
}

export default Filtro;
