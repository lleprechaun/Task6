import { $game } from '../logic/gameManager'
import { $auth } from "../logic/authManager";
import { $error } from "../logic/errorManager";
import {Navigate, useNavigate } from "react-router-dom";

const StartPage = () => {

    /*----------------------------------ARGUMENTS----------------------------------*/

    let value = 1;
    const navigate = useNavigate();
    const token = $auth.getToken();

    /*----------------------------------FUNCTIONS----------------------------------*/

    async function start() {
        const response = await $game.start(value);
        console.log(response)
        if (response?.status) {
            navigate('/test', {
                state: {
                    score: response.data.points,
                    time: response.data.time,
                    question: response.data.question,
                    answers: response.data.options,
                    type: value
                }
            });
            window.location.reload()
        } else {
            return $error.showError();
        }
    }

    /*----------------------------------HTML----------------------------------*/

    return token ? (
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
        : (
            <div>
                <Navigate to={'/login'} />
            </div>
        )
}

export default StartPage
