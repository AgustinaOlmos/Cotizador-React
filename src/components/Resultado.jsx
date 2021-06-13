import React from 'react'
import styled from '@emotion/styled'

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const ResultadoCotizacion = styled.div`
    background-color: rgb(127, 224, 237);
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    padding: .5rem;
    position: relative;
    text-align: center;
`

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Resultado = ({ cotizacion }) => {
    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de plan</Mensaje>
            : (
                <ResultadoCotizacion>
                    <TextoCotizacion>El Total es: ${cotizacion}</TextoCotizacion>
                </ResultadoCotizacion>
            )
    )
}

export default Resultado
