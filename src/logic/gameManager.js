import { $error } from "./errorManager";
import { $auth } from './authManager'

const urlGame = 'https://internsapi.public.osora.ru/api/game/play';

const authorization = `Basic ${btoa("Dev:qdprivate")}`;
const token = `Bearer ${$auth.getToken()}`;

class gameManager {

    async start(typeHard) {
        const request = {
            'type_hard': typeHard,
            'type': 1
        }
        try {
            return (await fetch(urlGame, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization,
                    'X-Access-Token': token
                },
                body: JSON.stringify(request)
            })).json()
        } catch (err) {
            return $error.showError(err)
        }
    }

    async next(answer, typeHard) {
        const request = {
            'answer': answer,
            'type_hard': typeHard,
            'type': 2
        }
        try {
            return (await fetch(urlGame, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization,
                    'X-Access-Token': token
                },
                body: JSON.stringify(request)
            })).json()
        } catch (err) {
            return $error.showError(err)
        }
    }
}

const $game = new gameManager();
export { $game };
