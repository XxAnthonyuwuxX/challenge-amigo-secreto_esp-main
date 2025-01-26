/* El principal objetivo de este desafío es 
fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el
problema.*/

let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    if (amigo.value === ''){
        return alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(amigo.value);
        amigo.value = '';
        agregarAmigoLista();
        return console.log(amigos);
    }
}

function agregarAmigoLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

