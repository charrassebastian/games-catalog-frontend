import React from 'react';

interface PopupProps {
 trigger: React.ReactNode;
 children: React.ReactNode;
 closePopup: () => void;
 isOpen: boolean;
}

const Popup: React.FC<PopupProps> = ({ trigger, children, isOpen, closePopup }) => {
 

 return (
    <div className="popup">
      {trigger}
      {isOpen && <div className="popup-content">
      <button onClick={closePopup}>Cerrar</button>
         {children}
       </div>}
    </div>
 );
};

export default Popup;