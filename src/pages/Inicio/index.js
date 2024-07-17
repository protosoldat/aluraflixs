import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import styles from "index.modulo.css"
import videos from "data/db.json"


function Inicio (){
    return(
        <>
        <Header></Header>
        <Banner img="home" color="#154580"></Banner>
        <Card id="1"></Card>
        <section className={styles.cotainer}>
            {videos.map((video)=>){
                
            }
        </section>
        <Footer></Footer>
        </>
    )
}

export default Inicio