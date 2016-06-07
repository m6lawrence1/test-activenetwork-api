
app.controller('externalcontroller',
	function ($scope, $timeout, githubService) {
        var timeout;
        $scope.$watch('username', function (newUsername) {if (newUsername) {
			// if there is a timeout already in progress
			if (timeout) $timeout.cancel(timeout);
			timeout = $timeout(function() {
				githubService.events(newUsername)
					.success(function(data, status) {
						$scope.events = data.data;
					});
			}, 350);
		}
	});
});








		