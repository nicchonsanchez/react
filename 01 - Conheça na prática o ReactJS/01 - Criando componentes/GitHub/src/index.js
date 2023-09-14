import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Array from './Array';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App texto="Registros" />
    
    <Array prefix="Mr." dados={{nome:'Nicchon',sobrenome:'Sanchez',idade:22,github:'nicchonsanchez'}} />
    <Array prefix="Miss" dados={{nome:'Gabriela',sobrenome:'Perin',idade:20,github:'Gabyperin'}} />
    <Array prefix="Mr." dados={{nome:'Raphael',sobrenome:'Olimpio',idade:36,github:'Rapha29'}} />
  </React.StrictMode>
);