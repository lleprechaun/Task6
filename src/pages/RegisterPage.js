import { Link } from "react-router-dom";
import { Register } from "../components/Register";

const RegisterPage = () => {
    return (
        <div className={'flex-column auth-content'}>
            <h1>Регистрация</h1>
            <Register />
            <p className={'auth-text'}>Есть аккаунт? <Link to='/login'>Войти</Link></p>
        </div>
    )
}

export default RegisterPage
