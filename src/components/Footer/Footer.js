import { Link } from "react-router-dom"
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Aluraflix. Todos los derechos reservados.</p>
                <p>
                    Hecho con ❤️ por <a href="https://github.com/protosoldat">tErnesto Faerron Chavarría</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
