const express = require('express');
const router = express.Router(); //라우터 분리
var app = express();
var user = require('./user.js');

router.get('/', (req, res) => { //app대신 router에 연결
  res.render('home');
});



module.exports = router; // 모듈로 만드는 부분