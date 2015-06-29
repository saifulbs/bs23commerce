'use strict';

angular.module('bs23commerce').controller('userEditController', ['$scope', '$location', '$timeout', 'userService',
    function($scope, $location, $timeout, userService) {
        $scope.user = {};

        var userId = $location.absUrl().split('/')[5];
            //$location.path().split('/')[2];
        //console.log(userId);
        $scope.getUserById = function() {
          userService.getUserById(userId).success(function(user) {
              $scope.user = user;
          }).error(function(err) {
              $scope.user = {};
          });
        }();

        $scope.userUpdate = function() {
            userService.userUpdate($scope.user).success(function(data) {
                $scope.updateSuccessMsg = data.msg;
                $timeout(function() {
                    $scope.updateSuccessMsg = '';
                },2000);
            }).error(function(err) {
                $scope.updateErrorMsg = err.msg;
                $timeout(function() {
                    $scope.updateErrorMsg = '';
                },2000);
            });
        };

        $scope.userDelete = function(userId) {
            console.log('delete request');
          userService.userDelete(userId).success(function(data) {
              $scope.updateSuccessMsg = data.msg;
              $timeout(function() {
                  $scope.updateSuccessMsg = '';

                  $location.path('testTheme/user/list');
              },2000);
          }).error(function(err) {
                console.log('error');
              $scope.updateErrorMsg = err;
            });
        };
    }
]);
