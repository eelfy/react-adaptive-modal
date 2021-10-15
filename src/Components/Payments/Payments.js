import React from 'react';
import payments from './Payments.module.css';
import checkbox from '../Checkbox/Checkbox.module.css';

import { observer } from "mobx-react-lite";
import state from '../../state/state';
import Checkbox from '../Checkbox/Checkbox';
const Payments = observer((props) => {
    return (

        <>
            {state.pays.length > 0 ? state.pays.map(pay => {
                return (
                    <div className={checkbox.body} key={pay.year}>
                        <Checkbox id={pay.year} name="pays" value={pay.value} year={pay.year} />
                        {/* <input id={pay.year} name="pays" value="yes" />*/}
                        <p>{pay.value} рублей <span style={{ color: "#808080" }}>в {pay.year}-ий год</span></p>
                    </div>
                )
            }) : null}
        </>

    )
})

export default Payments;
