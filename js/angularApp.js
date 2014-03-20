angular.module('Kiosk', [])


.controller('AppCtrl', ['$scope', '$location', '$http', '$filter', '$location', function AppCtrl($scope, $location, $http, $filter, $location) {
    $scope.search = function () {
        $http.post("http://overwatch.andy.me/service.asmx/SearchData", { clientGUID: '7eb6635c-0392-439b-958d-1413fc9c2dca', searchBy: 'Name', searchValue: 'Crawford' }).
            success(function (data, status) {
                $scope.results = data.d;
            });
    }

    $scope.scanQR = function () {
            var scanner = cordova.require("cordova/plugin/BarcodeScanner");

            alert(scanner);
        alert("scan!");
        scanner.scan(
            function (result) {
                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    }

} ]);

