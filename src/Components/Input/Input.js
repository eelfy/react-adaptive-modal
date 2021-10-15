import style from './Input.module.css';
import React from 'react';

function Input(props) {
    return (
        <>
            {props.error === '' ? <input className={style.input} {...props} /> :
                (
                    <>
                        <input className={style.input + ' ' + style.error} value={props.value}
                            onChange={props.onChange} />
                        <span className={style.error}> {props.error}</span>
                    </>
                )
            }
        </>
    );

}

export default Input;
