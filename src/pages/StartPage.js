import { $game } from '../logic/gameManager'
import { $auth } from "../logic/authManager";
import { useNavigate } from "react-router-dom";

const StartPage = () => {

    /*----------------------------------ARGUMENTS----------------------------------*/

    let value = 1;
    const navigate = useNavigate();

    /*----------------------------------FUNCTIONS----------------------------------*/

    async function start() {
        const response = await $game.start(value);
        console.log(response)
        if (response?.status){
            navigate('/test/1');
        }
    }

    /*----------------------------------HTML----------------------------------*/

    return (
        <div className={'flex-column start'}>
            <div className={'flex-column'}>
                <h1>Начало</h1>
                <select className={'input'} onChange={(e) => value = e.target.value}>
                    <option disabled={true} value>Выберите сложность</option>
                    <option value={1}>Easy / Легко</option>
                    <option value={2}>Hard / Тяжело</option>
                </select>
                <button
                    className={'button'}
                    onClick={ start }
                >Start</button>
            </div>
        </div>
    )
}

export default StartPage
