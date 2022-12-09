import Modal from "react-modal"
import { useForm } from "react-hook-form"
import { useContext } from "react"

import { ModalContext } from "../../context/ModalContext/ModalContext"

import { StyledModalContent } from "./StyledModalContent"
import { SelectForm } from "../SelectForm/SelectForm"
import { StyledButton } from "../../styles/buttons"

export function EditTechModal (){
    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: "0",
            transform: 'translate(-50%, -50%)',
            background: "var(--color-grey-3)",
            border: "1px solid var(--color-grey-3)",
            borderRadius: "4px",
          },
          overlay : {
            background: "#0000004D",
          }
    }

    const { openModal, hideModal } = useContext(ModalContext)
    
    function techEdit (data){
        console.log(data)
        hideModal ()
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <Modal isOpen={ openModal } style={ modalStyle } ariaHideApp={ false }>
            <StyledModalContent>
                <div>
                    <h3>Editar tecnologia</h3>
                    <button className="closeModalButton" onClick={() => hideModal ()}>X</button>
                </div>
                <form onSubmit={handleSubmit(techEdit)} noValidate>
                    <SelectForm labelName="Status" toForm={register("status")} >
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </SelectForm>
                    <section>
                        <StyledButton type="submit" height="default" color="" disabled={ false }>Salvar alterações</StyledButton>
                        <StyledButton type="button" height="default">Excluir</StyledButton>
                    </section>
                </form>
            </StyledModalContent>
        </Modal>
    )
}