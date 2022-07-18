const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const programa = (numeros) => {
    const numerosPositivos = numeros.filter(numero => numero > 0)
    return console.log(numerosPositivos)
}

programa(numeros)