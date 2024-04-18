let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdernarPreco.addEventListener('click', ordernarLivrosPorPreco)

function ordernarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}