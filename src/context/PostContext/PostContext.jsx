import { useState, useContext, createContext } from "react";

import { LoginContext } from "../LoginContext/LoginContext";

import { api } from "../../services/api/api.js"

export const PostContext = createContext({})

export function PostProvider ({ children }){
    const [userTechs, setUserTechs] = useState([])
    const { setData } = useContext(LoginContext)

    async function refreshTechs (){
        const id = JSON.parse(window.localStorage.getItem("user_id"))
        const user = await setData (id)
        setUserTechs(user.data.techs)   
    }

    return (
        <PostContext.Provider value={{ userTechs, setUserTechs, refreshTechs }}>
            { children }
        </PostContext.Provider>
    )
}