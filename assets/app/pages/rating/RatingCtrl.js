/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('reliablyMe.rating').controller('RatingCtrl', RatingCtrl);

  /** @ngInject */
  function RatingCtrl($scope, $http) {

  	console.log("RatingCtrl!");

    $scope.completeTableData = [];
    $scope.incompleteTableData = [];

    $scope.loadTableData = function() { 
	  var userId=$location.search();
      var id=userId.userid;

      $http.post('/GetCompleteUserList?userid='+id.).then(function(response) {
        $scope.completeTableData=response.data.records;
      })
      $http.post('/GetIncompleteUserList?userid='+id).then(function(response) {
        $scope.incompleteTableData=response.data.records;
      })
    };

    $scope.loadTableData();

    $scope.refreshTable = function() {
    	$scope.loadTableData();
    };
  }

})();