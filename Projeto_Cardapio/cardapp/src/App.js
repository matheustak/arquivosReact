
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

import styles from "./App.module.css";


// Componente principal
const App = ( ) => {
 
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spline = new Application(canvas);

    // Carregando a cena
    spline.load('https://prod.spline.design/LqMTPBUCqVUYW1L6/scene.splinecode')
      .then(() => {
        // Seu código aqui, como encontrar objetos ou adicionar ouvintes de eventos
        const obj = spline.getAllObjects();
       
       spline.setBackgroundColor("green");
       spline.setSize(10,10);
       spline.setZoom(-350);
        console.log(obj );

        
        spline.addEventListener('mouseDown', (e) => {
          if (e.target.name === 'Cube') {
            console.log('I have been clicked!');
          }
        });
      });

    return () => {
      // Limpar recursos, se necessário
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="canvas3d" width={800} height={600} style={{ border: '1px solid black', width: '100%', height: '100%' }}></canvas>
  );
  
  
};


export default App;
