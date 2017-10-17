var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let songSchema = new Schema ({
	name: String,
	trackNumber: Number
});

let Song = mongoose.model('song', songSchema);

module.exports = Song;