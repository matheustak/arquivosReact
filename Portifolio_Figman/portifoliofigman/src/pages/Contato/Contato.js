
import styles from "./Contato.module.css";
import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";


//icons
import icon_phone from "../Imagens/Vector.png";
import icon_localizacao from "../Imagens/Vector-1.png";
import surface from "../Imagens/surface1.png";
import group from "../Imagens/Group.png";

const Contato = () => {
  return (
    <div className={styles.container}>
       
      <div className={styles.grid}>
        
        
     
     <div className={styles.grid3Item}>
     <img className={styles.phone} src={icon_phone} alt="icon-phone" />
        <h3 className={styles.contato}>
          Telefone
        </h3>
        
            <span className={styles.contactitem}>
              +5565992515974
            </span>
            <span className={styles.contactitem}>
              (Celular)
            </span>
            </div>
      

    
        
        
     
     <div className={styles.grid3Item}>
     <img className={styles.phone} src={icon_localizacao} alt="icon-phone" />
        <h3 className={styles.contato}>
        Endereço
        </h3>
        
        <a href="http://maps.apple.com/?address=rua araraquaria 169 centro politico admnistrativo" className={styles.link} target="_blank" rel="noopener noreferrer">
            Rua araraquaria 169 Centro Político Administrativo
          </a>
            </div>
      

      
      
        
        
     
     <div className={styles.grid3Item}>
     <img className={styles.phone} src={surface} alt="icon-phone" />
        <h3 className={styles.contato}>
        E-mail
        </h3>
        
        <a href="mailto:matheusrochaalecrim@gmail.com" className={styles.link} target="_blank" rel="noopener noreferrer">
            matheusrochaalecrim@gmail.com
          </a>
            </div>
      

  
        
        
     
     <div className={styles.grid3Item}>
     <img className={styles.phone} src={group} alt="icon-phone" />
        <h3 className={styles.contato}>
        Data de nascimento
        </h3>
        
        10 de junho
            </div>
      </div>

      
      
 



      



      <WhatsAppFlutuante />
</div>
  );
};

export default Contato;