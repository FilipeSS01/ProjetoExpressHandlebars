let pessoas = [
    {
        nome: 'Ana', 
        cidade: 'Lavras', 
        idade: 21, 
        sexo: 'Feminino'
    },
    { 
        nome: 'João', 
        cidade: 'Inconfidentes', 
        idade: 19, 
        sexo: 'Masculino'
    },
    { 
        nome: 'Maria', 
        cidade: 'Varginha', 
        idade: 22, 
        sexo: 'Feminino'
    },
    {
        nome: 'Marcos', 
        cidade: 'Santos', 
        idade: 16, 
        sexo: 'Masculino'
    },
    {
        nome: 'Renata', 
        cidade: 'Palmeiral', 
        idade: 38, 
        sexo: 'Feminino'
    },
    {
        nome: 'Bruno', 
        cidade: 'Floripa', 
        idade: 17, 
        sexo: 'Masculino'
    },
    {
        nome: 'Janaína', 
        cidade: 'Goiânia', 
        idade: 18, 
        sexo: 'Feminino'
    },
    {
        nome: 'Carlos', 
        cidade: 'Santos', 
        idade: 15, 
        sexo: 'Masculino'
    },
    {
        nome: 'Paula', 
        cidade: 'Machado', 
        idade: 22, 
        sexo: 'Feminino'
    },
    {
        nome: 'Nicolas', 
        cidade: 'Ubatuba', 
        idade: 28, 
        sexo: 'Masculino'
    }
];

var answer1 = document.getElementById("resposta1");
var answer2 = document.getElementById("resposta2");
var answer3 = document.getElementById("resposta3");
var answer4 = document.getElementById("resposta4");

answer1.innerHTML = `<b>Nomes e idades cadastrados:</b><br>`;
answer2.innerHTML += `<b>Pessoas que moram em Santos:</b><br>`;
answer3.innerHTML += `<b>Pessoas que têm mais de 18 anos:</b><br>`;
answer4.innerHTML += `<b>Pessoas do sexo masculino:</b><br>`;

pessoas.forEach(pessoa => {
    answer1.innerHTML += `${pessoa.nome} - ${pessoa.idade} anos<br>`;
    if (pessoa.cidade == 'Santos') {
        answer2.innerHTML += `${pessoa.nome} - ${pessoa.cidade}<br>`;
    }
    if (pessoa.idade >= 18) {
        answer3.innerHTML += `${pessoa.nome} - ${pessoa.idade}<br>`;
    }
    if (pessoa.sexo == 'Masculino') {
        answer4.innerHTML += `${pessoa.nome} - ${pessoa.sexo}<br>`;
    }
});