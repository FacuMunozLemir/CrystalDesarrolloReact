import ItemCount from "../ItemCount/ItemCount";
import "./itemListContainer.css";

function ItemListContainer() {
  return (
    <div className="item-list-container">
      <h2>Item List Container</h2>
      <ItemCount />
      <button className="btn btn-comprar">Comprar</button>
    </div>
  );
}

export default ItemListContainer;
