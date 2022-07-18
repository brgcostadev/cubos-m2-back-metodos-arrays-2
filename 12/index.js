const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]

const filtroArray = (idade, profissao, arr) => {
    const filtro = arr.filter(item => item.profissao === profissao && item.idade > idade)
    return console.log(filtro)
}

filtroArray(20, "Programador", pessoas)
filtroArray(30, "Jornalista", pessoas)


const filtroArrayGeral = (idade, arr) => {
    const filtroGeral = arr.filter(item => item.idade < idade)
    return console.log(filtroGeral)
}

filtroArrayGeral(29, pessoas)