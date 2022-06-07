// import CartWidget from "./CartWidget";
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
        <NavLink title="Crystal Care" handleOnClick={handleClick} />
        <NavLink title="Nosotros" handleOnClick={handleClick} />
        <NavLink title="Servicios" handleOnClick={handleClick} />
        <NavLink title="Destacado" handleOnClick={handleClick} />
        <NavLink title="Contacto" handleOnClick={handleClick} />
      </ul>
    </header>
  );
}

export default NavBar;
