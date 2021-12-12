import React from "react";
import { useFormik } from "formik";
import Input from "../../components/input";
import FormAction from "../../components/FormAction";
import { validate, type } from "../../Helper/JoiSchemaValidation";
import FormCard from "../../components/FormCard";
import { useHistory } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import { register } from "../../API/UserServices";
import Toastify from "../../components/ToastServices";

function Register() {
    const handleSubmit = (value) => {
        console.log(value);
        Toastify(register(value), {
            pending: "Processing New User",
            onSuccess: () => "Register Successfully",
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            conformPassword: "",
        },
        validate: (value) => validate(value, type.USER),
        onSubmit: handleSubmit,
    });
    return (
        <AuthWrapper>
            <FormCard title="Register" titleColor="bg-blue-500">
                <form className="mt-16">
                    <Input
                        label={"First Name"}
                        placeholder="Enter your First Name"
                        field="firstName"
                        formik={formik}
                    />
                    <Input
                        label={"Last Name"}
                        placeholder="Enter your Last Name"
                        field="lastName"
                        formik={formik}
                    />
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
                    <Input
                        label={"Conform Password"}
                        placeholder="Conform password"
                        type="password"
                        password
                        field="conformPassword"
                        formik={formik}
                    />
                    <FormAction formik={formik} action={"register"} secondary={"clear"} />
                </form>
            </FormCard>
            <div className="text-center">
                <button
                    onClick={() => navigateTo("/login")}
                    className="text-blue-900 hover:text-blue-500 hover:underline text-sm">
                    Already have an account?
                </button>
            </div>
        </AuthWrapper>
    );
}

export default Register;
