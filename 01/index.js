const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = 'Dom Quixote';


const estanteLivro = livros.findIndex(livro => livro === nomeDoLivro)

console.log(estanteLivro + 1)