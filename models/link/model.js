var mongoose = require('mongoose')
,	db       = require('../../lib/db')
,	Schema   = mongoose.Schema
,	schema
;

schema = new mongoose.Schema({
	// TODO: add id
	title: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	description: String,
	created_at: Date,
	updated_at: Date,
	deleted_at: Date
});

exports.model = mongoose.model('Link', schema);