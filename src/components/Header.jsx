import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import logoMobile from "../assets/logo-mobile.png";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <img srcSet={`${logo} 211w, ${logoMobile} 146w`} sizes="(max-width: 767.98px) 146px, 211px" src={logo} alt="Logo Kasa"></img>
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/about"> A propos </Link>
      </nav>
    </header>
  );
}

export default Header;
