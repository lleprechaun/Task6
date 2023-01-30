import { Link } from 'react-router-dom'
import { Login } from '../components/Login.js'

const LoginPage = () => {

    /*----------------------------------HTML----------------------------------*/

    return (
        <div className={'flex-column auth-content'}>
            <h1>Вход</h1>
            <Login />
            <p className={'auth-text'}>Нет аккаунта? <Link to='/register'>Регистрация</Link></p>
        </div>
    )
}

export default LoginPage
