import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { create } from "../../API/FolderServices";
import FormAction from "../../components/FormAction";
import Input from "../../components/input";
import Toastify from "../../components/ToastServices";
import useFolderContext from "../../Context/FolderContext";

function CreateFolder({ setIsOpen }) {
    const { id } = useParams();

    const { folderState } = useFolderContext();

    const setSubFolder = folderState[1];

    const handleSubmit = (value) => {
        value.parentFolder = id;
        Toastify(create(value), {
            pending: "Processing New Folder",
            onSuccess: ({ data }) => {
                const { folder } = data;
                setIsOpen(false);
                setSubFolder((prevSubFolder) => [...prevSubFolder, folder]);
                return "Folder Created Successfully";
            },
            onError: (data) => {
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            folderName: "",
        },
        validate: (value) => {
            const errors = {};
            if (!value.folderName) errors.folderName = "Folder Name is required";
            return errors;
        },
        onSubmit: handleSubmit,
        onReset: handleClose,
    });

    return (
        <div className="">
            <form className="mt-4">
                <Input
                    label={"Folder Name"}
                    placeholder="Enter your Folder Name"
                    field="folderName"
                    formik={formik}
                />

                <FormAction formik={formik} action={"create"} secondary={"close"} />
            </form>
        </div>
    );
}

export default CreateFolder;
