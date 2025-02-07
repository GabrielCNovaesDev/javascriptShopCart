const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(lista) {
    const itensDaLista = lista.querySelectorAll("li");
    if(itensDaLista.length === 0){
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;