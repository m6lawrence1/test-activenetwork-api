var app = angular.module('myModule');

app.controller('inputcontroller', function ($scope) {
	$scope.verify = function (number) {
		var number = $scope.number;
        if (number % 3 === 0 && number % 5 === 0) {
            $scope.result = "FizzBuzz";
        } else if (number % 5 === 0) {
            $scope.result = "Buzz";
        } else if (number % 3 === 0) {
            $scope.result = "Fizz";
        } else {
            $scope.result = "Your number is not divisble by 3 or 5.  Try again!";
        }
    };
});

