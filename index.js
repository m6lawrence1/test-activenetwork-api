

var express = require('express'); 
var store = require('./random');
var app = express();


app.get('/api/lyric', function (req, res) {  
 res.send(store[Math.floor(Math.random()*store.length)]);
});

var server = app.listen(3000, function () { 
    var host = server.address().address;
    var port = server.address().port;
    console.log("fml");
});
    
app.use(express.static(__dirname + '/public'));