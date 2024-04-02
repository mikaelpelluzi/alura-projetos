const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--descanso-curto');
const longoBt = document.querySelector('.app__card-button--descanso-longo');
const imagens = document.querySelector('.app__image'); //recuperando atraves do seletor e classe a tag da imagem
// testando o set Attribute => imagens.setAttribute('src', './imagens/descanso-curto.png')
const title = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPause = document.getElementById('start-pause');
const startOuPauseBt = document.querySelector('#start-pause span');
const startOuPauseBtImg = document.querySelector('#start-pause img');
const timerNaTela = document.getElementById('timer');

const inputMusica = document.getElementById('alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const audioPause = new Audio('./sons/pause.mp3');
const audioPlay = new Audio('./sons/play.wav');
const audioTermino = new Audio('./sons/beep.mp3');
musica.loop = true;

let tempoEmSegundos = 1500;
let intervaloId = null


inputMusica.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});


focoBt.addEventListener('click', () => {
    tempoEmSegundos = 1500;
    alterandoContexto('foco');
    focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
    tempoEmSegundos = 300;
    alterandoContexto('descanso-curto')
    curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
    tempoEmSegundos = 900;
    alterandoContexto('descanso-longo')
    longoBt.classList.add('active')
});

function alterandoContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    });
    
    html.setAttribute('data-contexto', contexto)
    imagens.setAttribute('src', `./imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            title.innerHTML = `Otimize sua produtividade,<br />
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
        
            break;
        case "descanso-curto":
            title.innerHTML = `Que tal dar uma respirada?<br />
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`

            break;
        case "descanso-longo":
            title.innerHTML = `Hora de voltar à superfície.<br />
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoEmSegundos <= 0) {
        audioTermino.play();
        alert('Tempo finalizado')
        zerar()
        return;
    }
    tempoEmSegundos--;
    mostrarTempo();
}

startPause.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        audioPause.play()
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    startOuPauseBt.textContent = "Pausar";
    startOuPauseBtImg.setAttribute('src', './imagens/pause.png')
    

}

function zerar() {
    clearInterval(intervaloId);
    startOuPauseBt.textContent = "Começar"
    startOuPauseBtImg.setAttribute('src', './imagens/play_arrow.png')
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute:'2-digit', second:'2-digit'})
    timerNaTela.innerHTML = `${tempoFormatado}` 
}

mostrarTempo()