"use strict";
(function() {
	
	function calcDigit(int) {
		var sum = 0;
		var length = int.length;
		for (var i = 0; i < length; i++) {
			sum += parseInt(int.charAt(i));
		}
		var sSum = sum.toString();
		if(sSum.length === 1) {
			return sSum;
		} else {
			return calcDigit(sSum);
		}
	}
	
	return {
		validateCode : function(code) {
			if (code === null || code.length === 0) {
				return {
					message : 'Missing code'
				};
			} else {
				var length = code.length;
				var digit;
				var calc;
				switch (length) {
				case 5:
					digit = code.substring(length - 1);
					calc = calcDigit(code.substring(0, length-1));
					break;
				case 6:
					digit = code.substring(0, 1);
					calc = calcDigit(code.substring(1, length));
					break;
				default:
					return {
						message : 'Invalid code'
					};
				}
				if(digit === calc) {
					return {
						value : 'success'
					};
				} else {
					return {
						message : 'Invalid digit'
					};
				}
			}
		}
	}
})();
