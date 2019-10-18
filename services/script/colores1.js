(function() {
	return {
		validation1 : function(name, description) {
			if (description !== null && description.indexOf(name) >= 0) {
				return {
					value : 'success'
				};
			} else {
				return {
					message : 'The description does not contain the name'
				};
			}
		}
	}
})();
