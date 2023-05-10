const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    var sorteio = Math.floor(Math.random() * 6 + 1);
    console.log(sorteio);

    var answer = document.getElementById("resposta");
    switch (sorteio) {
        case 1:
            answer.src = "img/face1.png";
            break;
        case 2:
            answer.src = "img/face2.png";
            break;
        case 3:
            answer.src = "img/face3.png";
            break;
        case 4:
            answer.src = "img/face4.png";
            break;
        case 5:
            answer.src = "img/face5.png";
            break;
        case 6:
            answer.src = "img/face6.png";
    }
   
}