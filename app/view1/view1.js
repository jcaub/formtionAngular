'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
 
  $scope.personnes=[];
  
  $scope.personne={
    nom :null,
    prenom:null,
    telephone:null,
    mail:null,
    montant:null,
  };

  $scope.montants=[1000,2000,3000,4000];

  $scope.savePersonne=function(){
    console.log($scope.personne);
  };

  $scope.addCredit=function(personne){

    $scope.personne={
      nom :personne.nom,
      prenom:personne.prenom,
      telephone:personne.telephone,
      mail:personne.mail,
      montant:personne.montant,
    };

    if(!$scope.credit.nom.$invalid && !$scope.credit.prenom.$invalid && !$scope.credit.montant.$invalid&& !$scope.credit.telephone.$invalid && !$scope.credit.mail.$invalid){
      $scope.personnes.push(personne);
    }    
    console.log($scope.credit.nom.$invalide);
  }
}])

.directive('menuCredit',function(){
  return {
    restrict:'E',
    templateUrl:'../widget/menu.html'
  }
})

.directive('formCredit',function(){
  return {
    restrict:'E',
    templateUrl:'../widget/formcredit.html'
  }
});