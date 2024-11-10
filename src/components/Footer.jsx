import logo_footer from "../assets/logo_footer.png";
import "../styles/Footer.scss";

function Footer () {
    return (
        <footer>
            <img src={logo_footer} alt="Logo kasa"></img>
            <p> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default Footer