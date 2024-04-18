let livros = []
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi(){
    const res = await fetch(endPoint)
    livros = await res.json() 
    console.table(livros)
    
    exibirLivros(livros)
}
