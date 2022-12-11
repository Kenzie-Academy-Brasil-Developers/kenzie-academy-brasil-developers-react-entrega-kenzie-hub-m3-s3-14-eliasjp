import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext/ModalContext"
import { NewTechModal } from "../NewTechModal/NewTechModal"
import { NewTechContainer } from "./style"


export function NewTech ({ userTechs, setUserTechs }){
    const { setShowModal, setIsOpen, triggerModal, setTriggerModal, setModalContent } = useContext(ModalContext)

    function teste (){
        setTriggerModal(true)
        setIsOpen(true)
        setModalContent(<NewTechModal />)
    }

    return (
        <NewTechContainer>
            <h3>Tecnologias</h3>
            <button onClick={() => teste ()}>+</button>
        </NewTechContainer>
    )
}