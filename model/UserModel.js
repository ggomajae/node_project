var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var UserSchema = new Schema({
    name: String,
    data: Object
});

//UserSchema.plugin(autoIncrement.plugin,{model: 'user',filde:'id',startAt : 1});
module.exports = mongoose.model('user',UserSchema);