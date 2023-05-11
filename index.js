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
    res.render('home', {
        title: 'Exercício 1' 
    });
});

app.post('/ex1', (req, res) => {
    let number = req.body.number;
    let result = number > 0 ? `${number} é positivo` : number < 0 ? `${number} é negativo` : `${number} é igual a 0`;

    res.render('home', {
        title: 'Exercício 1',
        result: result
    });
});

// ===============================
//         Exercício 2
// ===============================

app.get('/ex2', (req, res) => {    
    res.render('home', {
        title: 'Exercício 2'
    });
});

// ===============================
//         Exercício 3
// ===============================

app.get('/ex3', (req, res) => {
    res.render('home', {
        title: 'Exercício 3' 
    });
});

// ===============================
//         Exercício 4
// ===============================

app.get('/ex4', (req, res) => {
    res.render('home', {
        title: 'Exercício 4' 
    });
});

// ===============================
//         Exercício 5
// ===============================

app.get('/ex5', (req, res) => {
    res.render('home', {
        title: 'Exercício 5' 
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
    res.render('home', {
        title: 'Exercício 7' 
    });
});

// ===============================
//         Exercício 8
// ===============================

app.get('/ex8', (req, res) => {
    res.render('home', {
        title: 'Exercício 8' 
    });
});

// ===============================
//         Exercício 9
// ===============================

app.get('/ex9', (req, res) => {
    res.render('home', {
        title: 'Exercício 9' 
    });
});

// ===============================
//         Exercício 10
// ===============================

app.get('/ex10', (req, res) => {
    res.render('home', {
        title: 'Exercício 10' 
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
    let numeros = [];

    for (let i = 1; i <= 150; i++) {
        numeros.push(num1);
        [num1, num2] = [num2, num1 + num2];
        result += `${i}° - ${num2}<br>`;
    }
    res.render('ex12', {
        title: 'Exercício 12',
        result: result
    });

    res.render('ex12', {
        title: 'Exercício 12' 
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
    let number = req.body.number;
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
        '1': 'Janeiro',
        '2': 'Fevereiro',
        '3': 'Março',
        '4': 'Abril',
        '5': 'Maio',
        '6': 'Junho',
        '7': 'Julho',
        '8': 'Agosto',
        '9': 'Setembro',
        '10': 'Outubro',
        '11': 'Novembro',
        '12': 'Dezembro',
    };

    let result = months[req.body.number] || 'Não existe um mês correspondente a este número.';
    res.render('ex14', {
        title: 'Exercício 14',
        result: result 
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
    let date = new Date(req.body.date.replaceAll('-', '/'));
    let result = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", });
    res.render('ex15', {
       title: 'Exercício 15',
       result: result
    });
});

app.listen(PORT, function(){
    console.log(`Servidor rodando na url http://localhost:${PORT}/`);
});
