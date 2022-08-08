import style from './Console.module.css';
import Menu from './Menu/Menu';
import React, { useEffect, useState } from 'react';
import Content from './content/Content';
import Print from './Print/Print';
import UserAgent from './userAgent/UserAgent';
import { useSelector } from 'react-redux';


const Console = ({ setClose, setOpen, open }) => {

    const [modal, setModal] = useState(false);
    
    return (
        <div className={open ? style.cmdOpen : style.cmd} >
            <div>
                <div>
                    <Menu setClose={setClose} setOpen={setOpen} openCmd={open} setModal={setModal} modal={modal} />
                </div>
                <div className={style.textColor}>
                    <UserAgent />
                </div>
                <div className={style.content}>
                    <Content setModal={setModal} modal={modal} />
                </div>
            </div>
            <div> <Print /></div>
        </div>
    )
}


export default Console;