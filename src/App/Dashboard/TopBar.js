import React, { useState } from "react";

import { MdSearch } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

import Logo from "../../components/Logo";
import Avatar from "../../Images/avatar.svg";
import MyModal from "../../components/Modal";
import { removeToken } from "../../API/AuthServices";

function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="flex items-center
            p-2 md:border-b border-gray-300 bg-white">
            <Logo />
            <div className="flex w-full justify-between">
                <div className="md:w-8/12 w-full">
                    <form>
                        <div
                            className="bg-gray-100 md:mx-8
                            flex px-3 py-2 md:py-3 gap-3 text-gray-700
                            items-center rounded-xl w-xl
                            focus-within:shadow-md focus-within:bg-white">
                            <MdSearch className="hidden md:block ml-2 text-2xl" />
                            <HiMenu className="ml-2 text-2xl md:hidden flex-shrink-0" />
                            <input
                                className="bg-transparent
                                w-full focus-within:outline-none"
                                placeholder="Search in Drive"
                                type="text"
                            />
                            <div
                                className="md:hidden flex items-center ml-2 flex-shrink-0"
                                onClick={() => setIsOpen(true)}>
                                <img
                                    src={Avatar}
                                    className="w-8 h-8 bg-gray-300 mr-4
                                    ring-gray-200 hover:ring-4
                                    rounded-full object-cover"
                                    alt="D"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <button
                    className="hidden md:flex items-center 
                    ml-2 flex-shrink-0 cursor-pointer mr-4 
                    ring-gray-200"
                    onClick={() => setIsOpen(true)}>
                    <img
                        src={Avatar}
                        className="w-10 h-10 bg-gray-300
                        ring-gray-200 hover:ring-4
                        rounded-full object-cover"
                        alt="D"
                    />
                </button>
            </div>
            <MyModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <div className="flex flex-col">
                    Are You Willing to Leave This Page?
                    <div className="flex justify-around pt-10">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-red-600 px-3 py-2
                        rounded-lg text-white hover:bg-red-700">
                            Cancel
                        </button>
                        <button
                            className="bg-blue-600 px-3 py-2
                            rounded-lg text-white hover:bg-blue-700"
                            onClick={() => {
                                removeToken();
                                window.location = "/";
                            }}>
                            Logout
                        </button>
                    </div>
                </div>
            </MyModal>
        </div>
    );
}

export default TopBar;
