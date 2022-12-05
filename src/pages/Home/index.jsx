import { useEffect, useState } from "react"
import { api } from "../../services/api/api"

import { HeaderTemplate } from "../../components/HeaderTemplate/HeaderTemplate"
import { StyledButton } from "../../styles/buttons"
import { HomeContainer, HomeMain, UserIntruduction } from "./style"

export function Home (){
    const userId = JSON.parse(window.localStorage.getItem("user_id"))
    const userToken = JSON.parse(window.localStorage.getItem("@token"))

    const [userData, setUserData] = useState({})

    useEffect(() => {
        function checkStorage (){
            (!userId || !userToken) && window.location.assign("/login")
        }

        checkStorage ()

        async function teste (){
            const test = await api.get(`/users/${userId}`)
            setUserData(test.data)
        }

        teste ()
    }, [])

    function clearStorage (){
        window.localStorage.removeItem("user_id")
        window.localStorage.removeItem("@token")
        window.location.assign("/Login")
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
            <HomeMain>
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </HomeMain>

        </HomeContainer>
    )
}