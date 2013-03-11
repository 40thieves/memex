var mongoose   = require('mongoose')
,	connection
;

exports.connect = function() {
	// Connect to mongo db
	mongoose.connect('localhost', 'memex');
};

exports.connection = mongoose.connection;

this.connection.on('error', function callback() {
	// console.log('Mongo Connection: Error');
});

this.connection.on('open', function callback() {
	// console.log('Mongo Conecction: Success!');
});