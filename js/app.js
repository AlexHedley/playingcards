var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.decks = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/cards.json';

        $http.get(file)
        .then(function(response) {
            $scope.decks = response.data.decks;
        });
    };

    $scope.init();
});