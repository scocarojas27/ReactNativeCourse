export const TiposBasicos = () => {

    const nombre: string = "Santiago"
    const edad: number = 24
    const estaActivo: boolean = false

    const poderes: string[] = ["Super Aliento", "Super Fuerza", "Super Velocidad"]

    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'Inactivo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
