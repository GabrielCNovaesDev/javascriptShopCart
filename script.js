const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", function(evento) {
    evento.preventDefault(); // impede o comportamento padrão de um formulario
    if(inputItem.value ===  ""){
        alert("por favor, insira um item!");
        return;
    }

    const listaDeCompras = document.getElementById("lista-de-compras");
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else{
            nomeItem.style.textDecoration = "none";
        }

})

    
    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemLista);

    const diaDaSemana =  new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    })
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })

    const dataCompleta = `${diaDaSemana} (${data} às ${hora})`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);

    
})