import styles from './Carro.module.css'

const Carro = ({carro}) => {
  return (

    
    <div className={styles.card}>
  
       <h1>{carro.name}</h1>
       <p>KM: {carro.km}</p>
       <p>Cor: {carro.color}</p>

    </div>
  );
};

export default Carro;