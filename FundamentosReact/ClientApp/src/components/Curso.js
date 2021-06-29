import React, { useState, useEffect } from 'react'
import {
    Card,
    CardBody
} from 'reactstrap'
import axios from "axios"

const Curso = () => {
    // variables / estados
   const [alumnos, setAlumnos] = useState([]) 
    
    // carga una función al momento de mostrar la página
    // cargar recursos desde http://localhost:5000/api/Curso/Listar 
    useEffect(() => {
        const cargarAlumnos = async() => {
            let respuesta = await axios.get("http://localhost:5000/api/Curso/Listar")
            console.log(respuesta.data)
            setAlumnos(respuesta.data)
            // la respuesta mas el atributo data devuelven los datos desde el servidor
        }

        cargarAlumnos()
    }, [])
    
    return (
        <>
            <Card>
                <CardBody>
                    <h1>Esta es la página curso!</h1>
                    <hr />
                    <h3>Listado de alumnos</h3>
                    <ul>
                        {/* "Jairo",  "Jesús",  "Johan" */}
                        {alumnos.map((alumno, index) => {
                            return <li key={index}>{alumno}</li>
                        })}
                    </ul>
                </CardBody>
            </Card>
        </>
    )
}

export default Curso