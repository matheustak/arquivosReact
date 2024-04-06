import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const MySplineComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spline = new Application(canvas);

    // Carregando a cena
    spline.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode')
      .then(() => {
        // Seu código aqui, como encontrar objetos ou adicionar ouvintes de eventos
        const obj = spline.findObjectByName('Cube');
        console.log(obj);
        
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
    <canvas ref={canvasRef} id="canvas3d" width={800} height={600}></canvas>
  );
};

export default MySplineComponent;
