var App = angular.module('fidesio', []);

App.controller("ctrl", function($scope, $http, $log) {

	$scope.test = "Ca marche !!";
	
	//Récupération de l'objet JSON du webservice'
	$scope.webservice = "https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&rows=10&start=1&sort=code_postal&facet=tco_libelle&facet=code_postal";

	$http.get($scope.webservice).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.table = response.data;
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		$scope.table = response;
	});
	




});
 	