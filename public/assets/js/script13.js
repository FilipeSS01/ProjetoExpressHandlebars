const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("valor") != null) {
        input1 = document.getElementById("valor").value;
    }

    let num = parseInt(input1);
    let count = 0;
    var answer = document.getElementById("resposta");

    for (let i = 2; i < num; i++) {
        if ((num % i) == 0) {
            count++;
        }
    }

    if (num == 2) {
        answer.innerHTML = `Verdadeiro! É um número primo.`;
    } else if ((num == 1) || (num == 0)) {
        answer.innerHTML = `Falso! Não é um número primo.`;
    } else if (count == 0) {
        answer.innerHTML = `Verdadeiro! É um número primo.`;
    } else {
        answer.innerHTML = `Falso! Não é um número primo.`;
    }
}