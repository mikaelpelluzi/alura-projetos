function alterarStatus(id) {
    // recuperando os seletores a serem modificados
    let gameId = document.getElementById(`game-${id}`);
    let imgJogo = gameId.querySelector('.dashboard__item__img');
    let botao = gameId.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        imgJogo.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'
    } else {
        botao.classList.add('dashboard__item__button--return');
        imgJogo.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
        
    }
}