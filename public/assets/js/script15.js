const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    let divResposta = document.getElementById("resposta");
    const date = new Date(document.getElementById("data").value.replaceAll('-', '/'));
    let newData = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", })
    divResposta.innerHTML = newData;
}