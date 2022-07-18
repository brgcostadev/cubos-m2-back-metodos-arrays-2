const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const verificador = usuarios => {
    const filtroIdade = usuarios.filter(dado => dado.idade >= 18 && dado.idade <= 65)
    const verificaHabilitacao = filtroIdade.every(usuario => usuario.habilitado == true)

    verificaHabilitacao ? console.log("Todos passaram no teste") : console.log("Todos precisam estar habilitados")
}

verificador(usuarios)