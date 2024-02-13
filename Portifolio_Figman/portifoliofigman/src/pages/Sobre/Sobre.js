


//ImagensDeCapa
import minhaImagem1 from "../Imagens/sitematheusrocha.png" ;
import SkillBar from '../SkillBar/SkillBar.js';

import styles from "./Sobre.module.css";







const Sobre = () => {
  return (
    <div className={styles.page}>
  
    <div className={styles.fotoperfil}>
 
       <img className={styles.foto} src={minhaImagem1}  alt="Segua-me no github" />
        <h1>Matheus <span>Rocha</span></h1>
        <p>Cursando analise e desenvolvimento de sistema /de mato grosso Cuiabá jovem <br />programador dev em back-end e front-end. </p>
        
       </div>


       <div className={styles.skills}>
 
            <h1>Hard <span>Skills</span></h1>
            <SkillBar />
          </div>

        

        
        

           
          </div>



   
  );
};

export default Sobre