var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserModel');

router.get('/',function(req, res){
    UserModel.find(function(err,user){
        res.render('user/list'),
        {user : user }
    }).sort({id:-1});
});

module.exports = router;