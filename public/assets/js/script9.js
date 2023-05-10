const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();

    let numeros = [];

    if (document.getElementById("valores") != null) {
        numeros = document.getElementById("valores").value.split(' ');
    }

    var contNeg = 0;
    var contPos = 0;
    var contPar = 0;
    var contImp = 0;

    numeros.forEach(number => {
       if (number < 0) {
        contNeg++;
       } else if (number >= 0) {
        contPos++;
       }
       if ((number%2) == 0) {
        contPar++;
       } else if ((number%2) != 0) {
        contImp++;
       }
    });

    var answer = document.getElementById("resposta");
    answer.innerHTML = `Quantidade de negativos digitados: ${contNeg}<br>`;
    answer.innerHTML += `Quantidade de positivos digitados: ${contPos}<br>`;
    answer.innerHTML += `Quantidade de pares digitados: ${contPar}<br>`;
    answer.innerHTML += `Quantidade de ímpares digitados: ${contImp}`;

}