import http from "./http";

const getUser = (id) => {
    return http.get(`/user/${id}`);
};

const register = (value) => {
    return http.post("/user/register", value);
};

const update = (id, value) => {
    return http.patch(`/user/update/${id}`, value);
};

// const delete =

export { getUser, register, update };
