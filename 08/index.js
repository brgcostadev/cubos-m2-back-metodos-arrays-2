const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const verificador = frutas => {
    const transform = frutas.map((fruta, index) => {
        return `${index} - ${fruta[0].toUpperCase()}${fruta.toLowerCase().substr(1)}`
    })

    console.log(transform)
}

verificador(frutas)