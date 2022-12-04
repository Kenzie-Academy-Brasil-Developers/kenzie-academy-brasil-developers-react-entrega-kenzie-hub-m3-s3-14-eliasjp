import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("Esse campo é obrigatório").min(2, "teste"),
    email: yup.string().required("Esse campo é obrigatório"),
    password:
        yup
        .string()
        .required("Esse campo é obrigatório")
        .min(8, "A senha precisa de um mínimo de 8 caracteres")
        .matches(/(?=.*?[A-Z])/, "A senha precisa conter pelo menos uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "A senha precisa conter pelo menos uma letra minúscula.")
        .matches(/(?=.*?[0-9]{2})/, "A senha precisa conter pelo menos dois números.")
        .matches(/(?=.*?[!@#$%^&*?])/, "A senha precisa conter pelo menos um caractere especial"),
    bio: yup.string().required("Esse campo é obrigatório"),
    contact: yup.string().required("Esse campo é obrigatório"),
    course_module: yup.string().required()
})