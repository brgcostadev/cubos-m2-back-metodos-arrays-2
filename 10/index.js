const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const filtraPares = (numeros) => {
    const filtro = numeros.filter(numero => numero % 2 === 0)
    return console.log(filtro)
}


filtraPares(numeros)