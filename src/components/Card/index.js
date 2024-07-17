import styles from "./Card.module.css"
import eliminar from "./eliminar.png"
import editar from "./editar.png"


function Card(id, capa, titulo){
    return(
        <div className={styles.conteiner}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={eliminar} alt="Eliminar"/>
            <img src={editar} alt="Editar"/>
        </div>
    )
}

export default Card
