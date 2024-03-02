
import styles from "./WhatsAppFlutuante.module.css";





const WhatsAppFlutuante = () => {
  

  
  return (
    

    <div className={`${styles.whatsfloat} ${styles.animated} ${styles.tada} ${styles.whatsanimated}`} >
        
    <a href="https://api.whatsapp.com/send?phone=556592515974&amp;text=Boa noite!" target="_blank"
    rel="noopener noreferrer" >
    
    <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="WhatsApp Logo"  
     />
    
    </a>
    </div>

  );
};

export default WhatsAppFlutuante;