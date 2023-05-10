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

app.listen(PORT, function(){
    console.log(`Servidor rodando na url http://localhost:${PORT}/`);
});
