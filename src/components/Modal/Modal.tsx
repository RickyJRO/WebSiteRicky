import React from 'react'
import "./index.css"


export const Modal = ({ handleClose, show, children }:any) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">
          {children}
          <div className='closeModal'>
          X
        </div>
        </section>
        
      </div>
    );
  };