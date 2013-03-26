var mongoose = require('mongoose')
,	Model    = require('../models/link').model
,	query
;

exports.name = 'links';
exports.view = 'link';

exports.before = function(req, res, next) {
	// Set up query
	query = Model.find();
	
	next();
};

exports.getAll = function(req, res, next) {
	execute(res, next);
};

exports.getSingle = function(req, res, next) {
	var id = req.params.id;

	query.where('title').equals('Test 1');

	execute(res, next);
};

exports.postSingle = function(req, res, next) {

};

exports.putSingle = function(req, res, next) {

};

exports.deleteSingle = function(req, res, next) {

};

execute = function(res, next) {
	query.exec(function(err, links) {
		if (err) {
			console.log(err);
			return next(err);
		}

		if ( ! links.length)
			return next(404, 'Not found');

		res.send(links);
	});
};