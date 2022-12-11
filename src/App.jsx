import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/index.jsx";
import { Login } from "./pages/Login/index.jsx";
import { RegisterPage } from "./pages/Register/index.jsx";

function App() {
  const [userTechs, setUserTechs] = useState([])

  return (
    <>
        <Routes>
            <Route path="" element={<Home userTechs={ userTechs } setUserTechs={ setUserTechs }/>}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </>
  );
}

export default App;
