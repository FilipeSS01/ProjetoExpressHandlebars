const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();

    let numeros = [];

    if (document.getElementById("valores") != null) {
        numeros = document.getElementById("valores").value.split(' ');
    }

    var answer = document.getElementById("resposta");

    for (var i = (numeros.length - 1); i >= 0; i--) {
        answer.innerHTML += `${numeros[i]} `;
    }

}