var express = require('express');
var http = require('http');
var app = express();
app.use(express.static('public'));


app.get('/', function () {

});

app.listen(3000, function () {
    console.log('the source app listening on port 3000')
});