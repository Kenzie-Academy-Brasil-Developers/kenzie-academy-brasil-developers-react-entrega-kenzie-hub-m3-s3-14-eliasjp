import { useContext } from "react"
import { useForm } from "react-hook-form"
import Modal from "react-modal"

import { InputForm } from "../InputForm/InputForm.jsx"
import { SelectForm } from "../SelectForm/SelectForm.jsx"

import { ModalContext } from "../../context/ModalContext/ModalContext"
import { NewTechForm, NewTechModalContent } from "./style"
import { StyledButton } from "../../styles/buttons"

export function NewTechModal (){
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

    const { register, handleSubmit } = useForm()

    function teste(data) {
        console.log(data)
    }

    return (
        <Modal isOpen={ openModal } ariaHideApp={false} style={ modalStyle }>
            <NewTechModalContent>
                <div>
                    <h3>Cadastrar tecnologia</h3>
                    <button className="closeModalButton" onClick={() => hideModal ()}>X</button>
                </div>
                <NewTechForm onSubmit={handleSubmit(teste)}>
                    <InputForm labelName="Nome" type="text" text="Tecnologia" toForm={register("title")}/>
                    <SelectForm>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </SelectForm>
                    <StyledButton type="submit" height="default" disabled={ false }>Criar</StyledButton>
                </NewTechForm>
            </NewTechModalContent>
        </Modal>
    )
}