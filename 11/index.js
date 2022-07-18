const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]


const filtraLetra = (letra, nomes) => {
    const filtro = nomes.filter(nome => letra === nome[0].toLowerCase())
    console.log(filtro)
}

filtraLetra("a", nomes)