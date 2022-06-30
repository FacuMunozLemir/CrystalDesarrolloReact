import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="areaTarjeta">
      {items.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </div>
  );
};

export default ItemList;
