import http from "./http";

const login = (body) => {
    return http.post("/auth/login", body);
};
const forgot = (body) => {
    return http.post("/auth/forgot-password", body);
};
const resetPassword = (token, body) => {
    return http.post(`/auth/reset-password/${token}`, body);
};
const resendActivation = (body) => {
    return http.post(`/auth/resend-activation`, body);
};
const verifyActivation = (token) => {
    return http.get(`/auth/verify-activation/${token}`);
};
const verifyResetToken = (token) => {
    return http.get(`/auth/verify-activation/${token}`);
};

const verifyToken = () => {
    return http.get("/verify-token");
};
const TOKEN = "token";
const setToken = (token) => {
    localStorage.setItem(TOKEN, token);
};
const getToken = () => {
    return localStorage.getItem(TOKEN);
};
const removeToken = () => {
    localStorage.removeItem(TOKEN);
};

export {
    login,
    forgot,
    resetPassword,
    resendActivation,
    verifyActivation,
    verifyResetToken,
    setToken,
    getToken,
    removeToken,
    verifyToken,
};
