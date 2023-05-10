const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("numero") != null) {
        input1 = document.getElementById("numero").value;
    }
    var answer = document.getElementById("resposta");
    if (input1 > 0) {
        answer.innerHTML = `O número ${input1} é POSITIVO.`;
    } else if (input1 < 0) {
        answer.innerHTML = `O número ${input1} é NEGATIVO.`;
    } else {
        answer.innerHTML = `O número ${input1} é IGUAL A ZERO.`;
    }
}