import { useEffect, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        reqResApi.get<ReqResListado>('/users').then(res => {
            setusuarios(res.data.data)
        }).catch(
            console.log
        )
    }, [])

    const renderItems = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{ width: 35, borderRadius: 100 }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItems)
                    }
                </tbody>
            </table>
            <button className="btn btn-primary">Siguientes</button>
        </>
    )
}
