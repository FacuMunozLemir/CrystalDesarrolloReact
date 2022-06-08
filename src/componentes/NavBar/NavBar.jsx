import CartWidget from "./CartWidget";
import NavLink from "../NavLink/NavLink";
import Logo from "../Logo/Logo";
import Swal from "sweetalert2";
import "./navbar.css";

function NavBar() {
  const handleClick = () => {
    Swal.fire("Hiciste click en un enlace del navegador");
  };

  return (
    <header className="NavBar">
      <Logo />
      <ul className="items">
        <NavLink title="Catalogo" handleOnClick={handleClick} />
        <NavLink title="Formas de Pago" handleOnClick={handleClick} />
        <NavLink title="Contacto" handleOnClick={handleClick} />
        <CartWidget title="Carrito" handleOnClick={handleClick} />
      </ul>
    </header>
  );
}

export default NavBar;
