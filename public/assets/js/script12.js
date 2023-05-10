const botao = document.getElementById("botao");

botao.onclick = function(event) {
    event.preventDefault();

    let answer = document.getElementById("resposta");

    let num1 = 0;
    let num2 = 1;
    let numeros = [];

    for (let i = 1; i <= 150; i++) {
        numeros.push(num1);
        let soma = num1 + num2;
        num1 = num2;
        num2 = soma;
        answer.innerHTML += `${i}° - ${soma}<br>`;
    }
}