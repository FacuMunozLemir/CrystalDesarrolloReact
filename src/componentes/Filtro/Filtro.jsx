import "./filtro.css";

function Filtro() {
  return (
    <div className="filtro">
      <h3>Filtrar por SO:</h3>
      <select name="filtro" id="">
        <option value="1" selectedValue>
          Todos
        </option>
        <option value="2">Android</option>
        <option value="3">Windows</option>
      </select>
    </div>
  );
}

export default Filtro;
