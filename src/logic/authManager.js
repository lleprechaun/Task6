import { $error } from './errorManager'

const urlLogin = 'https://internsapi.public.osora.ru/api/auth/login';
const urlRegister = 'https://internsapi.public.osora.ru/api/auth/signup';
const authorization = `Basic ${btoa("Dev:qdprivate")}`;

class AuthManager {

    getToken() {
        return localStorage.getItem('access_token');
    }
    setToken(token) {
        localStorage.setItem('access_token', token);
    }

    async login(email, pass) {
        if(!email) return $error.showError('Email обязателен.');
        if(!pass) return $error.showError('Password обязателен.');

        const request = {
            email: email,
            password: pass
        }
        try {
            return (await fetch(urlLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                },
                body: JSON.stringify(request)
            })).json()
        } catch (err) {
            return $error.showError(err)
        }
    }

    async register(name, email, pass, confirmPass) {
        if(!name) return $error.showError('Name обязателен.');
        if(!email) return $error.showError('Email обязателен.');
        if(!pass) return $error.showError('Password обязателен.');
        if(!confirmPass) return $error.showError('Confirm password обязателен.');

        const request = {
            name: name,
            email: email,
            password: pass,
            password_confirmation: confirmPass
        }
        try {
            return (await fetch(urlRegister, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                },
                body: JSON.stringify(request)
            })).json()
        } catch (err) {
            return $error.showError(err)
        }
    }

}
const $auth = new AuthManager();
export { $auth };
