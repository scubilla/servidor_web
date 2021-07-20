
const http =  require('http');

http.createServer( (req, res ) => {

    //console.log(req);  ver el objeto request
    // status 200 esta todo ok
    
    //retornar como archivo de texto
    // 1 res.writeHead(200, {'Content-Type': 'text/plain'})
    //res.writeHead(200, {'Content-Type': 'application/json'})

    // 2 para usar con json creamos un objeto
    //const persona = {
    //    id: 1,
    //    nombre: 'Allegra'
    //}


    // 1 res.write('hola mundo');
    //res.write(JSON.stringify( persona ));
    res.write('hola mundo');
    res.end();

})
// escuchar el puerto 8080
.listen( 8080 );

console.log('escuchando el puerto', 8080);

