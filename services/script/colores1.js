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
					message : 'The description must contain the name'
				};
			}
		},
		updateCheckValidation : function(originalActive, description, date, starTime, endTime, active) {
			var isModification = description !== null || date !== null || starTime !== null || endTime !== null;
			if (isModification) {
				if (active !== null) {
					return {
						message : 'Cannot modify the active attribute together with other attributes'
					};
				} else {
					if (originalActive) {
						return {
							value : 'success'
						};
					} else {
						return {
							message : 'Cannot modify attributes of an inactive element'
						};
					}
				}
			} else {
				return {
					value : 'success'
				};
			}
		}
	}
})();
