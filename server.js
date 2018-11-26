var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs  = require('fs');


//서버가 읽을 수 있도록 HTMl 의 위치를 정의
app.set('views',__dirname + '/views');
//서버가 HTML 렌더링을 할 때, ejs 엔진을 사용하도록 설정.
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);



var server = app.listen(3000,function(){
    console.log("Express server has started on port 3000");
});

app.use('/public',express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret : '@#@MYSIGN#@$#$',
    resave:false,
    saveUninitialized:true
}));

//라우터 모듈 main.js 를 불러와서 app 전달.
var router = require('./router/main')(app,fs);