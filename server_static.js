var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('You have successfully created second app!');
})

var server = app.listen(3000,  function(){
    var host = server.address().adress
    var port = server.address().port
    console.log('Example app listening at http://%$:%$', host, port)
})