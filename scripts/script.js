import criarItemDaLista from "./criarItemdaLista.js";
import verificarListaVazia from "./verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => { 
    evento.preventDefault(); // impede o comportamento padrão de um formulario
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
})

verificarListaVazia(listaDeCompras);