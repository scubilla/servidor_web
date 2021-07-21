const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
//const port =  process.env.('hbs');
const port =  process.env.PORT;

// handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


// para hacer publica la carpeta public y mostrar el index, se debe crear un middleware
app.use( express.static('public') );


// cambiar function por funcion de fecha
//app.get('/', function (req, res) {
// si se usa public esto ya no se ejecutara    

//app.get('/', (req, res) => {
//res.send('Hello World')
//})

// comentar para desplegar apps react y angular

/* app.get('/', (req, res) => {
  //res.send('Hola mundo');
  res.render('home',{
    nombre:'Allegra',
    titulo:'Curso de Node'
  });
});


// crear ruta para hola mundo
app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:'Allegra',
    titulo:'Curso de Node'
  });
  
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Allegra',
    titulo:'Curso de Node'
  });
}); */

// manejador de errores
app.get('*', ( req, res ) => {
    //res.send('404 pagina no encontrada')
    // res.sendFile(__dirname + '/public/404.html');
    res.sendFile(__dirname + '/public/index.html');
});
 
//app.listen(8080)
app.listen(port, () => {
  console.log(`escuchando en http://localhost:${port}`)
})

