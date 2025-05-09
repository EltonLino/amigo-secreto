let listaDeAmigos = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo").value.trim();
    if (listaDeAmigos.includes(nome)) {
        alert(`${nome} já foi adicionado na lista`)
    } else {
        listaDeAmigos.push(nome)
        document.getElementById('lista-amigos').textContent = listaDeAmigos.join(', ');
        document.getElementById("nome-amigo").value = "";
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function sortear() {
    let sorteio = listaDeAmigos.sort(() => Math.random() - 0.5);
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (i == listaDeAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + sorteio[i] + ' -> ' + sorteio[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + sorteio[i] + ' -> ' + sorteio[i + 1] + '<br>';
        }
    }
}