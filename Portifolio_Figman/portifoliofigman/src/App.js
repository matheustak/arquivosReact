import './App.css';
import {BrowserRouter , Routes, Route, Navigate} from "react-router-dom";


//Pages
import Home from  "./pages/Home/Home.js";

//Components
import Navbar from "./components/Navbar.js";
import Footer from  "./components/Footer.js";




function App() {



  return (
    <div className="App">
    <BrowserRouter>
        

        <Navbar />
        <div className='container'>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </div>
       
        <Footer />
       
        </BrowserRouter>
    </div>
    
  );
}

export default App;
