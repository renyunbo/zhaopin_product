const express = require('express');
//新建app
const app = express();

app.get('/',function(req,res){
    res.send('<h1>this is a test</h1>');
});

app.listen(9093,function(){
    console.log('Node app start at port 9093');
});