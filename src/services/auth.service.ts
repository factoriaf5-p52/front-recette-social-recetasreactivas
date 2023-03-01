import axios from 'axios';

type User = {
    email:string,
    password:string
}
export const authService = {
    baseUrl: 'https://backendrecettesocial-production.up.railway.app/api/v1/auth',
    login(user:User){
        return axios.post(this.baseUrl.concat('/login'),user)
    },
    register(user:User){
        return axios.post(this.baseUrl.concat('/register'),user)
    }
}