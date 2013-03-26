var mongoose = require('mongoose')
,	db       = require('../lib/db')
,	Schema   = mongoose.Schema
,	schema
;

schema = Schema({
	id: {
		type: Number,
		required: true
	},
	tag_name: {
		type: String,
		required: true
	}
});