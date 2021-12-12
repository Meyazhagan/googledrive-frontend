import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

axios.interceptors.request.use((config) => {
    config.headers.auth_token = localStorage.getItem("token");
    return config;
});

const methods = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};

export default methods;
