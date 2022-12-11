import { useEffect, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast ,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { loginSchema } from "./loginSchema.js"

import { Container } from "../../components/Container/Container";
import { HeaderTemplate } from "../../components/HeaderTemplate/HeaderTemplate";
import { InputForm } from "../../components/InputForm/InputForm";
import { StyledButton } from "../../styles/buttons";
import { StyledFieldset } from "../../styles/fieldset";
import { LoginMain, LoginContainer, LoginForm } from "./style";
import { LoginContext } from "../../context/LoginContext/LoginContext.jsx";


export function Login (){
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(loginSchema)
    })

    const { login } = useContext(LoginContext)
    const navigate = useNavigate()

    const toastConfig = {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }

    const onSubmit = async (data) => {
        try {
            await login(data)
            navigate("/")
        }
        catch(error) {
            toast.error (error.response.data.message, toastConfig)
        }
    }

    useEffect(() => {
        (window.localStorage.getItem("user_id") && window.localStorage.getItem("@token")) && window.location.assign("/")
    }, [])

    return (
        <LoginContainer>
        <HeaderTemplate />
        <Container>
            <LoginMain>
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <StyledFieldset>
                        <InputForm labelName="Email" inputType="email" text="Digite seu email" toForm={register("email")}/>
                        { errors.email && <span>{ errors.email.message }</span> }

                        <InputForm labelName="Senha" inputType="password" text="Digite sua senha" toForm={register("password")}/>
                        { errors.password && <span>{ errors.password.message }</span> }

                    </StyledFieldset>

                    <StyledButton type="submit" height="default" disabled={false}>Login</StyledButton>
                </LoginForm>
                    <p>Ainda não possui uma conta?</p>
                    <Link to="/register">Cadastre-se</Link>

            </LoginMain>
        </Container>
        <ToastContainer />
        </LoginContainer>
    )
}