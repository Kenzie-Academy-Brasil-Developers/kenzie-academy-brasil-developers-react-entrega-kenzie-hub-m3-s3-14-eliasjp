import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast ,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api/api";

import { InputForm } from "../../components/InputForm/InputForm";
import { StyledButton } from "../../styles/buttons";
import { RegisterForm, RegisterContainer, RegisterMain } from "./style";

import { SelectForm } from "../../components/SelectForm/SelectForm.jsx";
import { HeaderTemplate } from "../../components/HeaderTemplate/HeaderTemplate.jsx";
import { Container } from "../../components/Container/Container.jsx";

import { StyledFieldset } from "../../styles/fieldset.js"
import { registerSchema } from "./registerSchema";

export function RegisterPage (){
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(registerSchema)
    })

    const navigate = useNavigate()

    const toastConfig = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    const onSubmit = async (data) => {
        try {
            await api.post("/users", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            toast.success("Cadastrado com sucesso. Você será redirecionado em breve.", toastConfig)
            setTimeout(() => navigate("/login"), 4000)
        }
        catch(error) {
            toast.error(error.response.data.message, toastConfig)
        }
    }

    return (
        <RegisterContainer>
            <HeaderTemplate>
                <Link to="/login">Voltar</Link>
            </HeaderTemplate>
            <Container>
                <RegisterMain>
                    <RegisterForm onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div>
                            <h2>Crie sua conta</h2>
                            <small>Rapido e grátis, vamos nessa</small>
                        </div>

                        <StyledFieldset>
                            <InputForm labelName="Nome" inputType="text" text="Digite seu nome" toForm={register("name")} />
                            { errors.name && <span>{ errors.name.message }</span>}

                            <InputForm labelName="Email" inputType="email" text="Digite seu email" toForm={register("email")} />
                            { errors.email && <span>email span</span>}

                            <InputForm labelName="Senha" inputType="password" text="Digite aqui sua senha" toForm={register("password")} />
                            { errors.password && <span>{ errors.password.message }</span>}

                            <InputForm labelName="Confirmar senha" inputType="password" text="Digite novamente sua senha" />

                            <InputForm labelName="Bio" inputType="text" text="Fale sobre você" toForm={register("bio")} />
                            { errors.bio && <span>bio span</span>}

                            <InputForm labelName="Contato" inputType="text" text="Opção de contato" toForm={register("contact")} />
                            { errors.contact && <span>contact span</span>}
                        
                            <SelectForm labelName="Selecionar módulo" toForm={register("course_module")}>
                                <option>Primeiro módulo</option>
                                <option>Segundo módulo</option>
                                <option>Terceiro módulo</option>
                                <option>Quarto módulo</option>
                                <option>Quinto módulo</option>
                                <option>Sexto módulo</option>
                            </SelectForm>

                        </StyledFieldset>

                        <StyledButton type="submit" height="default" disabled={false}>Cadastrar</StyledButton>
                    </RegisterForm>
                </RegisterMain>
            </Container>
            <ToastContainer />
        </RegisterContainer>
    )
}