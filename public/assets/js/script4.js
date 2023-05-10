const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("peso") != null) {
        var input1 = document.getElementById("peso").value;
    }
    if (document.getElementById("altura") != null) {
        var input2 = document.getElementById("altura").value;
    }

    var aux = input1 / (input2*input2);
    var imc = aux.toFixed(2);

    var answer = document.getElementById("resposta");
    answer.innerHTML = `Peso: ${input1}<br>`;
    answer.innerHTML += `Altura: ${input2}<br>`;
    answer.innerHTML += `IMC: ${imc}<br>`;

    if (imc < 18.5) {
        answer.innerHTML += `Situação: Você está abaixo do peso ideal`;
    } else if ((imc >= 18.5) && (imc <= 24.9)) {
        answer.innerHTML += `Situação: Parabéns - Você está em seu peso normal!`;
    } else if ((imc >= 25.0) && (imc <= 29.9)) {
        answer.innerHTML += `Situação: Você está acima do seu peso (sobrepeso)`;
    } else if ((imc >= 30.0) && (imc <= 34.9)) {
        answer.innerHTML += `Situação: Obesidade grau I`;
    } else if ((imc >= 35.0) && (imc <= 39.9)) {
        answer.innerHTML += `Situação: Obesidade grau II`;
    } else {
        answer.innerHTML += `Situação: Obesidade grau III`;
    }

    var min = 18.5 * (input2 * input2);
    var max = 24.9 * (input2 * input2);
    var med = (min + max) / 2;

    answer.innerHTML += `<br>Peso mínimo para sua altura: ${min.toFixed(2)}`;
    answer.innerHTML += `<br>Peso médio para sua altura: ${med.toFixed(2)}`;
    answer.innerHTML += `<br>Peso máximo para sua altura: ${max.toFixed(2)}`;
}