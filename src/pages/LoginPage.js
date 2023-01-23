import { Link } from 'react-router-dom'
import { Login } from '../components/Login.js'
const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>Нет аккаунта? <Link to='/register'>Регистрация</Link></p>
        </div>
    )
}

export default LoginPage
