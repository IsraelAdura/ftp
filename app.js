var express = require('express');
var formidable = require('formidable');

var app = express();

app.set('port',process.env.PORT || 8080);

app.listen(app.get('port'), function(){
    console.log('listening @ 8080');
})

module.exports=app;