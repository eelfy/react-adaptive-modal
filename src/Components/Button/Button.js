import style from './Button.module.css';
import React from 'react';

function Button(props) {
    return (
        <>
            <button
                style={props.style}
                onClick={props.onClick}
                className={props.type === 'outlined' ? style.outlined :
                    props.type === 'text' ? style.text :
                        style.contained
                }>
                {props.text}
            </button>
        </>
    );

}

export default Button;
