import style from './Modal.module.css';
import React from 'react';

function Modal(props) {
    debugger
    const hmh = () => {
        debugger
        props.setActive(false)
    }
    return (
        <div className={props.active ? style.modal_active : style.modal} onClick={hmh}>
            <div className={style.modal_body} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );

}

export default Modal;
