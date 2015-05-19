var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RantSchema = new Schema({
    username: String,
    rantInfo: String,
    date_submitted: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Rant', RantSchema);