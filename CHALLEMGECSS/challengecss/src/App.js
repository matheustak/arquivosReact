
import './App.css';
import Carro from './components/Carro';

function App() {

  const myCars = [
    { name: "Gol", km: 10000, color: "Branca" },
    { name: "Ferrari", km: 32000, color: "Vermelha" },
    { name: "Fusca", km: 0, color: "Branca" },
  ];
 
  return (
    
    <div className="App">
      <h1> Showrrom de Carros</h1>
      <div className="car-container">
        {myCars.map((carro) =>
          <Carro carro={carro}/>
        )}

      </div>
    </div>
  );
}

export default App;
