var mongoose       = require('mongoose')
,	Model          = require('../models/tag').model
,	tagsController
,	query
;

exports.name = 'tags';
exports.view = 'tag';

tagsController = {
	before: function(req, res, next) {
		// Set up query
		query = Model.find();
		
		next();
	},

	getAll: function(req, res, next) {
		tagsController.execute(res, next);
	},

	getSingle: function(req, res, next) {
		var id = req.params.id;

		query.where('id').equals(id);

		execute(res, next);
	},

	postSingle: function(req, res, next) {

	},

	putSingle: function(req, res, next) {

	},

	deleteSingle: function(req, res, next) {

	},

	execute: function(res, next) {
		query.exec(function(err, tags) {
			if (err) {
				console.log(err);
				return next(err);
			}

			if ( ! tags.length)
				return next(404, 'Not found');

			res.send(tags);
		});
	}
};

exports.before      = tagsController.before;
exports.getAll      = tagsController.getAll;
exports.getSingle   = tagsController.getSingle;
exports.postSingle  = tagsController.postSingle;
exports.putSingle   = tagsController.putSingle;
exports.deletSingle = tagsController.deleteSingle;