import React, { useState, useEffect } from 'react'
import {
    Card,
    CardBody
} from 'reactstrap'
import axios from "axios"

const Games = () => {
    const [games, setGames] = useState([])
    
    useEffect(() => {
        const cargarGames = async () => {
            // Nota en axios * : Los request tipo post deben enviar parámetros, aunque sean vacíos
            let respuesta = await axios.post("http://localhost:5000/api/Games/ListarGames");
            console.log(respuesta.data)
            setGames(respuesta.data)
        }
        
        cargarGames()
    }, [])
    
    return (
        <>
            <Card>
                <CardBody>
                    <h1>Esta es la página de los mejores juegos!</h1>
                    <hr />
                    <h3>Listado de juegos</h3>
                    <ul>
                        {/* "Jairo",  "Jesús",  "Johan" */}
                        {games.map((game, index) => {
                            return <li key={index}>{game}</li>
                        })}
                    </ul>
                </CardBody>
            </Card>
        </>
    )
}

export default Games