const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");

var answer = document.getElementById("resposta");
answer.src = "img/neutro.png";

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("etanol") != null) {
        var input1 = document.getElementById("etanol").value;
    }
    if (document.getElementById("gasolina") != null) {
        var input2 = document.getElementById("gasolina").value;
    }

    let resultado = (input1 * 100) / input2;

    if (resultado > 70) {
        answer.src = "img/gasolina.png";
    } else if(resultado <= 70) {
        answer.src = "img/etanol.png";
    }
}

botao2.onclick = function() {
    answer.src = "img/neutro.png";
}