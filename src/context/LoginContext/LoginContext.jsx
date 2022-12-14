import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api/api.js"

export const LoginContext = createContext({})

export function LoginProvider ({ children }){
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})

    async function login (data){
        const loginEvent = await api.post("/sessions", data)
        .then(resp => resp.data)
        window.localStorage.setItem("user_id", JSON.stringify(loginEvent.user.id))
        window.localStorage.setItem("@token", JSON.stringify(loginEvent.token))
        api.defaults.headers.common["Authorization"] = `Bearer ${loginEvent.token}`
        api.defaults.headers.common["Client-ID"] = "r6rmfu6jsapswq3zklnkhbfae1r6xv"
    }

    async function registerEvent (data){
        await api.post("/users", data)
    }

    async function setData (idUser){
        const user = await api.get(`/users/${idUser}`)
        setUserData(user.data)
        return user
    }

    async function setHeaders (){
        const id = JSON.parse(window.localStorage.getItem("user_id"))
        const token = JSON.parse(window.localStorage.getItem("@token"))
        try {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            api.defaults.headers.common["Client-ID"] = "r6rmfu6jsapswq3zklnkhbfae1r6xv"
            return setData (id)
        }
        catch(err) {
            navigate("/login")
            window.localStorage.clear()
        }
    }

    return (
        <LoginContext.Provider value={{ login, registerEvent, navigate, setHeaders, setData, userData }}>
            { children }
        </LoginContext.Provider>
    )
}