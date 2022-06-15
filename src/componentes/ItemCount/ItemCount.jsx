import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Contador/contador.css";

function ItemCount() {
  const [count, setCount] = useState(1);

  return (
    <div className="contador">
      <button
        className="btn btn-restar"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else if (count <= 0) {
            Swal.fire("No se puede seleccionar menos de 0");
          }
        }}
      >
        -
      </button>
      <p className="numero">{count}</p>
      <button className="btn btn-sumar" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
export default ItemCount;
