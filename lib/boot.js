var express  = require('express')
,	fs       = require('fs')
,	utils    = require('./utils')
,	routes   = require('./routes.json')
,	mongoose = require('mongoose')
,	db       = require('./db')
;

db.connect();

module.exports = function(parent, options) {
	fs.readdirSync(__dirname + '/../controllers').forEach(function(dirname) {
		var obj    = require('./../controllers/' + dirname)
		,	name   = obj.name || utils.removeExt(dirname)
		,	view   = obj.view || utils.singularise(dirname)
		,	prefix = obj.prefix || ''
		,	app    = express()
		;

		if (obj.engine)
			app.set('view engine', obj.engine);

		app.set('views', __dirname, '/../views/' + view);

		// if (obj.before) {
		// 	path = '/' + name + '/:' + name + '_id';
		// 	app.all(path, obj.before);

		// 	path = '/' + name + '/:' + name + '_id/*';
		// 	app.all(path, obj.before);
		// }

		var	path
		,	route
		,	method
		,	callbackName
		,	callback
		;

		for (path in routes) {
			route = routes[path];

			if (name != route.controller)
				continue;

			method = route.method.toLowerCase();

			callbackName = route.callback;
			callback = obj[callbackName];

			// Register routes
			app[method](path, callback);
		}

		// Mount the app
		parent.use(app);
	});
};