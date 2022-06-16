import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Contador/contador.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const resta = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador">
      <button className="btn btn-restar" onClick={resta}>
        -
      </button>
      <p className="numero">{count}</p>
      <button className="btn btn-sumar" onClick={suma}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
