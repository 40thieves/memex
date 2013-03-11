var mongoose = require('mongoose')
,	db       = require('../../lib/db')
,	Schema   = mongoose.Schema
,	schema
;

schema = Schema({
	tag_name: {
		type: String,
		required: true
	}
});