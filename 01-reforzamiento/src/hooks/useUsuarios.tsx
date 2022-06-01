import { useEffect, useRef, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)

    useEffect(() => {
        return () => {
            cargarUsuarios(0);
        }
    }, [])

    const cargarUsuarios = async (page: number) => {
        paginaRef.current += page;
        const res = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (res.data.data.length > 0) {
            setusuarios(res.data.data);
        }
        else {
            alert("No hay mas registros")
            paginaRef.current--;
        }
    }

    const paginaSiguiente = () => {
        cargarUsuarios(1)
    }

    const paginaAnterior = () => {
        cargarUsuarios(-1)
    }

    return {
        usuarios,
        paginaRef,
        paginaSiguiente,
        paginaAnterior
    }

}
