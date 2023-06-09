const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

// Configuração do handlebars
app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extends:true}));


app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home' 
    });
});

// ===============================
//         Exercício 1
// ===============================

app.get('/ex1', (req, res) => {
    res.render('ex1', {
        title: 'Exercício 1'
    });
});

app.post('/ex1', (req, res) => {
    const number = req.body.number;
    res.render('ex1', {
        title: 'Exercício 1',
        result: number > 0 ? `${number} é positivo` : number < 0 ? `${number} é negativo` : `${number} é igual a 0`
    });
});

// ===============================
//         Exercício 2
// ===============================

app.get('/ex2', (req, res) => {  
    let number = req.query.number;
    let result = `${number} x 0 = ${number*0}<br>
                ${number} x 1 = ${number*1}<br>
                ${number} x 2 = ${number*2}<br>
                ${number} x 3 = ${number*3}<br>
                ${number} x 4 = ${number*4}<br>
                ${number} x 5 = ${number*5}<br>
                ${number} x 6 = ${number*6}<br>
                ${number} x 7 = ${number*7}<br>
                ${number} x 8 = ${number*8}<br>
                ${number} x 9 = ${number*9}<br>
                ${number} x 10 = ${number*10}`;     
    
    res.render('ex2',{
        title: 'Exercício 2',
        result: (req.query.number) ? result : false
    });
});

// ===============================
//         Exercício 3
// ===============================

app.get('/ex3', (req, res) => {
    res.render('ex3', {
        title: 'Exercício 3' 
    });
});

// ===============================
//         Exercício 4
// ===============================

app.get('/ex4', (req, res) => {
    res.render('ex4', {
        title: 'Exercício 4' 
    });
});

app.post('/ex4', (req, res) => {
    let weight = req.body.weight;
    let height = req.body.height;
    let imc = (weight / (height * height)).toFixed(2);
    let min = (18.5 * (height * height)).toFixed(2);
    let max = (29.9 * (height * height)).toFixed(2);
    let med = ((18.5 * (height * height) + 29.9 * (height * height)) / 2).toFixed(2);
    let result = imc < 18.5 ? `IMC = ${imc}<br>Você está abaixo do peso ideal<br>Peso Mínimo: ${min}<br>Peso médio = ${med}<br>Peso máximo = ${max}` 
    : imc >= 18.5 && imc <= 24.9 ? `IMC = ${imc}<br>Parabéns - Você está em seu peso normal!<br>Peso Mínimo: ${min}<br>Peso médio = ${med}<br>Peso máximo = ${max}` 
    : imc >= 25 && imc <= 29.9 ? `IMC = ${imc}<br>Você está acima de seu peso (sobrepeso)<br>Peso Mínimo: ${min}<br>Peso médio = ${med}<br>Peso máximo = ${max}`
    : imc >= 30 && imc <= 34.9 ? `IMC = ${imc}<br>Obesidade grau I<br>Peso Mínimo: ${min}<br>Peso médio = ${med}<br>Peso máximo = ${max}`
    : imc >= 35 && imc <= 39.9 ? `IMC = ${imc}<br>Obesidade grau II<br>Peso Mínimo: ${min}<br>Peso médio = ${med}<br>Peso máximo = ${max}`
    : `IMC = ${imc}<br>Obesidade grau III<br>Peso Mínimo: ${min}<br>Peso médio = ${med}<br>Peso máximo = ${max}`

    res.render('ex4', {
        title: 'Exercício 4',
        result: result
    });
});

// ===============================
//         Exercício 5
// ===============================

app.get('/ex5', (req, res) => {
    res.render('ex5', {
        title: 'Exercício 5'
    });
});

app.post('/ex5', (req, res) => {
    const result = eval(`${req.body.value1} + ${req.body.value2} + ${req.body.value3}`) / 3;
    res.render('ex5', {
        title: 'Exercício 5',
        result: result >= 6 ? `Média = ${result}<br>APROVADO` : `Média = ${result}<br>REPROVADO`
    });
});

// ===============================
//         Exercício 6
// ===============================

app.get('/ex6', (req, res) => {
    res.render('ex6', {
        title: 'Exercício 6',
        result: "assets/img/neutro.png"
    });
});

app.post('/ex6', (req, res) => {
    const result = `assets/img/${req.body.ethanol < req.body.gas * 0.7 ? 'etanol' : 'gasolina'}.png`;
    res.render('ex6', {
        title: 'Exercício 6',
        result: result
    });
});

// ===============================
//         Exercício 7
// ===============================

app.get('/ex7', (req, res) => {
    res.render('ex7', {
        title: 'Exercício 7'
    });
});

app.post('/ex7/', (req, res) => {
    res.render('ex7', {
        title: 'Exercício 7',
        result: `assets/img/face${Math.floor(Math.random() * 6 + 1)}.png`
    });
});

// ===============================
//         Exercício 8
// ===============================

app.get('/ex8', (req, res) => {
    res.render('ex8', {
        title: 'Exercício 8'
    });
});

app.post('/ex8', (req, res) => {
    const result = `Nome: ${req.body.name}<br>E-mail: ${req.body.email}<br>CPF: ${req.body.cpf}<br>Idade: ${req.body.age}`
    res.render('ex8', {
        title: 'Exercício 8',
        result: result
    });
});

// ===============================
//         Exercício 9
// ===============================

app.get('/ex9', (req, res) => {
    res.render('ex9', {
        title: 'Exercício 9' 
    });
});

app.post('/ex9', (req, res) => {
    const numbers = req.body.numbers;
    const information = { countNegative: 0, countPositive: 0, countEven: 0, countOdd: 0 };

    numbers.split(' ').forEach(number => {
        information.countNegative += number < 0 ? 1 : 0;
        information.countPositive += number >= 0 ? 1 : 0;
        information.countEven += number % 2 === 0 ? 1 : 0;
        information.countOdd += number % 2 !== 0 ? 1 : 0;
    });

    const result = `
        Quantidade de negativos digitados: ${information.countNegative}<br>
        Quantidade de positivos digitados: ${information.countPositive}<br>
        Quantidade de pares digitados: ${information.countEven}<br>
        Quantidade de ímpares digitados: ${information.countOdd}
    `;

    res.render('ex9', {
        title: 'Exercício 9',
        result: result
    });
});

// ===============================
//         Exercício 10
// ===============================

app.get('/ex10', (req, res) => {
    res.render('ex10', {
        title: 'Exercício 10' 
    });
});

app.post('/ex10', (req, res) => {
    const numbers = req.body.numbers;
    const result = numbers.split(' ').reverse().join(' ');
    res.render('ex10', {
        title: 'Exercício 10',
        result: result
    });
});

// ===============================
//         Exercício 11
// ===============================

app.get('/ex11', (req, res) => {
    const peoples = [
        { nome: 'Ana', cidade: 'Lavras', idade: 21, sexo: 'Feminino' },
        { nome: 'João', cidade: 'Inconfidentes', idade: 19, sexo: 'Masculino' },
        { nome: 'Maria', cidade: 'Varginha', idade: 22, sexo: 'Feminino' },
        { nome: 'Marcos', cidade: 'Santos', idade: 16, sexo: 'Masculino' },
        { nome: 'Renata', cidade: 'Palmeiral', idade: 38, sexo: 'Feminino' },
        { nome: 'Bruno', cidade: 'Floripa', idade: 17, sexo: 'Masculino' },
        { nome: 'Janaína', cidade: 'Goiânia', idade: 18, sexo: 'Feminino' },
        { nome: 'Carlos', cidade: 'Santos', idade: 15, sexo: 'Masculino' },
        { nome: 'Paula', cidade: 'Machado', idade: 22, sexo: 'Feminino' },
        { nome: 'Nicolas', cidade: 'Ubatuba', idade: 28, sexo: 'Masculino' }
    ];

    const results = {
        result1: '<b>Nomes e idades cadastrados:</b><br>',
        result2: '<b>Pessoas que moram em Santos:</b><br>',
        result3: '<b>Pessoas que têm mais de 18 anos:</b><br>',
        result4: '<b>Pessoas do sexo masculino:</b><br>'
    };

    peoples.forEach(({ nome, cidade, idade, sexo }) => {
        results.result1 += `${nome} - ${idade} anos<br>`;
        if (cidade === 'Santos') results.result2 += `${nome} - ${cidade}<br>`;
        if (idade >= 18) results.result3 += `${nome} - ${idade}<br>`;
        if (sexo === 'Masculino') results.result4 += `${nome} - ${sexo}<br>`;
    });

    res.render('ex11', {
        title: 'Exercício 11',
        results: results
    });
});

// ===============================
//         Exercício 12
// ===============================

app.get('/ex12', (req, res) => {
    let result = '';
    let [num1, num2] = [0, 1];
    let number = [];

    for (let i = 1; i <= 150; i++) {
        number.push(num1);
        [num1, num2] = [num2, num1 + num2];
        result += `${i}° - ${num2}<br>`;
    }

    res.render('ex12', {
        title: 'Exercício 12',
        result: result
    });
});

// ===============================
//         Exercício 13
// ===============================

app.get('/ex13', (req, res) => {
    res.render('ex13', {
        title: 'Exercício 13' 
    });
});

app.post('/ex13', (req, res) => {
    const number = req.body.number;
    let isPrime = number > 1;

    for (let i = 2; isPrime && i <= Math.sqrt(number); i++) {
        isPrime = number % i !== 0;
    }

    res.render('ex13', {
        title: 'Exercício 13',
        result: isPrime ? 'Verdadeiro! É um número primo.' : 'Falso! Não é um número primo.'
    });
});


// ===============================
//         Exercício 14
// ===============================

app.get('/ex14', (req, res) => {
    res.render('ex14', {
        title: 'Exercício 14' 
    });
});

app.post('/ex14', (req, res) => {
    const months = {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
        8: 'Agosto',
        9: 'Setembro',
        10: 'Outubro',
        11: 'Novembro',
        12: 'Dezembro',
    };

    res.render('ex14', {
        title: 'Exercício 14',
        result: months[req.body.number] || 'Não existe um mês correspondente a este número.' 
    });
});

// ===============================
//         Exercício 15
// ===============================

app.get('/ex15', (req, res) => {
    res.render('ex15', {
        title: 'Exercício 15' 
    });
});

app.post('/ex15', (req, res) => {
    const date = new Date(req.body.date.replaceAll('-', '/'));
    res.render('ex15', {
       title: 'Exercício 15',
       result: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", })
    });
});

app.listen(PORT, function(){
    console.log(`Servidor rodando na url http://localhost:${PORT}/`);
});
