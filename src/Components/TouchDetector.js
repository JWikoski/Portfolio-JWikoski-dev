import React, { useRef, useContext } from 'react';
import { MyContext } from "./Context";

const TouchDetector = ({ children }) => {
const { varAtual, updatePageVar, hoverProjetos, hoverSobre, updateOldVar, openDetalhes } = useContext(MyContext);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
        if (touchStartX.current && touchEndX.current ) {
        const deltaX = touchEndX.current - touchStartX.current;
            // Movimento horizontal
            if (deltaX > 70 && varAtual > 1) {
                updateOldVar(varAtual === 3 ? 3 : 1);
                updatePageVar(varAtual - 1);
            } else if (deltaX < -70 && varAtual < 3) {
                updateOldVar(varAtual === 2 ? 3 : 1);
                updatePageVar(varAtual + 1);
            }
        }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </div>
  );
};

export default TouchDetector;