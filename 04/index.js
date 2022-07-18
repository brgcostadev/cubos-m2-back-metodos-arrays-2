const numeros = [0, 122, 4, 6, 4, 8, 44]

const verificador = numeros => {
    const verificaPar = numeros.every((numero) => numero % 2 === 0)
    verificaPar ? console.log("Array válido") : console.log("Array inválido")
}

verificador(numeros)