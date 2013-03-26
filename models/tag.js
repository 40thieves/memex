var mongoose = require('mongoose')
,	db       = require('../../lib/db')
,	Schema   = mongoose.Schema
,	schema
;

schema = Schema({
	link_id: {
		type: Schema.Types.ObjectId,
		required: true
	},
	dictionary_id: {
		type: Schema.Types.ObjectId,
		required: true
	}
});