import React from 'react';
import './modal.scss'
function Modal({closeModal}){
    return (
        
            <div className='modal'>
                <button onClick={()=>{
                    closeModal(false)
                }}>X</button>
                <h1> This id a modal</h1>
            </div>
    );
};

export default Modal;