import { Navigate } from 'react-router-dom';
import { $auth } from '../logic/authManager'
import { StartPage } from "./StartPage";

const HomePage = () => {
    const token = $auth.getToken();
    return token ?
        (
            <div>
                <StartPage />
            </div>
        ) :
        (
        <div>
            <Navigate to={'/login'} />
        </div>
    )
}

export default HomePage
