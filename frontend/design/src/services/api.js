import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:3001/apiRest"});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem("tokenUser");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})

export default api;