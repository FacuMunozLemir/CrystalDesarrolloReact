import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="NavBar">
      <Logo />
      <ul className="items">
        <Link to="/">Todos</Link>
        <Link to="/category/android">Android</Link>
        <Link to="/category/windows">Windows</Link>
        <CartWidget title="Carrito" />
      </ul>
    </header>
  );
}

export default NavBar;
