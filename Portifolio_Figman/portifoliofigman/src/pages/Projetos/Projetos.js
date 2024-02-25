import React from 'react';
import styles from './Projetos.module.css'; 
import Imagem1 from "../Imagens/img1.webp";
import Imagem2 from "../Imagens/img2.webp";
import Imagem3 from "../Imagens/img3.jpg";

const Projetos = () => {
  return (
   
    <div className={styles.grid3}>
       <div className={styles.grid3Item }>
      
      <img className={styles.image} src={Imagem1} alt="foto perfil" />
        <p>Legenda</p>
      </div>
      <div className={styles.grid3Item }>
      
      <img className={styles.image} src={Imagem2} alt="foto perfil" />
        <p>Legenda</p>
      </div>
      <div className={styles.grid3Item}>
      <img className={styles.image} src={Imagem3} alt="foto perfil" />
        <p>Legenda</p>
      </div>
    </div>
   
  );
};

export default Projetos;