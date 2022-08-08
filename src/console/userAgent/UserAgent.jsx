import React, { useEffect, useState } from 'react';
import style from './UserAgent.module.css';

const UserAgent = () => {

    const [textInner, setTextInner] = useState(0)
    let nav = navigator.userAgent;
    const arr = [nav];
    const [arrState, arrSetState] = useState([])
    let text = arr.map(i => i[textInner]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (arr.length > text.length) {
                return;
            }
            else {
                setTextInner(textInner + 1)
                arrSetState(arrState => [...arrState, text])
            }
        }, 25);
        return () => clearInterval(interval);
    }, [textInner]);

    return (
        <div className={style.userAgent}>{arrState}</div>
    )
}

export default UserAgent;