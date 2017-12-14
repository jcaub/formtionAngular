'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http',function($scope,$http) {
  $scope.recupInfo=function(){
    $http({
      method:'GET',
      url:'../models/listcredits.json'
    }).then(function successCallback(response){
      $scope.collecCredit=response;
      console.log($scope.data);
    }, function errorCallback(response){
      console.log(response);
    });
  };
}])

.directive('formList',function(){
  return {
    restrict:'E',
    templateUrl:'../widget/formlistapp.html'
  }
});

