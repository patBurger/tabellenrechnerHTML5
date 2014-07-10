/**
 * TABLE CONTROLLER
 *
 * Created by pburger on 30.06.2014.
 */

var tableController = angular.module('tableController', []);

tableController.controller('TableController', ['$scope', '$filter', 'requestCurrentStandings', function($scope, $filter, Standings){
    Standings.query(function(data){
        $scope.standings = data.standing;
        $scope.calculateGoalDifference();

        localStorage.setItem('standings', angular.toJson($scope.standing));
    });

    $scope.calculateGoalDifference = function(){

        for (var i=0; i < $scope.standings.length; i++){
            var goals = $scope.standings[i].goalScoredFor;
            var goalsAgainst = $scope.standings[i].goalScoredAgainst;
            if (goals && goalsAgainst) {
                $scope.standings[i].goalDifference = goals - goalsAgainst;
            }
        }
    };

    $scope.orderBy = function(predicate, reverse) {
        $scope.currentStanding = $filter('orderBy')($scope.standings, predicate, reverse);
        $scope.standings = $scope.currentStanding;
    };

    $scope.writeNewStanding = function (){

    }
}]);