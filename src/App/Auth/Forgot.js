import React from "react";
import { useFormik } from "formik";
import Input from "../../components/input";
import FormAction from "../../components/FormAction";
import FormCard from "../../components/FormCard";
import { validate, type } from "../../Helper/JoiSchemaValidation";
import { useHistory } from "react-router-dom";
import { forgot } from "../../API/AuthServices";
import AuthWrapper from "../../components/AuthWrapper";
import Toastify from "../../components/ToastServices";

function Forgot() {
    const handleSubmit = (value) => {
        Toastify(forgot(value), {
            pending: "Sending Email",
            onSuccess: () => "Email Sent",
            onError: (data) => {
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });
    };

    const history = useHistory();

    const navigateToLogin = (e) => {
        history.push("/login");
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: (value) => validate(value, type.EMAIL),
        onSubmit: handleSubmit,
    });
    return (
        <AuthWrapper>
            <FormCard title="Forgot" titleColor="bg-red-500">
                <form className="mt-16">
                    <Input
                        label={"Email"}
                        placeholder="Enter your email"
                        field="email"
                        formik={formik}
                    />

                    <FormAction formik={formik} action={"send mail"} secondary={"clear"} />
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={navigateToLogin}
                        className="text-blue-900 hover:text-blue-500 hover:underline text-sm">
                        Did you remember password?
                    </button>
                </div>
            </FormCard>
        </AuthWrapper>
    );
}

export default Forgot;
