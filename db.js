const mongoose = require('mongoose');
module.exports = () =>{
    function connect(){
        mongoose.connect('localhost:27017', function(err){
            if(err){
                console.error('mongodb connection error');
                console.log(err);
            }
            console.log('mongodb connected');
        },{ useNewUrlParser: true });
    }
    connect();
    mongoose.connection.on('disconnected',connect);
    require('./model/UserModel.js');
}