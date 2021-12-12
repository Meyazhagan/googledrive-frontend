import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#modal");

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

function MyModal({ children, isOpen, closeModal }) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                {children}
            </Modal>
        </div>
    );
}

export default MyModal;
