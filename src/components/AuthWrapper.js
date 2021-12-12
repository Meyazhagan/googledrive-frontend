import React from "react";
import GoogleDiveLogo from "../Images/google_drive.png";

function AuthWrapper({ children }) {
    return (
        <>
            <div className="flex items-center self-start p-6">
                <img className="w-9" src={GoogleDiveLogo} alt="" />
                <h1 className="mx-3 text-2xl text-gray-600">Drive</h1>
            </div>
            <div className="flex flex-col justify-center items-center h-my">{children}</div>
        </>
    );
}

export default AuthWrapper;
