angular.module('Kiosk', [])


.controller('AppCtrl', ['$scope', '$location', '$http', '$filter', '$location', function AppCtrl($scope, $location, $http, $filter, $location) {
    $scope.search = function () {
        $http.post("http://overwatch.andy.me/service.asmx/SearchData", { clientGUID: '7eb6635c-0392-439b-958d-1413fc9c2dca', searchBy: 'Name', searchValue: 'Crawford' }).
            success(function (data, status) {
                $scope.results = data.d;
            });
    }

    $scope.scanQR = function () {
        console.log("scanning");
        try {
            var scanner = cordova.require("cordova/plugin/BarcodeScanner");
            console.log("Scanner: " + scanner);

            scanner.scan(function (result) {

                alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);

                console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
                document.getElementById("info").innerHTML = result.text;
                console.log(result);
                /*
                if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
                }
                */

            }, function (error) {
                console.log("Scanning failed: ", error);
            });
        }
        catch (ex) {
            console.log("error: " + ex);
        }

    }

} ]);


var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {        
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

