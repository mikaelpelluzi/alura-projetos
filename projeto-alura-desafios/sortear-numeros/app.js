function sortear() {
    // recuperar a quantidade de numeros, o menor numero e o maior numero
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // criar variavel para armazenar o array de numeros a ser sorteados
    let sorteado = [];
    let numeros;

    // loop para sortear os numeros dentro do range descrito
    for (let i = 0; i < quantidade; i++) {
        numeros = sortearNumeroAleatorio(de, ate);
        
        // criar uma condicional que impede de sortear o mesmo numero
        while (sorteado.includes(numeros)) {
            numeros = sortearNumeroAleatorio(de, ate);
        };
        sorteado.push(numeros)
    }
    


    //exibir na tag label o resultado dos numeros sorteados
    let resultado = document.getElementById('resultado');
    if (sorteado.length !== 0) {
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteado}</label>`;
    } else {
        resultado.innerHTML = `<label class="texto__paragrafo">Preenche os dados para sortear os números</label>`;
    }
    alterarStatusBotao('btn-sortear');
    alterarStatusBotao('btn-reiniciar');
}

function sortearNumeroAleatorio(min, max) {
    //função para criar um range de numeros aleatorios 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(id) {
    let botao = document.getElementById(id);
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    };
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao('btn-sortear');
    alterarStatusBotao('btn-reiniciar');
}
