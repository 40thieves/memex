exports.singularise = function(plural) {
	var singular = plural.slice(0, -1);

	return singular;
};