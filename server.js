const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper')

const port = process.env.PORT || 3000; //configuración para usar en herouku

app.use(express.static(__dirname + '/public')); ///middleware.-callback que 
//se ejecutara sin importar el url que el cliente solicite
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan'
    });
})
app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log("Escuchando...")
})