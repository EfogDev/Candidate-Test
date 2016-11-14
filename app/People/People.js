'use strict';

angular.module('myApp.People', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/People', {
    templateUrl: 'People/People.html',
    controller: 'PeopleCtrl'
  });
}])

.controller('PeopleCtrl', [function() {
  $scope.loading = true;

  $.ajax({
    url: '/source',
    method: 'GET',
    success: function (data) {
      $scope.people = data;
      $scope.loading = false;
    }
  });
}]);