import style from './Menu.module.css';
import cmdlogo from './../../img/cmd.png';
import { useSelector } from 'react-redux';

const Menu = ({ setClose, setOpen, openCmd, modal, setModal }) => {

    const bgColor = useSelector(state => state.printState.background)
    const close = () => {
        setClose(true);
    }
    const open = () => {
        if (openCmd === false) {
            setOpen(true);
        }
        else if (openCmd === true) {
            setOpen(false);
        }
    }
    const openModal = () => {
        if (modal === false) {
            setModal(true);
        }
        else if (modal === true) {
            setModal(false);
        }
         
    }
    return (
        <div className={style.cmd} style={{ backgroundColor:bgColor}}>
            <div className={style.leftLogo}>
                <img src={cmdlogo} alt='consoleImage' className={style.logo} />
                <span className={style.stringLogo}>Командная строка</span>
            </div>
            <div className={style.btn}>
                <div><button className={style.question} onClick={openModal}>?</button></div>
                <div> <button className={style.open} onClick={open}>&#x2610;</button></div>
                <div><button className={style.close} onClick={close}>✖</button></div>
            </div>
        </div>
    )
}


export default Menu;