import React, { useState, useContext, useRef, useEffect  } from 'react';
import '../CSS/SobreMim.css';
import { MyContext } from "./Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPuzzlePiece, faUserClock, faPaintbrush, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';

const SobreMim = () => {
  const { varAtual, updatetHoverSobre } = useContext(MyContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  
  const EnterSobre = () => {
    updatetHoverSobre(true);
  }
  const LeaveSobre = () => {
    updatetHoverSobre(false);
  }

  return (
    <>
        <div className={`scroll container_status ${varAtual === 3 ? 'open' : ''}`} onMouseEnter={EnterSobre} onMouseLeave={LeaveSobre}>
        <div className='div_direita'>
            <h2 style={{paddingTop: '5%'}}>Qualidades em Destaque</h2>
            <div className='content_icons'>
            <div className='text_destaque'><FontAwesomeIcon className='icon' icon={faLightbulb} /><p> Rápido aprendizado</p></div>
            <div className='text_destaque'><FontAwesomeIcon className='icon' icon={faPuzzlePiece} /><p> Flexibilidade</p></div>
            <div className='text_destaque'><FontAwesomeIcon className='icon' icon={faUserClock} /><p> Paciência</p></div>
            <div className='text_destaque'><FontAwesomeIcon className='icon' icon={faPaintbrush} /><p> Criatividade</p></div>
            </div>
        </div>
            <div className='div_esquerda'>
                <p className='scroll texto_sobre'>Olá! Meu nome é João Vitor Wikoski, e tenho 23 anos. Desde 2018 venho explorando linguagens e aprimorando minhas habilidades
                 no design e na criação de interfaces de usuário envolventes. Além disso, possuo sólidos conhecimentos em bancos de dados SQL, PostgreSQL e Firebird.<br /><br />

Uma das minhas grandes paixões é o desenvolvimento de interfaces, tanto para web como para aplicativos desktop. Minha abordagem é dinâmica e flexível, valorizando diversas 
perspectivas e buscando aprimorar as funcionalidades específicas de cada tela ou componente.<br /><br />

Valorizo a empatia, sendo paciente ao ouvir os usuários para compreender suas necessidades. Acredito que a criatividade é essencial para criar experiências memoráveis, 
busco sempre inovar e desenvolver soluções elegantes e intuitivas.<br /><br />

Se você está em busca de um desenvolvedor com paixão por interfaces de usuário e com uma abordagem centrada no usuário, estou empolgado para fazer parte do seu projeto!</p>
            </div>
        </div>
        <div className={`contacts ${isMobile ? 'open' : varAtual === 3 ? 'sobreMim' : 'closed'}`}  style={{top:'87%'}}>
           <span><FontAwesomeIcon icon={faGithub} className='social_media'/></span>  
           <span><FontAwesomeIcon icon={faLinkedin} className='social_media'/></span>   
           <span><FontAwesomeIcon icon={faEnvelope} className='social_media'/></span> 
           <span><FontAwesomeIcon icon={faWhatsapp} className='social_media' /></span>   
        </div>
        </>
  );
}

export default SobreMim;