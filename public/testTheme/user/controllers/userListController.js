'use strict';

angular.module('bs23commerce').controller('userListController', ['$scope', '$timeout', '$location', 'userService',
    function($scope, $timeout, $location, userService) {

        $scope.users = [];

        $scope.getUsers = function() {
            userService.getUsers().success(function(users) {
                $scope.users = users;
            }).error(function() {
                $scope.users = [];
            });
        }();
    }
]);