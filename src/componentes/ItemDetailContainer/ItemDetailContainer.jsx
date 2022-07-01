export default function itemDetailContainer(detail) {
  return (
    <div className="productDetail">
      <div className="productDetailRow">
        <div className="productDetailColumnL">
          <h2>Titulo: {detail.name}</h2>
          <img src={detail.img} alt="Imagen" />
        </div>
        <div className="productDetailColumnD">
          <p>Descripcion: {detail.description}</p>
          <p>Precio: {detail.price}</p>
        </div>
      </div>
    </div>
  );
}
