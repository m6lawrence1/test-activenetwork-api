var app = angular.module('myModule');

app.factory('lyricService', function($http) {
    return $http.get('/api/lyric');
});