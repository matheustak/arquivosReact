
//Componentes
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS GLOBAL */}
     <h1>React com CSS</h1>
     {/* CSS de Componente */}
     <MyComponent />
     <p>Este parágrafo é do App.js</p>
     <p className="my-comp-paragraph">Este tb é do componente</p>

    </div>
  );
}

export default App;
