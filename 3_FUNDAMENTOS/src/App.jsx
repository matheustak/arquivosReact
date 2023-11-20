
import './App.css';

//components
import City from './assets/city.jpg';
import ManageData from './components/ManageData.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import ShowUserName from './components/ShowUserName.jsx';
import CarDetails from './components/CarDetails.jsx';
import Fragment from './components/Fragment.jsx';
import Container from './components/Container.jsx';
import ExecuteFunction from './components/ExecuteFunction.jsx';
import Message from './components/Message.jsx';
import ChangeMessageState from './components/ChangeMessageState.jsx';
import UserDetails from './components/UserDetails.jsx';
import { useState } from 'react';

function App() {
  //const name = "Joaquin";
  const [userName] = useState("Maria");

  const cars =[
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km:  0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km:  34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km:  234},
  ];

  const pessoa =[
    {id: 1, nome:"Matheus", idade:28, profissao:"Dev-Full-Stack", newPessoa:true},
    {id: 2, nome:"Pedro", idade:15, profissao:"Dev-Back-End", newPessoa:false},
    {id: 3, nome:"João", idade:18, profissao:"Dev-Front-End", newPessoa:true},
  ];

  function showMessage(){
    console.log("Evento do componente pai!");
  };
 
const [message,setMessage] = useState("");

const handleMessage = (msg) => {
      setMessage(msg);
};

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
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))
    }



  {/* Fragment */}
    <Fragment propFragment="teste" />
    {/* children */}
    <Container myValue="testing">
      <p>E este é o conteúdo</p>
    </Container>

    <Container myValue="testing 2">
      <p>E este é o conteúdo</p>
    </Container>
    {/* execute função */}
    <ExecuteFunction myFunction={showMessage} />

    {/* state lift */}
    <Message msg={message} />
    <ChangeMessageState handleMessage={handleMessage} />


    {
      pessoa.map((entity) => (
        <UserDetails 
        key={entity.id}
        nome={entity.nome}
        idade={entity.idade}
        profissao={entity.profissao}
        newPessoa={entity.newPessoa}
        
        />
      ))
    }

      </div>
            
   
  );
};

export default App;
