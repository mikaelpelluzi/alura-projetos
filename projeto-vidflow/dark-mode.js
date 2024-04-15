const switchBtn = document.querySelector('.cabecalho__switch-input');

const body = document.querySelector('body')
const menuAside = document.querySelector(".menu__container")
const cabecalho = document.querySelector(".cabecalho__container");
const secaoCategoria = document.querySelector(".superior__secao__container")
const secaoVideos = document.querySelector(".videos__container")
const btnCategorias = document.querySelectorAll('.superior__item')
const imgArrow = document.querySelector('.superior__slider')
const inputSearch = document.querySelector('.pesquisar__input')
const micBtn = document.querySelector('.cabecalho__audio')
const menuIcons = document.querySelectorAll('.icones')
const iconesAside = document.querySelectorAll('.icone-item')

function mudarEstilo() {
    
    if (switchBtn.classList.contains('dark-mode')) {
        switchBtn.classList.remove('dark-mode')
        body.classList.remove('dark-mode')
        menuAside.classList.remove('dark-mode')
        cabecalho.classList.remove('dark-mode')
        secaoCategoria.classList.remove('dark-mode')
        secaoVideos.classList.remove('dark-mode')
        imgArrow.classList.remove('dark-mode')
        inputSearch.classList.remove('dark-mode-input')
        micBtn.classList.remove('dark-mode')
        
        btnCategorias.forEach((e) => {
            e.classList.remove('dark-mode-btn')
        })
        
        menuIcons.forEach((e) => {
            e.classList.remove('dark-mode-icons')
        })
        
        iconesAside.forEach((e) => {
            e.classList.remove('dark-mode-icons-aside')
        })
    } else {
        switchBtn.classList.add('dark-mode')
        body.classList.add('dark-mode')
        menuAside.classList.add('dark-mode')
        cabecalho.classList.add('dark-mode')
        secaoCategoria.classList.add('dark-mode')
        secaoVideos.classList.add('dark-mode')
        imgArrow.classList.add('dark-mode')
        inputSearch.classList.add('dark-mode-input')
        micBtn.classList.add('dark-mode')
        
        btnCategorias.forEach((e) => {
            e.classList.add('dark-mode-btn')
        })
    
        menuIcons.forEach((e) => {
            e.classList.add('dark-mode-icons')
        })
       
        iconesAside.forEach((e) => {
            e.classList.add('dark-mode-icons-aside')
        })
    }
}

switchBtn.addEventListener('change', mudarEstilo);

