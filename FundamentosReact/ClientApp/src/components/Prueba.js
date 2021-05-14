import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

const Prueba = () => {
    const [nombre, setNombre] = useState('Enrique')
    const [anio, setAnio] = useState(2021)
    const [contador, setContador] = useState(0)
    const [apellido, setApellido] = useState('')
    // const [,] = useState(<valor predeterminado>) => tiene esta forma

    // utilizar una técnica de hooks (estandarizada) para cambiar valores
    // cuando se termine de cargar la página => Cuando se renderiza la página
    useEffect(() => {
        // se gatilla cuando se termina de cargar renderizar la página
        setNombre('Juan')
    }, [])

    // Funciones (lógica)
    const onClickButton = () => {
        setContador(contador + 1) // aumenta el contador en uno y actualiza el estado
    }

    const onChangeApellido = (e) => {
        let escrito = e.target.value // obtener valor (value) escrito del input (target)

        setApellido(escrito) // cambiar estado con lo escrito / obtenido del input
    }


    // useEffect(() => { }, []) => tiene esa forma
    return (
        <>
            <Card>
                <CardBody>
                    <h1>Esta es una prueba!</h1>
                    <h2>Bienvenido {nombre} al {anio} !!</h2>
                    <p>Esto NO arrojará error</p>
                    <hr />

                    <h5>Contador: {contador}</h5>
                    <Button color="primary" onClick={onClickButton}>Aumentar contador en uno</Button>

                    <hr />
                    <Form>
                        <FormGroup>
                            <Label for="apellido">Apellido</Label>
                            <Input type="text"
                                name="apellido"
                                id="apellido"
                                onChange={onChangeApellido}
                                placeholder="Escriba su apellido"
                            />
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export default Prueba
