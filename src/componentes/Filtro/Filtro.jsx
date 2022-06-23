import "./filtro.css";

function Filtro() {
  return (
    <div className="filtro">
      <h3>Filtrar por SO:</h3>
      <div className="filtro--busqueda">
        <select name="filtro" id="">
          <option value="1">Todos</option>
          <option value="2">Android</option>
          <option value="3">Windows</option>
        </select>
        <button className="btnFiltrar">Filtrar</button>
      </div>
    </div>
  );
}

export default Filtro;
