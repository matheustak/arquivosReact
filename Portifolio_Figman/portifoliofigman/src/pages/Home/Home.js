import styles from "./Home.module.css";

//Imagens
import minhaImagem from "../Imagens/Home_art 1.svg" ;

const Home = () => {
  return (
   
<div className={styles.home}>
    <div className={styles.text}>
    <p>
    Olá pessoas,</p>
  <h1>EU SOU UM 
        PROGRAMADOR</h1>
        <p>seja bem-vindo ao meu portifólio website</p>
    
    </div>
    <div className={styles.imageContainer}>
    <img src={minhaImagem}  alt="Imagem de entrada do Web-Site" />
    </div>
</div>
  );
};

export default Home;