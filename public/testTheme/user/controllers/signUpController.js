'use strict';

angular.module('bs23commerce').controller('signUpController', ['$scope', '$timeout', '$location', 'userService',
    function($scope, $timeout, $location, userService) {

        //<editor-fold desc='Variable declaration'>
        $scope.user = {addresses: [],roles: []};
        $scope.newAddress = {};
        $scope.editAddress = {};
        //</editor-fold>

        $scope.addUser = function() {
            //userService.createUser();
            if($scope.user.email == undefined || $scope.user.phoneNumber == undefined || $scope.user.password == undefined ||
                $scope.user.firstName == undefined || $scope.user.gender == undefined) {
                $scope.requiredErrorMsg = true;
                return;
            }
            $scope.user.active = $scope.user.active || true;
            userService.createUser($scope.user).success(function(data){
                $scope.createSuccessMsg = data.msg;
                $timeout(function() {
                    $scope.createSuccessMsg = '';
                },2000);
            }).error(function(err) {
                $scope.createErrorMsg = err.msg;
                $timeout(function() {
                    $scope.createErrorMsg = '';
                },2000);
            });
        };
        $scope.myf = function() {
          console.log('jhjkhjk');
        };
    }
]);