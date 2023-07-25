import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Menu from './Components/MenuPrincipal';
import Portfolio from './Components/Portfolio';
import Projetos from './Components/Projetos';
import Navs from './Components/Navs';
import SobreMim from './Components/SobreMim';
import reportWebVitals from './reportWebVitals';
import TouchDetector from './Components/TouchDetector';
import { MyContextProvider } from "./Components/Context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <TouchDetector>
          <Menu />
          <Projetos />
          <Navs />
          <Portfolio />
          <SobreMim />
      </TouchDetector>
    </MyContextProvider>
  </React.StrictMode>
);
reportWebVitals();
