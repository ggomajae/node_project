var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var route = require('./router/route.js');
var user = require('./router/user.js');



//몽고디비 연결
var mongoose= require('mongoose');
mongoose.Promise = global.Promise;
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    console.log('mongodb connect');
});

var connect = mongoose.connect('mongodb://localhost/mongodb_tutorial',{ useNewUrlParser: true });
autoIncrement.initialize(mongoose.connection);




//서버가 HTML 렌더링을 할 때, ejs 엔진을 사용하도록 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


//미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//정적파일 지정 미들웨어. 
app.use('/public',express.static('public'));

//세션사용
app.use(session({
    secret : '@#@MYSIGN#@$#$',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge : 2000 * 60 * 60
    }
}));

//기본라우터
app.use('/', route);
app.use('/user', user);



app.use((req, res, next) => { // 404 처리 부분
    res.status(404).send('일치하는 주소가 없습니다!');
});
app.use((err, req, res, next) => { // 에러 처리 부분
console.error(err.stack); // 에러 메시지 표시
res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});


app.listen(3000,function(){
    console.log("Express server has started on port 3000");
});

