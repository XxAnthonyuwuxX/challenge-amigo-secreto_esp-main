/* El principal objetivo de este desafío es 
fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el
problema.*/

let amigos = [];

function agregarAmigo(){
    let amigo = (document.getElementById('amigo'));
    if (amigo.value === ''){
        return alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(amigo.value);
        amigo.value = '';
        return console.log(amigos);
    }
};
