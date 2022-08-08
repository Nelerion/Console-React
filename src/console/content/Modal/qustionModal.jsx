import { useState } from 'react';
import style from './questionModal.module.css';

const QuestionModal = ({ modal, setModal }) => {

    const close = () => {
        setModal(false)
    }
    return (
        <div className={style.modalBG} onClick={close}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <div className={style.cmd}>Команды</div>
                <div className={style.cmdContent}>
                    <div className={style.cmdText}>
                        <span>Температура - ввести название города</span>
                        <span>$ip - ip адресс</span>
                        <span>$reduxT</span>
                        <span>$react</span>
                        <span>сhucknorris</span>
                    </div>
                    <div>
                        <input type='button' value='Закрыть' className={style.btnClose} onClick={close}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuestionModal;