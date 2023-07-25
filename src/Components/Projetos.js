import React, { useState, useContext, useRef  } from 'react';
import '../CSS/Projetos.css';
import { MyContext } from "./Context";
import DetalhesProjetos from "./DetalhesProjeto"

const Projetos = () => {
  const { varAtual, updateHoverProj, varAntiga, updatetOpenDetalhes } = useContext(MyContext);
  const containerProjetos = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScrollTop, setDragStartScrollTop] = useState(0);

    const EnterProjetos = () => {
      updateHoverProj(true);
    }
    const LeaveProjetos = () => {
      updateHoverProj(false);
      setIsDragging(false);
    }
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setDragStartY(event.clientY);
      setDragStartScrollTop(containerProjetos.current.scrollTop);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const dy = event.clientY - dragStartY;
      containerProjetos.current.scrollTop = dragStartScrollTop - dy;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    function updateDetalhes(value){
      console.log(value);
      updatetOpenDetalhes(value)
    }
  
    
  const listaDeProjetos = [
    { id: 1, nome: 'Página Inicial', linguagem: 'React e PostgreSQL', detalhes: 'Pojeto para x e y detalhes projeto teste', src: 'https://picsum.photos/1640/720'},
    { id: 2, nome: 'Inventário', linguagem: 'C# e PostgreSQL', detalhes: 'teste sdaihdia dhasudh asuidhasiudh asiuh a dhasudh asuidhasiudh asiuh diasuhd a dhasudh asuidhasiudh asiuh diasuhd a dhasudh asuidhasiudh asiuh diasuhd diasuhd iasuhd iasuh diausb asiubd asib dasibdiasbd iasbdibasidbsa', src: 'https://picsum.photos/1640/1080'},
    { id: 3, nome: 'Loja de Itens', linguagem: 'React e CSS', detalhes: '', src:'https://picsum.photos/1980/1080'},
    { id: 4, nome: 'Habilidades', linguagem: 'C# e PostgreSQL', detalhes: '', src: 'https://picsum.photos/1640/1080'}
  ];

  return (
    <>
    <div ref={containerProjetos} onMouseEnter={EnterProjetos} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}onMouseUp={handleMouseUp}
    onMouseOver={EnterProjetos} onMouseLeave={LeaveProjetos} className={`scroll container_projetos ${varAtual === 2 ? 'open' : ''}`} 
    style={{cursor: isDragging ? 'grabbing' : 'grab', transform: varAtual != 2 & varAntiga === 1 ? 'translateX(15%)' : varAtual != 2 & varAntiga === 3 ?
     'translateX(-15%)':  varAtual === 1 & varAntiga === 2 ? 'translateX(15%)' : 'translateX(0)'}}>
       
       {listaDeProjetos.map((Projeto) => (
        <div  key={Projeto.id} className='card_projeto' id={Projeto.id}  onClick={() => updateDetalhes(Projeto.id)}>
          <div className='img_projeto'><img src={Projeto.src} ></img></div>
          <span className='sep_line'></span>
          <h2>{Projeto.nome}</h2>
          <h4>{Projeto.linguagem}</h4>
          <p className='scroll'>{Projeto.detalhes}</p>
          <button className='saiba_mais'>Saiba Mais</button>
        </div>
       ))}
      </div>
       <DetalhesProjetos/>
       </>
  );
}

export default Projetos;