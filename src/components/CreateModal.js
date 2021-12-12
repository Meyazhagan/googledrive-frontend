import classNames from "classnames";
import React, { useEffect, useState } from "react";
import CreateFile from "../App/Dashboard/CreateFile";
import CreateFolder from "../App/Dashboard/CreateFolder";
import MyModal from "./Modal";

const type = {
    FOLDER: "FOLDER",
    FILE: "FILE",
};

const Button = ({ onClick, active, children }) => (
    <button
        onClick={onClick}
        className={classNames("px-3 py-2 my-2 rounded-lg", {
            "bg-blue-200": active,
            "hover:bg-gray-100": !active,
        })}>
        {children}
    </button>
);

function CreateModal({ isOpen, setIsOpen }) {
    const [action, setAction] = useState(type.FOLDER);
    const handleClick = (action) => setAction(action);
    useEffect(() => {
        return () => setAction(type.FOLDER);
    }, []);
    return (
        <MyModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
            <div className="space-x-4">
                <Button onClick={() => handleClick(type.FOLDER)} active={action === type.FOLDER}>
                    Create Folder
                </Button>
                <Button onClick={() => handleClick(type.FILE)} active={action === type.FILE}>
                    Create File
                </Button>
            </div>
            {action === type.FOLDER && <CreateFolder setIsOpen={setIsOpen} />}
            {action === type.FILE && <CreateFile setIsOpen={setIsOpen} />}
        </MyModal>
    );
}

export default CreateModal;
