function aplicarDescontos(livros) {
    const desconto = 0.5
    livrosComDescontos = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDescontos
}