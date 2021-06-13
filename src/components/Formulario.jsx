import React, { useState } from 'react'
import styled from '@emotion/styled'
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helpers'


const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const Error = styled.div`
    background-color: #e74040;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`


const Formulario = ({ guardarResumen }) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, guardarError] = useState(false)

    // Extraer los valores del state
    const { marca, year, plan } = datos

    // Leer los datos del formulario y colocarlos en el state
    const obtenerInfo = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault()
        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        // Precio Base
        let resultado = 2000

        // Marca - Incrementa Americano 15% - Asiatico 5% - Europeo 30%
        resultado = calcularMarca(marca) * resultado

        // Años
        // - Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year)
        // - Por c/año se resta el 3%
        resultado -= ((diferencia * 3) * resultado) / 100

        // Planes - Basico aumenta 20% - Completo 50%
        const incrementoPlan = obtenerPlan(plan)
        resultado = parseInt(parseFloat(incrementoPlan * resultado).toFixed(2))

        guardarResumen({
            cotizacion: resultado,
            datos
        })
    }

    return (
        <form
            onSubmit={cotizarSeguro}
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}

            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInfo}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInfo}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerInfo}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerInfo}
                />Completo
            </Campo>

            <Button type="submit">Cotizar</Button>
        </form>
    )
}

export default Formulario
