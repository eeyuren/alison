var http = require("http");
var fs = require('fs');

http
.createServer(function(req, res) {
    fs.readFile('myapp.html', function(err, data) {

    console.log(req, res);
    res. writeHead(200, { "Content-Type": "text/html" })
    res.write(data);
    res.end();
    });
})
.listen(8080);