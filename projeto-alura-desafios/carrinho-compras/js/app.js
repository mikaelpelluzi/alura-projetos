let valorTotal = 0;

function adicionar() { 
    //recuperar o campo de unidades e recuperar o produto selecionado

    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;

    // separar o nome e o valor do produto usando metodo split
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];

    //obtendo o valor do produto vezes a quantidade
    let preco = quantidade * valorProduto;
    
    // criando essa variavel de texto que será usada de forma mais legivel
    let textoCarrinho = `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`
    
    // adicionar os produtos e quantidade no carrinho
    let carrinho = document.getElementById('lista-produtos');
    
    
    // fazer com que o valor total some todos os produtos adicionados
    valorTotal = valorTotal + preco;
    
    let textoPrecoTotal = document.getElementById('valor-total');
    
    // validacao de quantidade
    if (quantidade > 0) {
        carrinho.innerHTML = carrinho.innerHTML + textoCarrinho
        textoPrecoTotal.textContent = `R$ ${valorTotal}`;
        document.getElementById('quantidade').value = '';
    } else {   
        alert('Precisa adicionar a quantidade que quer comprar');
    }
}

function limpar() {
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = '';
}