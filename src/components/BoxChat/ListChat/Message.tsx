import React from 'react';
import './Message.css'

export type Value =
    {
        id: string;
        sender: string;
        message: string;
    }

type PropsType =
    {
        className: string;
    } & Value

const Comp: React.FC<PropsType> = (
    {
        className,

        id,
        sender,
        message,
    },
) =>
{
    return (
        <div className={`chat-msg ${className}`}>
            <span className={"msg-avatar"}>
                {sender}
            </span>
            <div className={"cm-msg-text"}>{message}</div>
        </div>
    );
}

export default Comp;
