import React from "react";
import Folder from "./Folder";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function Drive() {
    return (
        <>
            <TopBar />
            <div className="flex mt-4">
                <SideBar />
                <Folder />
            </div>
        </>
    );
}

export default Drive;
