import http from './httpService';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndPoint = apiUrl + "/auth";
const token = "token";

http.setJwt(getJwt());

async function login(email, password) {
    const { data: jwt } = await http.post(apiEndPoint, { email, password });
    localStorage.setItem(token, jwt);
}

function loginWithJwt(jwt) {
    localStorage.setItem(token, jwt);
}

function logout() {
    localStorage.removeItem(token);
}

function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(token);
        return jwtDecode(jwt);
      } catch(ex) {
        return null;
      }
}

function getJwt() {
    return localStorage.getItem(token);
}

export default {
    login,
    loginWithJwt,
    logout, 
    getCurrentUser,
    getJwt
}