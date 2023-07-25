import React, { useState, useContext } from 'react';
import '../CSS/MenuPrincipal.css';
import { MyContext } from "./Context";

const Menu = () => {
  const { varAtual, updatePageVar, updateOldVar } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  const selecionaMenu = (id) => {
    updateOldVar(varAtual === 2 && id === 3 ? 3 : varAtual === 2 && id === 1 ? 1 : 2);
    updatePageVar(id);
  };
  
  const toggleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu_container ${isOpen ? 'open' : ''}`}>
        <ul className="menu_list">
            <span className='seletor' style={{left: varAtual === 1 ? '24.3px' : varAtual === 2 ? '39.7%' : '77.5%'}}></span>
            <li className={`menu_item ${varAtual === 1 ? 'selected' : ''}`} onClick={() => selecionaMenu(1)}>Inicio</li>
            <li className={`menu_item ${varAtual === 2 ? 'selected' : ''}`} onClick={() => selecionaMenu(2)}>Projetos</li>
            <li className={`menu_item ${varAtual === 3 ? 'selected' : ''}`} onClick={() => selecionaMenu(3)}>Sobre mim</li>
        </ul>
    </div>
  );
}

export default Menu;
