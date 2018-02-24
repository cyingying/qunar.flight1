var express = require('express');
var path = require('path');
var server = express();

server.use(express.static(path.join(__dirname,'public')))
server.listen(8080,function() {
    console.log('server listening localhost:8080');
})

