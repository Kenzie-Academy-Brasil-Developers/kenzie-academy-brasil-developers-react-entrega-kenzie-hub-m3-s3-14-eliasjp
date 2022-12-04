import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { loginSchema } from "./loginSchema.js"

import { Container } from "../../components/Container/Container";
import { HeaderTemplate } from "../../components/HeaderTemplate/HeaderTemplate";
import { InputForm } from "../../components/InputForm/InputForm";
import { StyledButton } from "../../styles/buttons";
import { StyledFieldset } from "../../styles/fieldset";
import { LoginMain, LoginContainer, LoginForm } from "./style";


export function Login (){
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <LoginContainer>
        <HeaderTemplate />
        <Container>
            <LoginMain>
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <StyledFieldset>
                        <InputForm labelName="Email" inputType="email" placeholder="Digite seu email" toForm={register("email")}/>
                        { errors.email && <span>{ errors.email.message }</span> }

                        <InputForm labelName="Senha" inputType="password" placeholder="Digite sua senha" toForm={register("password")}/>
                        { errors.password && <span>{ errors.password.message }</span> }

                    </StyledFieldset>

                    <StyledButton type="submit" height="default" disabled={false}>Login</StyledButton>
                    
                </LoginForm>
                    <p>Ainda não possui uma conta?</p>
                    <Link to="/register">Cadastre-se</Link>

            </LoginMain>
        </Container>
        </LoginContainer>
    )
}