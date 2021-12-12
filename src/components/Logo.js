import React from "react";
import GoogleDiveLogo from "../Images/google_drive.png";

const Logo = () => {
    return (
        <div
            className="hidden md:flex md:w-2/12 flex-shrink-0
        pl-4 items-center">
            <img className="w-9" src={GoogleDiveLogo} alt="" />
            <h1 className="mx-3 text-2xl text-gray-600">Drive</h1>
        </div>
    );
};

export default Logo;
