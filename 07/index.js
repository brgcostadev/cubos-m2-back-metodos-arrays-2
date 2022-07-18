const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]

const verificador = (cep, enderecos) => {
    const verificaCep = enderecos.find(endereco => cep)
    console.log(verificaCep.rua)
}

verificador(00222444, enderecos)