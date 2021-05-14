import React, { useState } from 'react';
import './Styles.css';

const Square = props => {

    const[connected, setConnected] = useState(null)

    let handleOnClick = props => {
        setConnected(props.connected)
        setTimeout(() => {setConnected('')}, 3000);
    }

    return (
        <div 
            style={(props.value === 1) ? {backgroundColor: props.mainColor} : {backgroundColor: props.backgroundColor}}
            className = {props.value === 1? "square filled" : "square"}
            onClick={(props.value === 1) ? () => handleOnClick(props) : undefined}
        >
            {connected}
        </div>
    )
}

export default Square;
