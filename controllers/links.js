var mongoose        = require('mongoose')
,	Model           = require('../models/link').model
,	linksController
,	query
;

linksController = {
	before: function(req, res, next) {
		// Set up query
		query = Model.find();
		
		next();
	},

	getAll: function(req, res, next) {
		linksController.execute(res, next);
	},

	getSingle: function(req, res, next) {
		var id = req.params.id;

		query.where('id').equals(id);

		linksController.execute(res, next);
	},

	postSingle: function(req, res, next) {

	},

	putSingle: function(req, res, next) {

	},

	deleteSingle: function(req, res, next) {

	},

	execute: function(res, next) {
		query.exec(function(err, links) {
			if (err) {
				console.log(err);
				return next(err);
			}

			if ( ! links.length)
				return next(404, 'Not found');

			res.send(links);
		});
	}
};

exports.name = 'links';
exports.view = 'link';

exports.before      = linksController.before;
exports.getAll      = linksController.getAll;
exports.getSingle   = linksController.getSingle;
exports.postSingle  = linksController.postSingle;
exports.putSingle   = linksController.putSingle;
exports.deletSingle = linksController.deleteSingle;