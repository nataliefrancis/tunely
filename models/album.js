var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let Song = require('./songs');

let albumSchema = new Schema ({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: [String],
	songs: [Song.schema]
});

let Album = mongoose.model('albums', albumSchema);

module.exports = Album;
