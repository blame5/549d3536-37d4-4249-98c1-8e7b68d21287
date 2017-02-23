var webApp = angular.module('WebApp', ['ngMaterial', 'angularAudioRecorder'])
    .factory("WebService", function ($http, $location, $timeout) {
        var host = "http://" + $location.host() + ":" + $location.port();
        var serviceUrl = host + "/audio/service";

        var getAudioListUrl = serviceUrl + "/file/${bookId}";
        var getAudioFile = serviceUrl + "/file/${bookId}/${fileId}";

        return {
            getAudioList: function (bookId, callback) {
                $http.get(getAudioListUrl.replace('${bookId}', bookId)).then(function(response) {
                    callback(response.data)
                }, function(response) {

                })
            },
            getAudioFile: function (bookId, fileId, callback) {
                $http.get(getAudioFile.replace("${bookId}", bookId).replace("${fileId}", fileId)).then(function (response) {
                    callback(response.data)
                }, function (response) {

                })
            },
            getAudioFileUrl: function(bookId, fileId) {
                return getAudioFile.replace("${bookId}", bookId).replace("${fileId}", fileId);
            },
            getData: function () {

            }
        };
    }).controller('AudioController', function ($scope, WebService) {
        var rec = new Recorder(source)

        $scope.toggleRecording = function (e) {
            if (e.classList.contains("recording")) {
                // stop recording
                audioRecorder.stop();
                e.classList.remove("recording");
                audioRecorder.getBuffers(gotBuffers);
            } else {
                // start recording
                if (!audioRecorder)
                    return;
                e.classList.add("recording");
                audioRecorder.clear();
                audioRecorder.record();
            }
        }

    })