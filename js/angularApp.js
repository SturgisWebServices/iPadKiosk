angular.module('Kiosk', [])


.controller('AppCtrl', ['$scope', '$location', '$http', '$filter', '$location', function AppCtrl($scope, $location, $http, $filter, $location) {
    $scope.search = function () {
        $http.post("http://overwatch.andy.me/service.asmx/SearchData", { clientGUID: '7eb6635c-0392-439b-958d-1413fc9c2dca', searchBy: 'Name', searchValue: 'Crawford' }).
            success(function (data, status) {
                $scope.results = data.d;
            });
    }

} ]);

