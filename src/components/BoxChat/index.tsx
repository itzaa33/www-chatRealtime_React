import React from 'react';
import InputChat from './InputChat'
import ListChat from './ListChat'
import * as TypeMassage from './ListChat/Message'

import './index.css'

type PropsType =
    {
        sender: string;
        listchats: TypeMassage.Value[];
        sendMessage(message: string): void;
        handleDisplay(): void;
    }

const Comp: React.FC<PropsType> = (
    {
        sender,
        listchats,
        sendMessage,
        handleDisplay
    },
) =>
{

    return (
        <div className="chat-box">
            <ListChat
                sender={sender}
                listchats={listchats}
                handleDisplay={handleDisplay}
            />
            <InputChat sendMessage={sendMessage} />
        </div>
    );
}

export default Comp;
