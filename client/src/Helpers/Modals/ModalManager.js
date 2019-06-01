import React from 'react';
import EmailModal from "./EmailModal";
import ProjectModal from "./ProjectModal";
//add in each modal here 
const modalLookup = {
    ProjectModal,
    EmailModal,
}

const ModalManager = ({currentModal}) => {
    let renderModal;
    if (currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modaltype];

        renderModal = <ModalComponent {...modalProps} />
    }
    return <span>{renderModal}</span>
}