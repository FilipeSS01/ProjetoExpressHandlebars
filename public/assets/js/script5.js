const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("nota1") != null) {
        var input1 = document.getElementById("nota1").value;
    }
    if (document.getElementById("nota2") != null) {
        var input2 = document.getElementById("nota2").value;
    }
    if (document.getElementById("nota3") != null) {
        var input3 = document.getElementById("nota3").value;
    }

    var med = (parseFloat(input1) + parseFloat(input2) + parseFloat(input3)) / 3;

    var answer = document.getElementById("resposta");
    answer.innerHTML = `Média das notas: ${med.toFixed(2)}<br>`;
    
    if (med >= 6) {
        answer.innerHTML += `Você foi APROVADO!`;
    } else {
        answer.innerHTML += `Você foi REPROVADO.`;
    }
}