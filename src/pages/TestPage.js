import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {$game} from "../logic/gameManager";
import {$error} from "../logic/errorManager";
import React, { useState, useRef, useEffect } from 'react'
import {$auth} from "../logic/authManager";

const TestPage = () => {
    /*----------------------------------ARGUMENTS----------------------------------*/
    const location = useLocation()
    const [test, setTest] = useState({
            score: location.state?.score,
            time: location.state?.time,
            question: location.state?.question,
            answers: location.state?.answers,
            type: location.state?.type
    });

    const Ref = useRef(null);
    const [timer, setTimer] = useState(test.time);
    let id = null;
    const navigate = useNavigate();
    const token = $auth.getToken();

    /*----------------------------------FUNCTIONS----------------------------------*/

    //------time watch
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = total / 1000;
        return {
            total, seconds
        };
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + test.time);
        return deadline;
    }

    useEffect(() => {
        if(token) {
            clearTimer(getDeadTime())
            console.log(test.answers.length)
        }
    },[])

    const clearTimer = (e) => {
        setTimer(`${test.time}`);

        if (Ref.current) clearInterval(Ref.current);
        id = setInterval(() => {
            let { total, seconds }
                = getTimeRemaining(e);
            if (total >= 0) {
                setTimer(
                    `${seconds}`
                )
            } else {
                nextQstn(1333)
                clearInterval(id)
                setTimeout(() => {
                    clearTimer(getDeadTime())
                }, 1200);
            }
        }, 1000)
        Ref.current = id;
    }
    //------end time watch

    async function nextQstn(value) {
        value = Number(value);
        const response = await $game.next(value, test.type);
        if (response?.status) {
            setTest(oldState => ({
                score: response.data.points,
                time: response.data.time,
                question: response.data.question,
                answers: response.data.options,
                type: location.state.type
            }))
            if (Ref.current) clearInterval(Ref.current);
            clearInterval(id)
            clearTimer(getDeadTime())
            if(response?.data?.created_at) {
                clearInterval(id);
                navigate('/result', {
                    state: {
                        score: response.data.points,
                        questions: response.data.questions
                    }
                });
            }
        } else {
            return $error.showError(response.errors);
        }
        document.querySelector('.test-input').value = ''
    }

    /*----------------------------------HTML----------------------------------*/

    return token ? (
        <div className={'flex-column test-content'}>
            <div className={'flex-column'}>
                <p>Score: <b>{ test.score }</b></p>
                <p>Timer: <b>{ timer }</b></p>
                <p>{ test.question } = <b>?</b></p>
                {test.answers.length !== 0 ?
                    ( <div className={'test_test-btn'}>
                        <button className={'test-btn'}
                                onClick={(e) => nextQstn(e.target.innerHTML)}>
                            {test.answers[0]}
                        </button>
                        <button className={'test-btn'}
                                onClick={(e) => nextQstn(e.target.innerHTML)}>
                            {test.answers[1]}
                        </button>
                        <button className={'test-btn'}
                                onClick={(e) => nextQstn(e.target.innerHTML)}>
                            {test.answers[2]}
                        </button>
                        <button className={'test-btn'}
                                onClick={(e) => nextQstn(e.target.innerHTML)}>
                            {test.answers[3]}
                        </button>
                    </div> )
                    :
                    (<div className={'flex-column'}>
                        <div>
                            <input
                                className={'input test-input'}
                                type={'number'}
                                placeholder={'Ответ'}
                            />
                        </div>
                        <div>
                            <button
                                className={'test-btn'}
                                onClick={(e) => nextQstn(
                                    document.querySelector('.test-input').value
                                )}
                            >
                                Дальше
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    ) :
        (
            <div>
                <Navigate to={'/login'} />
            </div>
        )
}

export default TestPage
