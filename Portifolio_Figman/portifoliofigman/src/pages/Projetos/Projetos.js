
import styles from './Projetos.module.css'; 

import Imagem1 from "../Imagens/diploma1.jpeg";
import Imagem2 from "../Imagens/img2.webp";
import Imagem3 from "../Imagens/img3.jpg";

import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";

import React, { useState } from 'react';



const Projetos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para abrir o modal e definir a imagem selecionada
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };
 

  


  return (
   
    <div className={styles.grid3}>
       <div className={styles.grid3Item }>
      
      <img className={styles.image  } 
     
      src={Imagem1}
      alt="foto perfil"
      onClick={() => openModal(Imagem1)} />
    
        <p>Legenda</p>
      </div>


      <div className={styles.grid3Item }>
      
      <img className={styles.image} 
      src={Imagem2} 
      alt="foto perfil"
      onClick={() => openModal(Imagem2)} />
        <p>Legenda</p>
      </div>


      <div className={styles.grid3Item}>
      <img className={styles.image} 
      src={Imagem3} 
      alt="foto perfil"
      onClick={() => openModal(Imagem3)} />
        <p>Legenda</p>
      </div>
     



      

  






      <WhatsAppFlutuante />


      
    </div>




  );
}

export default {Projetos} ;