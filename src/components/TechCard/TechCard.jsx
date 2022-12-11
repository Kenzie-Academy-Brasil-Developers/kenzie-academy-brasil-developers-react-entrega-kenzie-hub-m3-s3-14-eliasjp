import { useState, useEffect, useContext } from "react";

import { ModalContext } from "../../context/ModalContext/ModalContext.jsx";
import { EditTechModal } from "../TechModal/EditTechModal.jsx";
import { StyledLi } from "./style.js";

export function TechCard ({ tech }){ 
    const { setIsOpen, setTriggerModal, setModalContent } = useContext(ModalContext)

    function callModal (){
        setTriggerModal(true)
        setIsOpen(true)
        setModalContent(<EditTechModal tech={ tech }/>)
    }

    return (
        <StyledLi onClick={() => callModal() }>
            <h2>{ tech.title }</h2>
            <small>{ tech.status }</small>
        </StyledLi>
    )
}