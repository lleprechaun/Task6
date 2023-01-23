const urlLogin = 'https://internsapi.public.osora.ru/api/auth/login';
const urlRegister = 'https://internsapi.public.osora.ru/api/auth/signup';

class Auth{

    constructor() {

    }

    async login(email, pass) {
        if(!email) return new Error('Email не должен быть пустым!').message;
        if(!pass) return new Error('Пароль не должен быть пустым!').message;
        let result = '';
        const credentials = btoa("Dev:qdprivate");
        await fetch(urlLogin, {
            method: 'POST',
            headers: {
                email: email,
                password: pass,
                'Access-Control-Allow-Origin': 'no-cors',
                'Authorization': `Basic ${credentials}`
            }
        })
            .then((result) => {
                if (result.status !== 200) {
                    throw new Error("Bad Server Response");
                }
                return result.text();
            })
            .then((response) => {
                return response.json();
            })
            .catch((error) => { console.log(error); });
    }
}
const auth = new Auth();
export { auth };
