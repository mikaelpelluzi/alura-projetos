function tocaSom(idElement) {
   const elemento = document.querySelector(idElement);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log ('Elemento não encontrado ou seletor invalido')
    }
}

const teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < teclas.length; i++) {

    const tecla = teclas[i];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idSom);
    }

}



/*  funcao para tocar o som respectivo do id atribuido
    recuperar os botoes
    fazer um loop por para "popular cada tecla de som com o seu respectivo audio"
    condicional para o loop executar é enquanto o contador for menor que o numero de teclas
    atraves do array de teclas, selecionar a tecla que possui o valor do contador
    pegar a classe especifica de cada tecla
    armazenando a classe do instrumento e referenciando como id do audio a ser tocado
    quando chamar o metodo onclick, executar uma funcao anonima que possui a funcao tocaSom com o id da tecla clicada referenciada
*/
