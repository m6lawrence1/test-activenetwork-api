var app = angular.module('myModule');

app.service('myService', function () {
	var storedNumber = {};
	return {
		numberGetter: function (num) {
			storedNumber = num;
		}
	};
});

