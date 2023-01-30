import { $auth } from '../logic/authManager'
import { $error } from '../logic/errorManager'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const inputs = [
        {
            id: 0,
            type: 'text',
            placeholder: 'Имя',
            value: ''
        },
        {
            id: 1,
            type: 'email',
            placeholder: 'email',
            value: ''
        },
        {
            id: 2,
            type: 'password',
            placeholder: 'пароль',
            value: ''
        },
        {
            id: 3,
            type: 'password',
            placeholder: 'Подтверждение пароля',
            value: ''
        }
    ];
    const navigate = useNavigate()
    async function Auth() {
        validation();
        const response = await $auth.register(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value,)
        if (response?.status){
            navigate('/login');
        }
    }
    function validation() {
        const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regex.test(inputs[1].value)) {
            return $error.showError('Email недействителен.');
        }
        if (inputs[2].value !== inputs[3].value) {
            return $error.showError('Пароли не совпадают.');
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
                Зарегистрироваться
            </button>
        </div>
    )
}

export { Register };
