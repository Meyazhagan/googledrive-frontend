import React from "react";
import { useFormik } from "formik";
import Input from "../../components/input";
import FormAction from "../../components/FormAction";
import { validate, type } from "../../Helper/JoiSchemaValidation";
import FormCard from "../../components/FormCard";
import { useHistory } from "react-router-dom";
import { login, setToken } from "../../API/AuthServices";
import AuthWrapper from "../../components/AuthWrapper";
import Toastify from "../../components/ToastServices";

function Login() {
    const handleSubmit = (value) => {
        Toastify(login(value), {
            pending: "Processing Loging",
            onSuccess: ({ data }) => {
                const {
                    success: { token },
                } = data;
                console.log(token);
                setToken(token);
                window.location = "/";
                return `Logged In Successfully`;
            },
            onError: (data) => {
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });
    };

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (value) => validate(value, type.LOGIN),
        onSubmit: handleSubmit,
    });
    return (
        <AuthWrapper>
            <FormCard title="Login" titleColor="bg-green-400">
                <form className="mt-16">
                    <Input
                        label={"Email"}
                        placeholder="Enter your email"
                        field="email"
                        formik={formik}
                    />
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        field="password"
                        formik={formik}
                    />
                    <FormAction formik={formik} action={"Login"} secondary={"clear"} />
                </form>
                <div className="text-center mt-4 flex justify-between">
                    <button
                        onClick={() => navigateTo("/forgot-password")}
                        className="text-blue-900 hover:text-blue-500 hover:underline text-sm">
                        Forgot Password?
                    </button>
                    <button
                        onClick={() => navigateTo("/register")}
                        className="text-blue-900 hover:text-blue-500 hover:underline text-sm">
                        Create An Account?
                    </button>
                </div>
            </FormCard>
            <button
                onClick={() => navigateTo("/resend-verification")}
                className="text-blue-900 hover:text-blue-500 hover:underline text-sm">
                Not Yet Verified?
            </button>
        </AuthWrapper>
    );
}

export default Login;
