import { useSelector } from 'react-redux';
import style from './Content.module.css';
import QuestionModal from './Modal/qustionModal';
const Content = ({ modal,setModal }) => {

    const printText = useSelector((state) => state.printState.print)
    const chuk = useSelector((state) => state.printState.weather)
    

    return (
        <div className={style.content} >
            {printText.map(text => <div key={text}>{text}</div>)}
            <div >
                <img src={`${chuk}`} className={style.chuk} />
            </div>
            <div >
                {modal ? <QuestionModal modal={modal} setModal={setModal}/>:null}
            </div>
        </div>
    )
}
export default Content;