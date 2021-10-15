import React from 'react';
import style from './Radio.module.css';

const Radio = (props) => {
    return (
        < >
            <input className={style.radio} value={props.id} type="radio" name={props.name} id={props.id} />
            <label className={style.label} for={props.for}>{props.label}</label>
        </>
    )
}

export default Radio;
