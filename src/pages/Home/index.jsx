import { useEffect, useState } from "react"
import { api } from "../../services/api/api"

import { HomeContainer, HomeMain, UserIntruduction } from "./style"

import { HeaderTemplate } from "../../components/HeaderTemplate/HeaderTemplate"
import { StyledButton } from "../../styles/buttons"
import { TechContainer } from "../../components/TechsContainer/TechContainer.jsx"
import { ModalProvider } from "../../context/ModalContext/ModalContext"
import { NewTech } from "../../components/NewTech/NewTech.jsx"

export function Home ({ userTechs }){
    const userId = JSON.parse(window.localStorage.getItem("user_id"))
    const userToken = JSON.parse(window.localStorage.getItem("@token"))

    const [userData, setUserData] = useState({})
    const [showModal, setShowModal ] = useState(false)

    useEffect(() => {
        function checkStorage (){
            (!userId || !userToken) && window.location.assign("/login")
        }

        checkStorage ()

        async function setData (){
            const user = await api.get(`/users/${userId}`)
            setUserData(user.data)
            setUserTechs(user.data.techs)
        }
        
        setData ()
    }, [])
    
    function clearStorage (){
        window.localStorage.removeItem("user_id")
        window.localStorage.removeItem("@token")
        window.location.assign("/Login")
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