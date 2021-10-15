import style from './Checkbox.module.css';
import React from 'react';

function Checkbox(props) {
    return (
        <>
            <input className={style.checkbox} id={props.id} name={props.name} value={props.value} type='checkbox' />
            <label className={style.label} for={props.year}></label>
        </>
    );
}

export default Checkbox;
