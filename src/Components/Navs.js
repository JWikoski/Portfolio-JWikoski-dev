import React, { useState, useContext, useEffect  } from 'react';
import '../CSS/Navs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from "./Context";

const Navs = () => {
const { varAtual, updatePageVar, hoverProjetos, hoverSobre, updateOldVar, openDetalhes } = useContext(MyContext);
const [animacaoAtiva, setAnimacaoAtiva] = useState(true);

function updateAnimation(){
  setAnimacaoAtiva(!animacaoAtiva);
}

useEffect(() => {
  const intervalId = setInterval(() => {
    window.addEventListener('wheel', handleScroll);
  }, 500);
 
  return () => {
    window.removeEventListener('wheel', handleScroll);
    clearInterval(intervalId);
  };
});

function updatePagesRight(){
  updateOldVar(varAtual === 2 ? 3 : 1);
  updatePageVar(varAtual + 1);
}
function updatePagesLeft(){
  updateOldVar(varAtual === 3 ? 3 : 1);
  updatePageVar(varAtual - 1);
}

const handleScroll = (event) => {
  if(!hoverProjetos && !hoverSobre && openDetalhes === 0){
    if (event.deltaY < 0 && varAtual > 1) {
      updateOldVar(varAtual === 3 ? 3 : 1);
      updatePageVar(varAtual - 1);
    } else if (event.deltaY > 0 && varAtual < 3) {
      updateOldVar(varAtual === 2 ? 3 : 1);
      updatePageVar(varAtual + 1);
    }
  }else{
    return;
  }
  
};


  return (
    <>
    {varAtual !== 3 ?(<>
    <div className={`container_direita ${animacaoAtiva ? 'animar' : ''}`} onMouseEnter={updateAnimation} onMouseLeave={updateAnimation} onClick={updatePagesRight}>
    <h2 className='next_Page'>{varAtual === 1 ? 'Projetos' : 'Sobre Mim'}</h2>
    <div className="nav direita"><FontAwesomeIcon icon={faChevronRight}/></div></div></>) : null }
    {varAtual !== 1 ? (<>
    <div className={`container_esquerda ${animacaoAtiva ? 'animar' : ''}`} onMouseEnter={updateAnimation} onMouseLeave={updateAnimation} onClick={updatePagesLeft}>
    <h2 className='prev_Page'>{varAtual === 3 ? 'Projetos' : 'Inicio'}</h2>
    <div className="nav esquerda"><FontAwesomeIcon icon={faChevronLeft}/></div></div></>) : null }
    
    </>
  );
}

export default Navs;