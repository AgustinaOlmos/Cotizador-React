import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`
const TituloHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TituloHeader>
                {titulo}
            </TituloHeader>
        </ContenedorHeader>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header
