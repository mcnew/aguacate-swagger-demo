"use strict";
(function() {
	return {
		validation1 : function(name, description) {
			if (description === null || description.indexOf(name) >= 0) {
				return {
					value : 'success'
				};
			} else {
				return {
					message : 'The description does not contain the name'
				};
			}
		},
		updateCheckValidation : function(description, date, starTime, endTime, active) {
			var isModification = description !== null || date !== null || starTime !== null || endTime !== null;
			if (isModification && active !== null) {
				return {
					message : 'Don\'t modify active and any other attibute'
				};
			} else {
				return {
					value : 'success'
				};
			}
		}
	}
})();
