import React, { useState } from 'react';
import { senderType } from '../../App'

import './index.css'

type PropsType =
    {
        setSender: React.Dispatch<React.SetStateAction<senderType>>;
    }


const Comp: React.FC<PropsType> = (
    {
        setSender
    },
) =>
{
    const [display, setDisplay] = useState(true)

    function onCLick(sender: senderType)
    {
        setSender(sender)
        setDisplay(false)
    }

    if (!display)
    {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">กรุณาเลือก User เพื่อเข้าสู่ระบบ</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => onCLick("A")}> User A</button>
                        <button type="button" className="btn btn-primary" onClick={() => onCLick("B")} > User B</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comp;
