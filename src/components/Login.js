import { auth } from '../logic/auth'

const Login = () => {
    let email = '';
    let pass = '';
    function Auth() {
        const response = auth.login(email, pass)
        console.log(response)
    }
    return (
        <div>
            <input
                type={"email"}
                placeholder={"email"}
                onChange={(e) => email = e.target.value}
            />
            <input
                type={"password"}
                placeholder={"пароль"}
                onChange={(e) => pass = e.target.value}
            />
            <input
                type={"button"}
                value={"Войти"}
                onClick={ Auth }
            />
        </div>
    )
}

export { Login };
