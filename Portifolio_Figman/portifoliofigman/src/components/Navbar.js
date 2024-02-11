

//Router
import { NavLink } from "react-router-dom";

//CSS
import styles from "./Navbar.module.css";

//Imagens
import minhaImagem from "../Logo/Group.svg" ;

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        
        <NavLink to="/"  className={styles.brand} >
      
       <img src={minhaImagem}alt="Logo"/>
        <h1> Matheus Rocha</h1>
      
        </NavLink>


        <ul className={styles.links_list}>
            <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")} >Home</NavLink>
            </li>
          
          
             <li>
            <NavLink to="/portifolio" className={({isActive}) => (isActive ? styles.active : "")} >Portifólio</NavLink>
            </li>

            <li>
            <NavLink to="/servico" className={({isActive}) => (isActive ? styles.active : "")}>Serviços</NavLink>
            </li>
                  
           
         

            <li>
            <NavLink to="/resumo" className={({isActive}) => (isActive ? styles.active : "")}>Resumo</NavLink>
            </li>
         
            <li>
            <NavLink to="/contato" className={({isActive}) => (isActive ? styles.active : "")}>Contato</NavLink>
            </li>
           
     </ul>

    </nav>

  );
};

export default Navbar;