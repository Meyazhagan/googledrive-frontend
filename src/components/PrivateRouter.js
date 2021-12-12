import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../API/AuthServices";

const PrivateRouter = ({ path, component: Component, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={() => (getToken() ? <Component /> : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRouter;
