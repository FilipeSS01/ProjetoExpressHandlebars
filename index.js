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


app.get('/', function(req, res){
    res.render('home', {
        title: 'Home' 
    })
});

// ===============================
//         Exercício 1
// ===============================

app.get('/ex1', function(req, res){
    res.render('home', {
        title: 'Exercício 1' 
    })
});

app.post('/ex1', function(req, res){
    res.render('home', {
        title: 'Exercício 1'
    })
});

// ===============================
//         Exercício 2
// ===============================

app.get('/ex2', function(req, res){    
    res.render('home', {
        title: 'Exercício 2'
    })
});

// ===============================
//         Exercício 3
// ===============================

app.get('/ex3', function(req, res){
    res.render('home', {
        title: 'Exercício 3' 
    })
});

// ===============================
//         Exercício 4
// ===============================

app.get('/ex4', function(req, res){
    res.render('home', {
        title: 'Exercício 4' 
    })
});

// ===============================
//         Exercício 5
// ===============================

app.get('/ex5', function(req, res){
    res.render('home', {
        title: 'Exercício 5' 
    })
});

// ===============================
//         Exercício 6
// ===============================

app.get('/ex6', function(req, res){
    res.render('home', {
        title: 'Exercício 6' 
    })
});

// ===============================
//         Exercício 7
// ===============================

app.get('/ex7', function(req, res){
    res.render('home', {
        title: 'Exercício 7' 
    })
});

// ===============================
//         Exercício 8
// ===============================

app.get('/ex8', function(req, res){
    res.render('home', {
        title: 'Exercício 8' 
    })
});

// ===============================
//         Exercício 9
// ===============================

app.get('/ex9', function(req, res){
    res.render('home', {
        title: 'Exercício 9' 
    })
});

// ===============================
//         Exercício 10
// ===============================

app.get('/ex10', function(req, res){
    res.render('home', {
        title: 'Exercício 10' 
    })
});

// ===============================
//         Exercício 11
// ===============================

app.get('/ex11', function(req, res){
    res.render('home', {
        title: 'Exercício 11' 
    })
});

// ===============================
//         Exercício 12
// ===============================

app.get('/ex12', function(req, res){
    res.render('home', {
        title: 'Exercício 12' 
    })
});

// ===============================
//         Exercício 13
// ===============================

app.get('/ex13', function(req, res){
    res.render('home', {
        title: 'Exercício 13' 
    })
});

// ===============================
//         Exercício 14
// ===============================

app.get('/ex14', function(req, res){
    res.render('home', {
        title: 'Exercício 14' 
    })
});

// ===============================
//         Exercício 15
// ===============================

app.get('/ex15', function(req, res){
    res.render('home', {
        title: 'Exercício 15' 
    })
});

app.listen(PORT, function(){
    console.log(`Servidor rodando na url http://localhost:${PORT}/`);
});
