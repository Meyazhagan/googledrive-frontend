import http from "./http";

const getAll = () => {
    return http.get("/folders");
};

const get = (id) => {
    return http.get(`/folders/${id}`);
};

const create = (value) => {
    return http.post(`/folders`, value);
};

export { get, getAll, create };
