import React from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { createFile } from "../../API/FileServices";
import Toastify from "../../components/ToastServices";
import useFolderContext from "../../Context/FolderContext";

function CreateFile({ setIsOpen }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        maxSize: 10 * 1024 * 1024,
    });
    const { id } = useParams();

    const { fileState } = useFolderContext();

    const setSubFile = fileState[1];

    const handleCreateFile = async (e) => {
        if (!acceptedFiles[0]) return;
        const formData = new FormData();
        formData.append("file_upload", acceptedFiles[0]);
        formData.append("parentFolder", id);

        Toastify(createFile(formData), {
            pending: "Processing New File",
            onSuccess: ({ data }) => {
                const { file } = data;
                setSubFile((prevSubFile) => [...prevSubFile, file]);
                setIsOpen(false);

                return "File Created Successfully";
            },
            onError: (data) => {
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });
    };

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <>
            <section className="bg-gray-200 p-2 rounded-lg mt-4">
                <div
                    {...getRootProps({
                        className: `bg-gray-200 p-4 text-center min-w-max rounded-lg
                    border-dashed border-gray-500 border-2`,
                    })}>
                    <input {...getInputProps()} />
                    <p>Drop files here</p>
                    <FiUpload className="mx-auto mt-5 text-2xl animate-bounce" />
                </div>
                <aside className="mt-4">
                    <ul>{files}</ul>
                </aside>
            </section>
            <div className="flex items-center justify-evenly gap-3">
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-red-600 w-full
                    px-3 py-2 mt-4 rounded-md 
                    hover:bg-red-700 text-white">
                    Cancel
                </button>
                <button
                    onClick={handleCreateFile}
                    className="bg-blue-600 w-full
                        px-3 py-2 mt-4 rounded-md 
                        hover:bg-blue-700 text-white">
                    Upload
                </button>
            </div>
        </>
    );
}

export default CreateFile;
