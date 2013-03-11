var model = require('../../models/link/link');

exports.view = 'link';

exports.before = function(req, res, next) {
	var id = req.params.link_id;

	if ( ! id)
		return next(new Error('Model not found'));

	// Get model
	next();

	/*
	
	Alternative idea - use `before` function to set up model? (also validate/filter?)
	Then in called function, fetch actual models - gets correct models based on call (single/all models)

	 */
};

exports.getAll = function(req, res, next) {
	

	res.send('<html>Hello World</html>');
};

exports.getSingle = function(req, res, next) {
	
};

exports.postSingle = function(req, res, next) {

};

exports.putSingle = function(req, res, next) {

};

exports.deleteSingle = function(req, res, next) {

};