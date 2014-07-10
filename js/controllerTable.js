/**
 * Created by pburger on 25.06.2014.
 */

var m_1 = { gameId: 105,
    name: "Bayern Muenchen",
    short: "Bayern",
    pos: 1,
    prevPos: 2,
    matchdays: 25,
    wins: 10,
    ties: 5,
    defeats: 10,
    goals: 50,
    goalsAgainst: 39,
    goalsDiff: 11,
    points: 35
};
var m_2 = { gameId: 106,
    name: "Borussia Dortmund",
    short: "BVB",
    pos: 5,
    prevPos: 5,
    matchdays: 25,
    wins: 8,
    ties: 7,
    defeats: 10,
    goals: 70,
    goalsAgainst: 45,
    goalsDiff: 25,
    points: 35
};
var m_3 = { gameId: 107,
    name: "Hertha BSC",
    short: "BSC",
    pos: 3,
    prevPos: 1,
    matchdays: 24,
    wins: 9,
    ties: 7,
    defeats: 8,
    goals: 34,
    goalsAgainst: 23,
    goalsDiff: 11,
    points: 35
};
var m_4 = { gameId: 110,
    name: "Schalke 04",
    short: "S04",
    pos: 2,
    prevPos: 3,
    matchdays: 25,
    wins: 9,
    ties: 8,
    defeats: 8,
    goals: 60,
    goalsAgainst: 57,
    goalsDiff: 3,
    points: 35
};
var m_5 = { gameId: 121,
    name: "SC Freiburg",
    short: "SCF",
    pos: 4,
    prevPos: 4,
    matchdays: 25,
    wins: 7,
    ties: 11,
    defeats: 7,
    goals: 20,
    goalsAgainst: 40,
    goalsDiff: -20,
    points: 36
};
var m_6 = { gameId: 105,
    name: "Bayer 04 Leverkusen",
    short: "Bayer04",
    pos: 6,
    prevPos: 6,
    matchdays: 25,
    wins: 10,
    ties: 5,
    defeats: 10,
    goals: 36,
    goalsAgainst: 25,
    goalsDiff: 11,
    points: 35
}

var tableArray = [];
var teams = [m_1, m_2, m_3, m_4, m_5, m_6];
var firstOrder = (['-points','-goalsDiff','-goals']);


/*
 angular.module("root", [])
 .controller("Standings", ["$scope", "$filter", function ($scope, $filter) {
 var orderBy = $filter('orderBy');
 $scope.teams = teams;

 $scope.order = function(predicate, reverse) {
 teams = orderBy($scope.teams, predicate, reverse);
 $scope.standings = teams;
 }
 $scope.order(firstOrder);
 }]);
 */

angular.module('root', ['ngRoute', 'requestControllers', 'requestFilters', 'requestServices'])

function Standings($scope, $filter) {

    var orderBy = $filter('orderBy');
    var i = 1;
    $scope.teams = teams;

    $scope.order = function(predicate, reverse) {
        teams = orderBy($scope.teams, predicate, reverse);
        $scope.standings = teams;
    };
    $scope.order(firstOrder);
}


