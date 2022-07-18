const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const verificador = cidades => {
    const verificaCaracter = cidades.filter(cidade => cidade.length <= 8)

    console.log(verificaCaracter)
}

verificador(cidades)