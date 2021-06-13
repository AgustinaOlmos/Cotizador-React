// Calcula el importe a pagar segun la Marca
export function calcularMarca(marca) {
    let incremento

    switch (marca) {
        case 'asiatico':
            incremento = 1.05
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'europeo':
            incremento = 1.30
            break;
        default:
            break;
    }
    return incremento
}

// Obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

// Calcula segun el tipo de plan
export function obtenerPlan(plan) {
    return(plan === 'basico') ? 1.20 : 1.50
}

// Muestra la primer letra en mayuscula
export function primerMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}