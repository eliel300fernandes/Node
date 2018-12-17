var http = require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Imprimindo mensagem no navegador com NODE');
}).listen(3001);
