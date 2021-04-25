import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.15.21:3333',
})

export default api;

//192.168.15.21:19000 - expo