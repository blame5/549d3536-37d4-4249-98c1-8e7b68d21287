var webApp = angular.module('WebApp' ,  ['ngMaterial', 'angularAudioRecorder'])
.factory("WebService", function ($http, $location, $timeout){
    return {getData: function(){

    }};
}).controller('AudioController', function($scope, WebService){
        var rec = new Recorder(source)

        $scope.toggleRecording = function( e ) {
            if (e.classList.contains("recording")) {
                // stop recording
                audioRecorder.stop();
                e.classList.remove("recording");
                audioRecorder.getBuffers( gotBuffers );
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