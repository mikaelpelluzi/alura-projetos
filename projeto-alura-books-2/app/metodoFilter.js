const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const botaoClicado = document.getElementById(this.id)
    const categoria = botaoClicado.value
    let livrosFiltrados = categoria == 'disponivel' ? filtarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivros(livrosFiltrados)
        exibirValorTotalDeLivros(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDeLivros(valorTotal) {
    valorTotalDisponivel.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}