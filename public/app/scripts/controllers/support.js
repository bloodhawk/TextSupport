'use strict';

/**
 * @ngdoc function
 * @name textSupportApp.controller:SupportCtrl
 * @description
 * # SupportCtrl
 * Controller of the textSupportApp
 */
angular.module('textSupportApp')
  .controller('SupportCtrl', function ($scope, $firebase, nback) {
    var ref = new Firebase('https://textsupport92.firebaseio.com/numbers');
	var obj = $firebase(ref).$asObject();
	$scope.modelObj = {};
	obj.$bindTo($scope, "numbers").then(function(){
		console.log($scope.numbers);
	});
	$scope.sendSMS = function(toNum){
		var input = $scope.modelObj[toNum];
		nback.sendSMS(toNum, input);
		$scope.modelObj[toNum] = '';

	};
});
