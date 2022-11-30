import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/index.jsx";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
