const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const verifica = palavras => {
    const verificador = palavras.some(item => item === "vodka" || item === "cerveja")
    verificador ? console.log("Revise sua lista, joão. possui bebida com venda proibida!") : console.log("Tudo certo, vamos as compras");
}

verifica(palavras)