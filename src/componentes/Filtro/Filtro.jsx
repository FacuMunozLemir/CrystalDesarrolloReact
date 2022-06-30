import "./filtro.css";

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
          <option value={1}>Todos</option>
          <option value={2}>Android</option>
          <option value={3}>Windows</option>
        </select>
        <button className="btnFiltrar">Filtrar</button>
      </div>
    </div>
  );
}

export default Filtro;
