function comprar() {
    //recuperar os dados de quantidade e local do ingresso

    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // quando escolher um ingresso e a quantidade, decrescer da quantitade disponivel
    if (qtd > 0) {
        if (ingresso == 'pista') {
            comprarPista(qtd);
    
        } else if (ingresso == 'superior') {
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd)
        }
        
    } else {
        alert ('Adicione a quantidade que quer comprar')
    }    

}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('quantidade indisponivel')
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('compra realizada com sucesso')
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('quantidade indisponivel')
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('compra realizada com sucesso')
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('quantidade indisponivel')
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('compra realizada com sucesso')
    }
}