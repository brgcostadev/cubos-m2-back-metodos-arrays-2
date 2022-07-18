const palavras = ["livro", "caneta", "sol", "carro", "orelha"]
const palavras2 = ["joao", "jose", "thia"]

const verifica = palavras => {
    const verificador = palavras.some(palavra => palavra.length > 5)
    verificador ? console.log("Existe palavra inválida") : console.log("Array validado")
}

verifica(palavras)
verifica(palavras2)