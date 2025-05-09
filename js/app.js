let listaDeAmigos = [];

function adicionar(){
    listaDeAmigos.push(document.getElementById("nome-amigo").value);
    document.getElementById('lista-amigos').textContent = listaDeAmigos.join(', ');
    document.getElementById("nome-amigo").value = "";
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function sortear() {
    let sorteio = listaDeAmigos.sort(() => Math.random() - 0.5);
    document.getElementById('lista-sorteio').textContent = sorteio.join("->");
    }