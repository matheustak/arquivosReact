


//ImagensDeCapa
import minhaImagem1 from "../Imagens/sitematheusrocha.png" ;
import vector from "../Imagens/Vector.svg" ;
import vec from "../Imagens/Vectort.svg" ;


import styles from "./Sobre.module.css";

import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";





const Sobre = () => {
  




  return (
    <div className={`${styles.page} `}>
  
    <div className={styles.fotoperfil}>
 
       <img className={styles.foto} src={minhaImagem1}  alt="Sega-me no github" />
        <h1>Matheus <span>Rocha</span></h1>
        <p>Cursando analise e desenvolvimento de sistema /de mato grosso Cuiabá jovem <br />programador dev em back-end e front-end. </p>
        
       </div>


       <div className={styles.skills}>
 
            <h1>Hard <span>Skills</span></h1>
          </div>

      <div className={styles.vectorgrid}>
          <div className={styles.grid3Item}>
          <h1>JAVA</h1>
            <img className={styles.image} src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vec} alt="vector" />

          </div>

          <div className={styles.grid3Item}>
          <h1>SPRING BOOT</h1>
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vec} alt="vector" />

          </div>

          <div className={styles.grid3Item}>
          <h1>REACT</h1>
            <img  className={styles.image} src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vec} alt="vector" />

          </div>

          <div className={styles.grid3Item}>
          <h1>CSS</h1>
            <img  className={styles.image} src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vector} alt="vector" />
            <img className={styles.image}  src={vec} alt="vector" />

          </div>

        
          </div>
        
        
          <WhatsAppFlutuante />
           
          </div>



   
  );
};

export default Sobre