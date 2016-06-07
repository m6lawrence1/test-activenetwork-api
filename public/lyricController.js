var app = angular.module('myModule');

//app.controller('lyricController', ["$scope", "lyricService", function($scope, lyricService){	
//    var data = lyricService();
//    console.log(data);
//    $scope.lyric = data;	
//}]);

app.controller('lyricController', ['$scope', 'lyricService', function($scope, lyricService) {
	lyricService.then(function(response) {
        console.log(response.data);
		$scope.yay = response.data;
	});
}]);