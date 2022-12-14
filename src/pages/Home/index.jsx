import { useEffect, useState, useContext } from "react"

import { LoginContext } from "../../context/LoginContext/LoginContext"

import { HomeContainer, HomeMain, UserIntruduction } from "./style"

import { HeaderTemplate } from "../../components/HeaderTemplate/HeaderTemplate"
import { StyledButton } from "../../styles/buttons"
import { TechContainer } from "../../components/TechsContainer/TechContainer.jsx"
import { ModalProvider } from "../../context/ModalContext/ModalContext.jsx"
import { PostContext } from "../../context/PostContext/PostContext.jsx"
import { NewTech } from "../../components/NewTech/NewTech.jsx"

export function Home (){
    const [showModal, setShowModal ] = useState(false)

    const { navigate, setHeaders, userData } = useContext(LoginContext)
    const { userTechs, setUserTechs } = useContext(PostContext)

    useEffect(() => {
        async function setData (){
            const user = await setHeaders ()
            setUserTechs(user.data.techs)
        }
        
        setData ()
    }, [])
    
    function clearStorage (){
        window.localStorage.removeItem("user_id")
        window.localStorage.removeItem("@token")
        navigate("/Login")
    }

    function renderModal (){
        return showModal ? showModal : false
    }

    return (
        <HomeContainer>
            <HeaderTemplate>
                <StyledButton height="medium" type="button" onClick={() => clearStorage ()}>Sair</StyledButton>
            </HeaderTemplate>

            <UserIntruduction>
                <section>
                    <h2>Olá, { userData.name }</h2>
                    <small>{ userData.course_module }</small>
                </section>
            </UserIntruduction>

                <ModalProvider showModal={ showModal } setShowModal={ setShowModal }>
                    <HomeMain>
                        <NewTech userTechs={ userTechs } setUserTechs={ setUserTechs}/>
                        <TechContainer userTechs={ userTechs } />
                    </HomeMain>
                    { renderModal () }
                </ModalProvider>
        </HomeContainer>
    )
}