import React from 'react';
import style from './Print.module.css';
import { addPrint} from '../../Redux/Slices/printSlice';
import { getWeather} from '../../Redux/Slices/async/weather';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

const Print = () => {

    const inputValue = React.createRef();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const textChange = (e) => {
        setText(e.target.value);
    }

    const keyPrint = (e) => {
        if (e.key === 'Enter') {
            if (inputValue.current.value===inputValue.current.value) {
                dispatch(getWeather(inputValue.current.value));
                inputValue.current.value = '';
            }
            else {
                dispatch(addPrint(text));
                inputValue.current.value = '';
            }
        }
    }

    return (
        <div className={style.print}>
            <input ref={inputValue} type='text' placeholder='Введите команду' className={style.printText} onKeyDown={keyPrint} onChange={textChange}></input>
        </div>
    )
}
export default Print;