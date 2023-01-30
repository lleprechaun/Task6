import { Navigate } from 'react-router-dom';
import { $auth } from '../logic/authManager'
import StartPage from "./StartPage";

const HomePage = () => {

    /*----------------------------------ARGUMENTS----------------------------------*/

    const token = $auth.getToken();

    /*----------------------------------HTML----------------------------------*/

    return token ?
        (
            <div>
                <Navigate to={'/start'} />
            </div>
        ) :
        (
            <div>
                <Navigate to={'/login'} />
            </div>
        )
}

export default HomePage
