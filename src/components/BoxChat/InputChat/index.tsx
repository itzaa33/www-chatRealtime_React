import React, { useState } from 'react';
import './index.css'

type PropsType =
    {
        sendMessage(message: string): void;
    }

const Comp: React.FC<PropsType> = (
    {
        sendMessage,
    }
) =>
{

    const [message, setMessage] = useState('')

    function onSubmit(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();

        if (message.length > 0)
        {
            sendMessage(message)
            setMessage('')
        }
    }

    function hanldeChane(e: React.ChangeEvent<HTMLInputElement>)
    {
        const keyword = e.target.value;
        setMessage(keyword)
    }

    return (
        <div className="chat-input">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    id="chat-input"
                    value={message}
                    onChange={hanldeChane}
                    placeholder="Send a message..."
                />
                <button type="submit" className="chat-submit" id="chat-submit">
                    <i className="material-icons">send</i>
                </button>
            </form>
        </div>
    );
}

export default Comp;
