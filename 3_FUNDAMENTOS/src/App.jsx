
import './App.css';

//components
import City from './assets/city.jpg';
import ManageData from './components/ManageData.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import ShowUserName from './components/ShowUserName.jsx';
import CarDetails from './components/CarDetails.jsx';
import { useState } from 'react';

function App() {
  const name = "Joaquin";
  const [userName] = useState("Maria");

  const cars =[
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km:  0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km:  34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km:  234},
  ]
 

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

    <ShowUserName name={userName}  />

    {/* destructuring */}
    <CarDetails  brand="VW" km={100000} color="Azul" />     
    {/* reaproveitando */}
    <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true}   />
    <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}   />

    {/* loop em array de objetos */}
    {
      cars.map((car) => (
        <CarDetails 
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))
    }
      </div>
            
   
  );
};

export default App
