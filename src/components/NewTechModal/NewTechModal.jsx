import { useContext } from "react"
import { useForm } from "react-hook-form"
import Modal from "react-modal"

import { PostContext } from "../../context/PostContext/PostContext.jsx"
import { ModalContext } from "../../context/ModalContext/ModalContext"

import { api } from "../../services/api/api.js"
import { InputForm } from "../InputForm/InputForm.jsx"
import { SelectForm } from "../SelectForm/SelectForm.jsx"

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

    const { refreshTechs } = useContext(PostContext)

    const { openModal, hideModal } = useContext(ModalContext)

    const { register, handleSubmit } = useForm()

    async function postNewTech(data) {
        await api.post(`/users/techs`, data)
        refreshTechs()
        hideModal ()
    }

    return (
        <Modal isOpen={ openModal } ariaHideApp={false} style={ modalStyle }>
            <NewTechModalContent>
                <div>
                    <h3>Cadastrar tecnologia</h3>
                    <button className="closeModalButton" onClick={() => hideModal ()}>X</button>
                </div>
                <NewTechForm onSubmit={handleSubmit(postNewTech)}>
                    <InputForm labelName="Nome" type="text" text="Tecnologia" toForm={register("title")}/>
                    <SelectForm labelName="Status" toForm={register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </SelectForm>
                    <StyledButton type="submit" height="default" disabled={ false }>Criar</StyledButton>
                </NewTechForm>
            </NewTechModalContent>
        </Modal>
    )
}