import React from 'react';

interface PopupProps {
 children: React.ReactNode;
 isOpen: boolean;
}

const Popup: React.FC<PopupProps> = ({ children, isOpen }) => {
 

 return (
    <div className="popup">
      {isOpen && <div className="popup-content">{children}</div>}
    </div>
 );
};

export default Popup;