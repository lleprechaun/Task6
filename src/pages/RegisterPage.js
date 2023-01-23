import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h1>Регистрация</h1>
            <p>Есть аккаунт? <Link to='/login'>Войти</Link></p>
        </div>
    )
}

export default RegisterPage
