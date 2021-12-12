import React, { createContext, useContext, useState } from "react";

const FolderContext = createContext();

export default function useFolderContext() {
    return useContext(FolderContext);
}

export function FolderProvider({ children }) {
    const folderState = useState([]);
    const fileState = useState([]);
    const pathState = useState([]);

    return (
        <FolderContext.Provider
            value={{
                folderState,
                fileState,
                pathState,
            }}>
            {children}
        </FolderContext.Provider>
    );
}
