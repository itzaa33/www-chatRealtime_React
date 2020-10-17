import React from 'react';

import './index.css'

type PropsType =
    {
        handleDisplay(): void;
    }


const Comp: React.FC<PropsType> = (
    {
        handleDisplay,
    },
) =>
{
    return (
        <div id="chat-circle" className="btn btn-raised" onClick={() => handleDisplay()}>
            <div id="chat-overlay" />
            <i className="material-icons">speaker_phone</i>
        </div>
    );
}

export default Comp;
