'use strict';

angular.module('bs23commerce').controller('signUpController', ['$scope', '$timeout', '$location', 'userService',
    function($scope, $timeout, $location, userService) {

        //<editor-fold desc='Variable declaration'>
        $scope.user = {addresses: [],roles: []};
        $scope.newAddress = {};
        $scope.editAddress = {};
        //</editor-fold>

        $scope.createNewUser = function() {
            console.log('get call');
            if($scope.user.email == undefined || $scope.user.phoneNumber == undefined || $scope.user.password == undefined ||
                $scope.user.firstName == undefined || $scope.user.gender == undefined) {
                $scope.requiredErrorMsg = true;
                return;
            }
            $scope.user.active = $scope.user.active || true;
            var createUserResponse = userService.createUser($scope.user);
            createUserResponse.$promise.then(function(promiseData) {
                    $scope.createSuccessMsg = promiseData.msg;
                    $timeout(function() {
                        $scope.createSuccessMsg = '';
                        $location.path('/User/List');
                    },2000);
                },
                function(error) {
                    $scope.createErrorMsg = error.data.msg;
                    $timeout(function() {
                        $scope.createErrorMsg = '';
                    },2000);
                });
        };
    }
]);