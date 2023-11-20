
import './App.css';

//components
import City from './assets/city.jpg';
import ManageData from './components/ManageData.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';

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
      </div>
       
   
  );
};

export default App
