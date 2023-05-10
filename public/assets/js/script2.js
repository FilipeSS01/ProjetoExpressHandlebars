const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("numero") != null) {
        input1 = document.getElementById("numero").value;
    }
    var answer = document.getElementById("resposta");
    answer.innerHTML = `Tabuada do ${input1}:<br>`;

    for (var i=0; i<= 10; i++) {
        answer.innerHTML += `${input1} x ${i} = ${input1*i}<br>`;
    }
}