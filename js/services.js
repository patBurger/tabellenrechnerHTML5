/**
 * SERVICES
 *
 * Created by pburger on 27.06.2014.
 */

var requestServices = angular.module("requestServices", ['ngResource']);

requestServices.factory('requestCurrentStandings', ['$resource',
    function($resource){
        return $resource('http://sport1apidev.freigabe.info/soccer/standings/matchday/:matchdayId', {}, {
            query: {method: 'GET', params:{matchdayId: '72'}, isArray: false}
        });
    }
]);