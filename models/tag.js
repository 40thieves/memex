var mongoose = require('mongoose')
,	db       = require('../lib/db')
,	Schema   = mongoose.Schema
,	schema
;

schema = new mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	link_id: {
		type: Number,
		required: true
	},
	dictionary_id: {
		type: Number,
		required: true
	}
});

exports.model = mongoose.model('Tag', schema);