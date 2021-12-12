import React, { useState } from "react";
import PlusIcon from "../../Images/plus.svg";
import DriveIcon from "../../Images/drive.svg";
import CreateModal from "../../components/CreateModal";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div
                className="hidden md:flex
            md:flex-col w-2/12 pr-4
            flex-shrink-0">
                <button
                    className="
                shadow-md flex py-2
                items-center gap-2 px-3
                rounded-full ml-3 mb-3 w-max"
                    onClick={() => setIsOpen(true)}>
                    <img src={PlusIcon} className="cursor-pointer" alt="Add New Folder" />
                    <span className="mr-2 font-bold text-gray-600">New</span>
                </button>
                <div
                    className="py-2 text-left px-4 w-full
                bg-blue-100 flex-shrink-0 cursor-pointer
                hover:bg-gray-100 rounded-r-full">
                    <button className="flex items-center text-sm lg:text-base ">
                        <img className="w-5 mr-2 text-red-500" src={DriveIcon} alt="" />
                        My Drive
                    </button>
                </div>
                <CreateModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <button
                className="md:hidden
                fixed bottom-5 right-5
                shadow-md p-2 
                rounded-full ml-3 mb-3 w-max"
                onClick={() => setIsOpen(true)}>
                <img src={PlusIcon} className="cursor-pointer" alt="Add New Folders" />
            </button>
        </>
    );
}

export default SideBar;
