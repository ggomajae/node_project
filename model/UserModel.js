var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var userSchema = new Schema({
    name: String,
    data: Object
});


module.exports = mongoose.model('user',userSchema);
autoIncrement.initialize(mongoose.connection);
userSchema.plugin( autoIncrement.plugin , {
    model: 'user',
    field:'id',
    startAt : 1
});