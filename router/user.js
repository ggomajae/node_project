var express = require('express');
var router = express.Router();
var userModel = require('../model/UserModel');

router.get('/',function(req, res){
    res.render('user/user');
});

router.get('/list',function(req, res){
    userModel.find(function(err,user){
        res.render('user/list',
            {user : user}
        );
    }).sort({id:-1});
});


module.exports = router;