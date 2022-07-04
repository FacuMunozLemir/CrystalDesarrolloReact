import cartImg from "../../assets/images/carrito.png";

export default function CartWidget({ title, handleOnClick }) {
  return (
    <li onClick={handleOnClick}>
      {title}
      <img src={cartImg} alt="" width={"30"} />
    </li>
  );
}
