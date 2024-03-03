
import styles from './Projetos.module.css'; 

import Imagem1 from "../Imagens/diploma1.jpeg";
import Imagem2 from "../Imagens/aguarda.png";


import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";


import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';



const Projetos = () => {
 
  const [open, setOpen] = useState(false);


  return (
   
    <div className={styles.grid3}>
       <div className={styles.grid3Item }>
      
      <img className={styles.image  } 
     
  
     src= {Imagem1}
      alt="foto perfil"
      onClick={() => setOpen(true)} />
    <a href="https://devsuperior.com.br/" className={styles.link} target="_blank" rel="noopener noreferrer">
           Curso Java Spring Boot
          </a>
          
      </div>


      <div className={styles.grid3Item }>
      
      <img className={styles.image} 
      src={Imagem2} 
      alt="foto perfil"
      onClick={() => setOpen(true)} />
       <a href="https://www.udemy.com/course/curso-do-figma-ao-codigo-o-design-da-interface-web-completo/?couponCode=ACCAGE0923" className={styles.link} target="_blank" rel="noopener noreferrer">
       Curso do FIGMA ao código. O design da interface web completo
          </a>
      </div>


      <div className={styles.grid3Item}>
      <img className={styles.image} 
      src={Imagem2} 
      alt="foto perfil"
      onClick={() => setOpen(true)}/>
       <a href="https://devsupehttps://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=ACCAGE0923rior.com.br/" className={styles.link} target="_blank" rel="noopener noreferrer">
       Curso de JavaScript e TypeScript do básico ao avançado JS/TS
          </a>
      </div>
     

      <div className={styles.grid3Item}>
      <img className={styles.image} 
      src={Imagem2} 
      alt="foto perfil"
      onClick={() => setOpen(true)}/>
       <a href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/?couponCode=ACCAGE0923" className={styles.link} target="_blank" rel="noopener noreferrer">
       React do Zero a Maestria (c/ hooks, router, API, Projetos)
          </a>
      </div>
     



      

  
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: Imagem1, alt: 'Imagem 1' },
          { src: Imagem2, alt: 'Imagem 2' },
          { src: Imagem2, alt: 'Imagem 3' },
          { src: Imagem2, alt: 'Imagem 4' },
          
        ]}
      />






      <WhatsAppFlutuante />


      
    </div>




  );
}

export default Projetos ;