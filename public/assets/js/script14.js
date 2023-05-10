const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();

    if (document.getElementById("valor") != null) {
        var numero = document.getElementById("valor").value;
    }

    var answer = document.getElementById("resposta");
    switch (numero) {
        case '1':
            answer.innerHTML = `Janeiro`;
            break;
        case '2':
            answer.innerHTML = `Fevereiro`;
            break;
        case '3':
            answer.innerHTML = `Março`;
            break;
        case '4':
            answer.innerHTML = `Abril`;
            break;
        case '5':
            answer.innerHTML = `Maio`;
            break;
        case '6':
            answer.innerHTML = `Junho`;
            break;
        case '7':
            answer.innerHTML = `Julho`;
            break;
        case '8':
            answer.innerHTML = `Agosto`;
            break;
        case '9':
            answer.innerHTML = `Setembro`;
            break;
        case '10':
            answer.innerHTML = `Outubro`;
            break;
        case '11':
            answer.innerHTML = `Novembro`;
            break;
        case '12':
            answer.innerHTML = `Dezembro`;
            break;
        default:
            answer.innerHTML = `Não existe um mês correspondente a este número.`;
            break;
    }
   
}