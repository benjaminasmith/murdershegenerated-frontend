'use strict';

/* Services */

var murderServices = angular.module('murderServices', ['serverBaseURL', 'ngResource']);

murderServices.factory('Mystery', ['$http', function($http) {
	var initialized = false;
	var mystery = [];

	function writeMystery(players) {
		console.log("Writing the mystery...");
		mystery = $http.get(this.serverBaseURL + 'players/' + players).then(function(httpResponse) {
	    if(httpResponse == null) return null;
			console.log("Mystery solved!");
      initialized = true;
	    return httpResponse.data;
	  }).catch(function(err) {
	    console.error(err);
	  });
		return mystery;
	}

  var f = {};

  f.query = function(players) { return (initialized && mystery.cast.length == players ? mystery : writeMystery(players)) };

  return f;
}]);
