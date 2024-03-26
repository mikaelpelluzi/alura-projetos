let listaAmigos = [];

function adicionar() {
    // recuperar os nomer digitados no input
    let adicionarNome = document.getElementById('nome-amigo');
    
    // armazenar o nomes digitados
    if (adicionarNome.value == '') {
        alert('precisa adicionar um nome')
        return;
    }

    if (listaAmigos.includes(adicionarNome.value)) {
        alert('Nome ja adicionado');
        return;
    }

    let amigoAdicionado = document.getElementById('lista-amigos');
    listaAmigos.push(adicionarNome.value)
        
    if (amigoAdicionado.textContent == '') {
        amigoAdicionado.textContent = adicionarNome.value   
    } else {
        amigoAdicionado.textContent = amigoAdicionado.textContent + ', ' + adicionarNome.value ;
    }
    adicionarNome.value = '';



}

function sortear() {
    embaralha(listaAmigos)

    let sorteio = document.getElementById('lista-sorteio');
    if (listaAmigos.length < 4) {
        alert('É preciso de 4 pessoas para sortear');
        return;
    }


    for (let i = 0; i < listaAmigos.length; i++){
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
        }
    }
        
}


function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]]
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}