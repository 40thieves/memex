exports.singularise = function(plural) {
	var regex
	,	singular
	;

	regex = /s$|s.js$/; // matches `links` and `links.js`
	singular = plural.replace(regex, '');

	return singular;
};

exports.removeExt = function(filename) {
	var regex
	,	ret
	;

	regex = /.js$/; // matches `links.js`
	ret = filename.replace(regex, '');

	return ret;
};