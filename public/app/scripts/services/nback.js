'use strict';

/**
 * @ngdoc service
 * @name textSupportApp.nback
 * @description
 * # nback
 * Service in the textSupportApp.
 */
angular.module('textSupportApp')
  .service('nback', function nback($http) {
    this.sendSMS = function(toNum, message){
    	var obj = {
    		toNum: toNum,
    		message: message
    	}
    	$http.post("http://localhost:8500/support/messages/", obj).then(function(data){
    		console.log(data);
    	});
    };
  });
