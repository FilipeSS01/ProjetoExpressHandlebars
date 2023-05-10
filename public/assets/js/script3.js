const botao1 = document.getElementById("botao");

botao1.onclick = function(event) {
    event.preventDefault();
    
    var answer = document.getElementById("resposta");
    answer.innerHTML = `<b>- Linguagem fortemente tipada</b> é aquela em que os objetos/variáveis tem um tipo bem definido e que precisa ser informado no momento de sua declaração.<br>`;
    answer.innerHTML += `<b>- Linguagem fracamente tipada</b> é aquela em que ao se declarar uma variável o seu tipo de conteúdo não precisa ser declarado, e ao ser fracamente tipada toda e qualquer linguagem de programação será ao mesmo tempo dinamicamente tipada, isto é, se o tipo de conteúdo da variável mudar, automaticamente o seu tipo também muda.`;
}