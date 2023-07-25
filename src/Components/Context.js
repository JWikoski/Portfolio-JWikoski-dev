import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [varAntiga, SetVarAntiga] = useState(1);
  const [varAtual, SetVarAtual] = useState(1);
  const [hoverProjetos, SetHoverProjetos] = useState(false);
  const [hoverSobre, SetHoverSobre] = useState(false);
  const [openDetalhes, SetOpenDetalhes] = useState(false);
  
  const updatePageVar = (newValue) => {
    SetVarAtual(newValue);
  }; 

  const updateOldVar = (newValue) => {
    SetVarAntiga(newValue);
  }; 

  const updateHoverProj = (newValue) => {
    SetHoverProjetos(newValue);
  };

  const updatetHoverSobre = (newValue) => {
    SetHoverSobre(newValue);
  };

  const updatetOpenDetalhes = (newValue) => {
    SetOpenDetalhes(newValue);
  };

  const contextValues = { varAtual, updatePageVar, hoverProjetos, updatetHoverSobre, hoverSobre, updatetOpenDetalhes, openDetalhes, updateHoverProj, varAntiga, updateOldVar}; // incluindo as variaveis e funções que quero exportar

  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
};
