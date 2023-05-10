const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    if (document.getElementById("nome") != null) {
        var input1 = document.getElementById("nome").value;
    }
    if (document.getElementById("email") != null) {
        var input2 = document.getElementById("email").value;
    }
    if (document.getElementById("cpf") != null) {
        var input3 = document.getElementById("cpf").value;
    }
    if (document.getElementById("idade") != null) {
        var input4 = document.getElementById("idade").value;
    }

    var answer = document.getElementById("resposta");
    answer.innerHTML = `Nome: ${input1}<br>`;
    answer.innerHTML += `Email: ${input2}<br>`;
    answer.innerHTML += `CPF: ${input3}<br>`;
    answer.innerHTML += `Idade: ${parseInt(input4)}`;
}