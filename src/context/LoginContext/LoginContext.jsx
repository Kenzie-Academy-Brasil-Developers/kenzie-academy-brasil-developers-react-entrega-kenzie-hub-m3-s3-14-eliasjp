import {  createContext } from "react";
import { api } from "../../services/api/api.js"

export const LoginContext = createContext({})

export function LoginProvider ({ children }){

    async function login (data){
        const loginEvent = await api.post("/sessions", data)
        .then(resp => resp.data)
        window.localStorage.setItem("user_id", JSON.stringify(loginEvent.user.id))
        window.localStorage.setItem("@token", JSON.stringify(loginEvent.token))
        api.defaults.headers.common["Authorization"] = `Bearer ${loginEvent.token}`
        api.defaults.headers.common["Client-ID"] = "r6rmfu6jsapswq3zklnkhbfae1r6xv"
    }

    async function registerEvent (data){
        await api.post("/users", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <LoginContext.Provider value={{ login, registerEvent }}>
            { children }
        </LoginContext.Provider>
    )
}