import React, { useState, useEffect } from 'react'
import { Card, CardBody } from 'reactstrap'

const Prueba = () => {
    const [nombre, setNombre] = useState('Enrique')
    const [anio, setAnio] = useState(2021)
    // const [,] = useState(<valor predeterminado>) => tiene esta forma

    // utilizar una técnica de hooks (estandarizada) para cambiar valores
    // cuando se termine de cargar la página => Cuando se renderiza la página
    useEffect(() => {
        // se gatilla cuando se termina de cargar renderizar la página
        setNombre('Juan')
    }, [])

    // useEffect(() => { }, []) => tiene esa forma
    return (
        <>
            <Card>
                <CardBody>
                    <h1>Esta es una prueba!</h1>
                    <h2>Bienvenido {nombre} al {anio} !!</h2>
                    <p>Esto NO arrojará error</p>
                </CardBody>
            </Card>
        </>
    )
}

export default Prueba
