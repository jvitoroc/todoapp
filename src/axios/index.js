import axios from "axios";

axios.interceptors.response.use((response) => {
    return response;
}, function (error) {
    return Promise.reject(error.response);
});

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3333/api/v1',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/vnd.api+json'},
    responseType: 'json'
});

instance.interceptors.response.use((response) => {
    return response;
}, function (error) {
    return Promise.reject(error.response);
});


export default instance;