'use strict';

angular.module('bs23commerce').factory('userService', ['$http', '$resource',
  function($http, $resource) {

    return {
        searchUsers: function(roles, email, name){
            if(email === undefined)
                email='';
            if(name === undefined)
                name='';
            if(roles === undefined)
                roles='';
            var searchRequest = $resource('/auth/search/user', {}, {
                'get': {method: 'GET', isArray: true}
            });
            var searchResponse = searchRequest.get({roles: roles, email: email, name: name});
            return searchResponse;
        },
        getUserById: function(userId) {
            var userById = $resource('/auth/user/:userId', {userId:'@userId'});
            return userById.get({userId: userId});
        },
        changeUserPassword: function(userId, password) {
            var changePassword = $resource('/auth/user/changePassword', {userId: '@userId', password: '@password'}, {
                'update': {method: 'PUT'}
            });
            return changePassword.update({userId: userId, password: password});
        },
        updateUserInfo: function(user) {
            var updateUser = $resource('/auth/user/update', {}, {
               'update': {method: 'PUT'}
            });
            return updateUser.update(user);
        },
        deleteUserById: function(userId) {
            var deleteUser = $resource('/auth/user/delete', {userId: '@userId'}, {
                'delete': {method: 'DELETE'}
            });
            return deleteUser.delete({userId: userId});
        },
        createUser: function(user) {
            var addUser = $resource('/auth/user/create', {}, {
                'create': {method: 'POST'}
            });
            return addUser.create(user);
        }
    };
  }
]);