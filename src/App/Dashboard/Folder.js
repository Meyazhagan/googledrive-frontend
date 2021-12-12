import React, { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { get } from "../../API/FolderServices";
import { FaFolder } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useFolderContext from "../../Context/FolderContext";

function Folder() {
    const { id } = useParams();
    const { folderState, fileState, pathState } = useFolderContext();

    const [subFolder, setSubFolder] = folderState;
    const [subFile, setSubFile] = fileState;
    const [paths, setPaths] = pathState;
    const history = useHistory();

    const fetchFolder = useCallback(
        async () => {
            try {
                const {
                    data: { folder },
                } = await get(id);
                const { files, folders, pathIds } = folder;
                setSubFolder(folders);
                setSubFile(files);
                pathIds.push(folder);
                setPaths(pathIds);
            } catch (err) {
                history.push("/");
            }
        },
        // eslint-disable-next-line
        [id, history]
    );

    useEffect(() => {
        fetchFolder();
    }, [id, fetchFolder]);
    return (
        <div className=" w-full h-full">
            <div
                className="pb-1 px-4 flex items-center
                    overflow-x-auto
                    border-b border-gray-300">
                {paths.map((dir, i) => (
                    <button
                        className="flex-shrink-0 cursor-pointer"
                        onClick={(e) => {
                            // e.preventDefault();
                            history.push(`/folder/${dir._id}`);
                        }}>
                        <span className="hover:bg-gray-100 p-2 rounded-md inline-block">
                            {dir.folderName === "root" ? "My Drive" : dir.folderName}
                        </span>
                        {paths.length - 1 === i || (
                            <MdOutlineKeyboardArrowRight className="inline-block mx-2 text-2xl text-gray-400" />
                        )}
                    </button>
                ))}
                {paths.length === 0 && <div>My Drive</div>}
            </div>
            <div className="overflow-y-scroll h-my">
                <div className="mx-8 md:mr-16 md:ml-4 mt-4">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-full">Folder</div>
                        {subFolder.length <= 0 && (
                            <div className="col-span-full">No Folder Created</div>
                        )}
                        {subFolder.map((folder, i) => (
                            <button
                                className="col-span-6 md:col-span-4 lg:col-span-3 bg-red-30"
                                key={i}
                                onDoubleClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/folder/${folder._id}`);
                                }}>
                                <div
                                    className="p-3 border border-gray-300
                            cursor-pointer rounded-md select-none hover:bg-blue-50
                            flex gap-4 items-center">
                                    <FaFolder className="text-gray-500 text-xl" />
                                    <span className="text-sm">{folder.folderName}</span>
                                </div>
                            </button>
                        ))}
                        <div className="col-span-full">File</div>
                        {subFile.length <= 0 && (
                            <div className="col-span-full">No File Created</div>
                        )}
                        {subFile.map((file, i) => (
                            <div
                                className="col-span-6 md:col-span-4
                    lg:col-span-3 bg-red-30"
                                key={i}>
                                <div
                                    className="border border-gray-300
                        overflow-hidden bg-gray-100 items-center
                        rounded-md flex flex-col justify-between">
                                    <div className="p-10">
                                        <BsImage className="text-gray-500 text-8xl mx-auto" />
                                    </div>
                                    <div className="flex items-center bg-white p-4 gap-4 w-full">
                                        <CgLoadbarDoc className="text-blue-700 text-xl" />
                                        <span className="text-sm font-semibold text-gray-700">
                                            {file.fileName}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Folder;
