let livros = []
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi(){
    const res = await fetch(endPoint)
    livros = await res.json() 
    let livrosComDescontos = aplicarDescontos(livros)
    
    exibirLivros(livrosComDescontos)
}
