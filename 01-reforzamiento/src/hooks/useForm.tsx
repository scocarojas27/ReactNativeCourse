import { useState } from "react"
/*
- Custom hook el cual se implemte de manera que sea un genérico, es decir, 
se le establece el tipo de dato que debe recibir, en este caso es una extensión de Object.

- PAra validar que el nombre del campo concuerde con una de las keys del objejeto, se utiliza
keyof, que nos permite obtener todas las keys del objeto.
*/
export const useForm = <T extends Object>(forumlario: T) => {

    const [state, setState] = useState(forumlario)

    const onChange = (value: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value
        })
    }

    return {
        ...state,
        formulario: state,
        onChange
    }
}
