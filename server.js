var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port, function(){
  console.log('=======================');
  console.log('Running on port ' + port);
  console.log('========================');
});
