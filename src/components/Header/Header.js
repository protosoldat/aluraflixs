import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./LogoMain.png"
import Headernav from "../Headernav/Headernav"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix" />
                </section>
            </Link>
            <nav>
                <Headernav url="./">
                    Home
                </Headernav>
                <Headernav url="./Nuevo">
                    Nuevo video
                </Headernav>
            </nav>
        </header>
    )
}

export default Header