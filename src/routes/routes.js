import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home/index.jsx"
import { RegisterPage } from "../pages/Register/index.jsx"
import { Login } from "../pages/Login/index.jsx"

export function RoutesPath (){

    return (
        <Routes>
            <Route path="" element={<Home />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )

}