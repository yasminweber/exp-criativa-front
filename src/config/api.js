import axios from "axios";
import { getToken } from "../config/auth";
//require('dotenv').config();

const api = axios.create({
    // baseURL: 'https://all-4-one-back.herokuapp.com'
    baseURL: 'http://localhost:4000'
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;