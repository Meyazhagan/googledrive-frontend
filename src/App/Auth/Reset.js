import React from "react";
import { useFormik } from "formik";
import Input from "../../components/input";
import FormAction from "../../components/FormAction";
import FormCard from "../../components/FormCard";
import { validate, type } from "../../Helper/JoiSchemaValidation";
import { useHistory, useParams } from "react-router-dom";
import { resetPassword } from "../../API/AuthServices";
import AuthWrapper from "../../components/AuthWrapper";
import Toastify from "../../components/ToastServices";

function ResetPassword() {
    const { resetToken } = useParams();
    const handleSubmit = async (value) => {
        Toastify(resetPassword(resetToken, value), {
            pending: "Processing Reset Password",
            onSuccess: () => "Reset Password Successfully",
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
        validate: (value) => validate(value, type.PASSWORD),
        onSubmit: handleSubmit,
    });
    return (
        <AuthWrapper>
            <FormCard title="Reset Password" titleColor="bg-pink-600" error={"Invalid Email"}>
                <form className="mt-16">
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
                    <FormAction formik={formik} action={"send mail"} secondary={"clear"} />
                </form>
            </FormCard>
            <div className="text-center mt-4">
                <button
                    onClick={navigateToLogin}
                    className="text-blue-900 hover:text-blue-500 hover:underline text-sm">
                    Login?
                </button>
            </div>
        </AuthWrapper>
    );
}

export default ResetPassword;
