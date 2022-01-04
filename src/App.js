import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Login, Forgot, Register, ResentVerification, ResetPassword } from "./App/Auth";
import PrivateRouter from "./components/PrivateRouter";
import Home from "./App/Dashboard/Home";
import Drive from "./App/Dashboard/Drive";
import VerifyUser from "./App/Auth/VerifyUser";
import { loadProgressBar } from "axios-progress-bar";
import { FolderProvider } from "./Context/FolderContext";
import "react-toastify/dist/ReactToastify.css";
import "axios-progress-bar/dist/nprogress.css";

loadProgressBar();

function App() {
    return (
        <BrowserRouter>
            <FolderProvider>
                <Switch>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/register"} component={Register} />
                    <Route path={"/forgot-password"} component={Forgot} />
                    <Route path={"/reset-password/:resetToken"} component={ResetPassword} />
                    <Route path={"/resend-verification"} component={ResentVerification} />
                    <Route path={"/verify-activation/:verifyToken"} component={VerifyUser} />
                    <PrivateRouter path="/folder/:id" component={Drive} />
                    <PrivateRouter path="/" component={Home} />
                    <Redirect from="*" to="/" />
                </Switch>
                <ToastContainer />
            </FolderProvider>
        </BrowserRouter>
    );
}

export default App;
