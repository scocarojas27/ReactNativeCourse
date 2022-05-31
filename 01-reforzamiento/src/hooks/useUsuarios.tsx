import { useEffect, useRef, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)

    useEffect(() => {
        return () => {
            cargarUsuarios();
        }
    }, [])

    const cargarUsuarios = async () => {
        const res = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (res.data.data.length > 0) {
            setusuarios(res.data.data);
            paginaRef.current += 1;
        }
        else {
            alert("No hay mas registros")
        }
    }

    return {
        usuarios,
        cargarUsuarios
    }

}
