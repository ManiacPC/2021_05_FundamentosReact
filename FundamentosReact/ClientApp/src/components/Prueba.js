import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Row
} from 'reactstrap'
import moment from 'moment'
import localization from 'moment/locale/es'

const Prueba = () => {
    const [nombre, setNombre] = useState('Enrique')
    const [anio, setAnio] = useState(2021)
    const [contador, setContador] = useState(0)
    const [apellido, setApellido] = useState('')
    const [ciudad, setCiudad] = useState('Calama')
    const [habilitado, setHabilitado] = useState(true)
    const [habita, setHabita] = useState('Calama') // Opciones: Calama, Región, Otro

    moment.updateLocale('es', localization);

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

    const onChangeCiudad = (e) => {
        let ciudad = e.target.value // obtener valor (value) seleccionado del input (target)

        setCiudad(ciudad) // cambiar estado con lo seleccionado del input
    }

    const onChangeHabilitado = () => {
        setHabilitado(!habilitado)
    }

    const onChangeHabita = (e) => {
        /*let habitaTemporal = e.target.value
        setHabita(habitaTemporal)*/

        // Acotado
        setHabita(e.target.value)
    }

    // useEffect(() => { }, []) => tiene esa forma
    return (
        <>
            <Card>
                <CardBody>
                    <h1>Esta es una prueba!</h1>
                    <h2>Bienvenido {nombre} al {anio} !!</h2>
                    <p>Esto NO arrojará error</p>
                    {/* EJEMPLO FORMATO FECHA + INTERNACIONALIZACIÓN
                        Martes 08, Junio 2021 */}
                    <p>Fecha actual: {moment().format("dddd DD, MMM YYYY hh:mm:ss")} </p>
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
                        <FormGroup>
                            <Label for="ciudad">Escoja su ciudad</Label>
                            <Input type="select" name="ciudad" id="ciudad" onChange={onChangeCiudad}>
                                <option value="Calama">Calama</option>
                                <option value="Antofagasta">Antofagasta</option>
                                <option value="Tocopilla">Tocopilla</option>
                                <option value="Mejillones">Mejillones</option>
                                <option value="ME">María Elena</option>
                            </Input>
                            <p>Ha seleccionado la ciudad {ciudad}</p>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="checkbox"
                                    checked={habilitado}
                                    onChange={onChangeHabilitado}
                                />
                                Usuario habilitado
                            </Label>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>¿Dónde vive actualmente?</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="Calama"
                                        checked={habita === "Calama"}
                                        onChange={onChangeHabita}
                                    />
                                    Vivo actualmente en Calama
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="Región"
                                        checked={habita === "Región"}
                                        onChange={onChangeHabita}
                                    />
                                    Vivo actualmente en la región
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="Otro"
                                        checked={habita === "Otro"}
                                        onChange={onChangeHabita}
                                    />
                                    Vivo actualmente en otra región / país
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <Row>
                            <Col md="12" className="text-right">                               
                                <Button color="info"><i className="fas fa-save"></i> Enviar formulario</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export default Prueba
