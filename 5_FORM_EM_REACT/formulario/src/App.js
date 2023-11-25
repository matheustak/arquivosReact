

//components
import MyForm from './components/MyForm';

import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Forms</h2>
     <MyForm user ={{name: "Josias", 
     email: "Josias@gmail.com",
     bio : "sou jogador",
     role: "admin" }} />
    </div>
  );
};

export default App;
