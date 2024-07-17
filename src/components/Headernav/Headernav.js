import { Link } from "react-router-dom";
import styles from "./Headernav.css"

function Headernav (url,children){
    return(
        <Link to={url} className={StyleSheet.Link}> 
        {children}
        </Link>
    )
}


export default Headernav