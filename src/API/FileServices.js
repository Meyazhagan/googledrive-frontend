import http from "./http";

const createFile = (value) => {
    return http.post(`/files`, value);
};

export { createFile };
