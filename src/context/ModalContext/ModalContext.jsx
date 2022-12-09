import { useState, useEffect } from "react"
import { createContext } from "react"

export const ModalContext = createContext()

export function ModalProvider ({ showModal, setShowModal, children }){
    const [ openModal, setIsOpen ] = useState(false)
    const [ triggerModal, setTriggerModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState(false)

    useEffect(() => {
        setShowModal(modalContent)
    }, [triggerModal])

    function hideModal (){
        setTriggerModal(false)
        setIsOpen(false)
        setShowModal(false)
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, openModal, setIsOpen, triggerModal, setTriggerModal, modalContent, setModalContent, hideModal }}>
            { children }
        </ModalContext.Provider>
    )
}