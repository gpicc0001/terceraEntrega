import {object, string, ref} from "yup"    

export const signupSchema = object({
    email: string()
    .email("ingrese un mail valido")
    .required("ingrese un email"),
    password:string()
    .min(6, "minimo 6 caracteres")
    .required("ingrese un password"),
    confirmPassword:string()
    .oneOf([ref('password')],"los password no son iguales")
    .required("vuelva a ingresar el mail")
})