'use strict';

angular.module('bs23commerce', []).service('userService', ['$http',
  function($http) {
      //console.log('get call');
    return {
        createUser: function(user) {
            return $http.post('/api/user', user);
            //console.log(user);
        },
        getUsers: function() {
            return $http.get('/api/user');
        }
    };
  }
]);
