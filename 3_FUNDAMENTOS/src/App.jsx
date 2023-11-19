
import './App.css';

//components
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';


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
  
      </div>
       
   
  );
};

export default App
