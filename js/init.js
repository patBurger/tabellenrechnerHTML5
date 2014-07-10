/**
 * Created by pburger on 24.06.2014.
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
            goals: 30,
            goalsAgainst: 24,
            goalsDiff: 6,
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

var tableArray = [];
var teams = [m_1, m_2, m_3, m_4, m_5];
var sortingConfig;
var init = new init();

function init(){
    setTableArray();
}

function setTableArray(){
//    teams.sort(function (a, b) {
//        if (b.points > a.points)
//            return 1;
//        if (b.points < a.points)
//            return -1;
//        // a must be equal to b
//        if (b.points == a.points){
//            if (b.goalsDiff > a.goalsDiff){
//                return 1;
//            }
//        }
//        return 0;
//    });
    teams.sort(predicate(
        {
            name: 'points',
            descending: true
        },
        {
            name: 'goalsDiff',
            descending: false
        },
        {
            name: 'goals',
            descending: false
        },
        {
            name: 'goalsAgainst',
            descending: false
        }));
    printConsole();
}

function printConsole(){
    for (i=0; i < teams.length; i++){
        console.log(teams[i].points + " " + teams[i].goalsDiff + " " + " " + teams[i].goals + " " + teams[i].goalsAgainst + " " + teams[i].name);
    }
}

function predicate() {
    var fields = [],
        n_fields = arguments.length,
        field,
        name,
        ascending,
        cmp;

    var default_cmp = function (a, b) {
            if (a === b) return 0;
            return a < b ? -1 : 1;
        },
        getCmpFunc = function (primer, ascending) {
            var dfc = default_cmp,
            // closer in scope
                cmp = default_cmp;
            if (primer) {
                cmp = function (a, b) {
                    return dfc(primer(a), primer(b));
                };
            }
            if (ascending) {
                return function (a, b) {
                    return -1 * cmp(a, b);
                };
            }
            return cmp;
        };

    // preprocess sorting options
    for (var i = 0; i < n_fields; i++) {
        field = arguments[i];
        if (typeof field === 'string') {
            name = field;
            cmp = default_cmp;
        } else {
            name = field.name;
            cmp = getCmpFunc(field.primer, field.ascending);
        }
        fields.push({
            name: name,
            cmp: cmp
        });
    }

    // final comparison function
    return function (A, B) {
        var a, b, name, result;
        for (var i = 0; i < n_fields; i++) {
            result = 0;
            field = fields[i];
            name = field.name;

            result = field.cmp(A[name], B[name]);
            if (result !== 0) break;
        }
        return result;
    };
}

function writeTable() {
    document.getElementById("table-standings").innerHTML = "<table><tr></tr>"
}