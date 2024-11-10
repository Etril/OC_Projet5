import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"
import "../styles/Header.scss"

function Header() {
    return (
        <header> 
            <img src={logo} alt="Logo Kasa"></img>
            <nav>
                <Link to="/"> Accueil </Link>
                <Link to="/about"> A propos </Link>
            </nav>
        </header>
    )
}

export default Header