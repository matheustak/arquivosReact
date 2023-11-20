
import './App.css';

//components
import City from './assets/city.jpg';
import ManageData from './components/ManageData.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import ShowUserName from './components/ShowUserName.jsx';
import CarDetails from './components/CarDetails.jsx';

function App() {
 

  return (
   

       
      <div className="App">
        <h1>Avançando Em React</h1>
        {/* Imagem em public */}
        
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        
      {/* Imagem em asset */}

      <div>
      <img src={City} alt="Cidade" />
      </div>



    <ManageData />
      
    <ListRender />
  
    <ConditionalRender />

    <ShowUserName name="Matheus" />

    {/* destructuring */}
    <CarDetails  brand="VW" km={100000} color="Azul" />     
    {/* reaproveitando */}
    <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true}   />
    <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}   />
      </div>
            
   
  );
};

export default App
