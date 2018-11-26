var express = require('express');
var router = express.Router();
var userModel = require('../model/UserModel');

router.get('/',function(req, res){
    userModel.find(function(err,user){
        res.render('user/user',
            { user : user }
        );
    }).sort({id:-1});
});


router.get('/write',function(req,res){
    res.render('user/write',{user : ""});
});
router.post('/write',function(req, res){
    var user = new userModel({
        name: req.body.name,
        data: req.body.data
    });
    user.save(function(err){
        res.redirect('/user');
    });
});

module.exports = router;