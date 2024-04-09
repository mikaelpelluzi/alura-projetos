const adicionarTarefa = document.querySelector('.app__button--add-task')
const adicionarForm = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('textarea')
const ulTarefas = document.querySelector('.app__section-task-list')
const descricaoTarefa = document.querySelector('.app__section-active-task-description')
const btRemoverConcluidas = document.getElementById('btn-remover-concluidas')
const btRemoverTodas = document.getElementById('btn-remover-todas')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaSelecionada = null
let itemSelecionado = null

function updateTask() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function createElementTask(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `
    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add('app__section-task-list-item-description')

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')

    botao.onclick = () => {
        const novaDescricao = prompt("Renomeia sua tarefa")
        
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            updateTask()
        }
    }

    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src', './imagens/edit.png')
    botao.append(imagemBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(botao)

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete')
        botao.setAttribute('disabled', true)
    } else {
            li.onclick = () => {
                document.querySelectorAll('.app__section-task-list-item-active')
                    .forEach(element => {
                        element.classList.remove('app__section-task-list-item-active')
                    })
                if (tarefaSelecionada == tarefa) {
                    descricaoTarefa.textContent = ''
                    tarefaSelecionada = null
                    itemSelecionado = null
                    return
                }
                tarefaSelecionada = tarefa
                itemSelecionado = li
                descricaoTarefa.textContent = tarefa.descricao

                li.classList.add('app__section-task-list-item-active')
            }
    }

    return li

}

adicionarTarefa.addEventListener('click', () => {
    adicionarForm.classList.toggle('hidden');
})

adicionarForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa)
    const elementoTarefa = createElementTask(tarefa)
    ulTarefas.append(elementoTarefa)
    updateTask()
    textArea.value = ''
    adicionarForm.classList.add('hidden')
})

tarefas.forEach(tarefa => {
    const elementoTarefa = createElementTask(tarefa)
    ulTarefas.append(elementoTarefa)
});

document.addEventListener('FocoTimeout', () => {
    if (tarefaSelecionada && itemSelecionado) {
        itemSelecionado.classList.remove('app__section-task-list-item-active')
        itemSelecionado.classList.add('app__section-task-list-item-complete')
        itemSelecionado.querySelector('button').setAttribute('disabled', true)
        tarefaSelecionada.completa = true
        updateTask()
    }
})

const removeTask = (somenteCompletas) => {
    let seletor = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item"
    document.querySelectorAll(seletor).forEach(element => {
        element.remove()
    })
    tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : []
    updateTask()
}

btRemoverConcluidas.onclick = () => removeTask(true)
btRemoverTodas.onclick = () => removeTask(false)