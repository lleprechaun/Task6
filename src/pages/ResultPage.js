import {Navigate, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {$auth} from "../logic/authManager";


const ResultPage = () => {
    /*----------------------------------ARGUMENTS----------------------------------*/
    const location = useLocation();
    const result = {
        score: location.state?.score,
        questions: location.state?.questions
    }
    const token = $auth.getToken();

    /*----------------------------------FUNCTIONS----------------------------------*/
    useEffect(() => {
        const parent = document.querySelector('.table-tbody');
        if(token) {
            Object.keys(result.questions).forEach((key, index) => {
                const tbody = document.createElement('tr');
                tbody.className = 'table-tbody-tr';
                tbody.innerHTML = `<td>${result.questions[key].question}</td>
                            <td>
                                ${result.questions[key].current_answer === 1333 ? '' : result.questions[key].current_answer}
                            </td>
                            <td>${result.questions[key].answer}</td>`;
                parent.appendChild(tbody);
            })
        }
    }, [])
    /*----------------------------------HTML----------------------------------*/
    return token ? (
        <div className={'flex-column test-content'}>
            <div className={'flex-column'}>
                <p>Score: <b>{result.score}</b></p>
                <p>END GAME</p>
                <table className={'table'}>
                    <thead>
                        <tr className={'table-tr'}>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Correct</th>
                        </tr>
                    </thead>
                    <tbody className={'table-tbody'}>

                    </tbody>
                </table>
            </div>
        </div>
    ) :
        (
            <div>
                <Navigate to={'/login'} />
            </div>
        )
}

export default ResultPage
