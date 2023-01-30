import { $auth } from '../logic/authManager'
import { useNavigate } from "react-router-dom";
import { $error } from '../logic/errorManager'

const Login = () => {
    const inputs = [
        {
            id: 0,
            type: 'email',
            placeholder: 'email',
            value: ''
        },
        {
            id: 1,
            type: 'password',
            placeholder: 'пароль',
            value: ''
        }
    ];
    const navigate = useNavigate();
    async function Auth() {
        validation();
        const response = await $auth.login(inputs[0].value, inputs[1].value)
        console.log(response)
        if (response?.status){
            $auth.setToken(response.data.access_token)
            navigate('/');
        }
    }
    function validation() {
        const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regex.test(inputs[0].value)) {
            return $error.showError('Email недействителен.');
        }
    }
    return (
        <div className={'flex-column'}>
            {
                inputs.map(input => (
                    <input
                        className={'input'}
                        key={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={(e) => input.value = e.target.value}
                    />
                ))
            }
            <button
                className={'button'}
                onClick={ Auth }
            >
                Войти
            </button>
        </div>
    )
}

export { Login };
