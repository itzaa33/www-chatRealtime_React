import React from 'react';
import Massage from './Message'
import * as TypeMassage from './Message'

import './index.css'

type PropsType =
    {
        sender: string;
        listchats: TypeMassage.Value[];
        handleDisplay(): void;
    }


const Comp: React.FC<PropsType> = (
    {
        listchats,
        sender,
        handleDisplay,
    },
) =>
{
    return (
        <React.Fragment>
            <div className="chat-box-header">
                ChatBot
                <span className="chat-box-toggle" onClick={() => handleDisplay()}>
                    <i className="material-icons">close</i>
                </span>
            </div>
            <div className="chat-box-body">
                <div className="chat-box-overlay">
                </div>
                <div className="chat-logs">
                    {
                        listchats?.map((item, index) =>
                        {

                            if (item.sender === sender)
                            {
                                return (
                                    <Massage
                                        key={index}
                                        id={item.id}
                                        message={item.message}
                                        sender={item.sender}
                                        className={"self"}
                                    />
                                )
                            }
                            else
                            {
                                return (
                                    <Massage
                                        key={index}
                                        id={item.id}
                                        message={item.message}
                                        sender={item.sender}
                                        className={"user"}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Comp;
