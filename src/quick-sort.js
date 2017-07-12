
'use strict';

function quickSort(input) {

   if (input.length <= 1) { 
		return input;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = input.pop();
		var length = input.length;

		for (var i = 0; i < length; i++) {
			if (input[i] <= pivot) {
				left.push(input[i]);
			} else {
				right.push(input[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	} 
    
};
module.exports = quickSort;

