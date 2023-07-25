import React, { useState, useContext, useRef, useEffect  } from 'react';
import '../CSS/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { MyContext } from "./Context";
import { useMediaQuery } from 'react-responsive';

const Portfolio = () => {
  const { varAtual } = useContext(MyContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={`portfolio_inicial ${varAtual === 1 ? 'open' : ''}`}>
        <div className="sec_apresent">
          <h2 className='titulo'>Olá, meu nome é <strong>João</strong>!</h2>
        </div>
        <div className={`contacts ${isMobile ? 'show' : ''}`}>
           <a href="https://github.com/JWikoski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='social_media'/></a>  
           <a href="https://github.com/JWikoski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='social_media'/></a>   
           <a href="https://github.com/JWikoski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className='social_media'/></a> 
           <a href="https://wa.me/554999169409" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className='social_media' /></a>   
        </div>
          <h1 className='titulo tip_2'></h1>    
          <h1 className='titulo tip_3'>Developer</h1>    
          <h2 className='resumo_sobre'>Tenho 23 anos e sou um desenvolvedor apaixonado por criar experiências <strong style={{color: '#89C1E4'}}>modernas</strong> e <strong  style={{color: '#A394D0'}}>intuitivas</strong> ao usuário. </h2>
      <span className={`${isMobile ? 'desliza' : ''}`}>Deslize para o lado <FontAwesomeIcon className='icon_pointer' icon={faHandPointer} /></span>
    </div>
  );
}

export default Portfolio;
