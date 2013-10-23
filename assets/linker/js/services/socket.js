'use strict';

angular.module('ChatApp')
  .factory('Socket', function ($q, route) {
    var data = {};
    data.users = [];
    data.lines = [];

    socket.on('user:add', function (res) {
      data.users = res.users;
    });

    socket.on('line:add', function (res) {
      setData(res);
    });

    return {
      addUser: function (user) {
        var deferred;
        deferred = $q.defer();

        socket.post(route.forAddingAUser, {
          name: user,
          message: 'user:add'
        }, function (res) {
          setData(res);
          deferred.resolve(data);
        });

        return deferred.promise;
      },
      addLine: function (line) {
        var deferred;
        deferred = $q.defer();

        socket.post(route.forAddingALine, {
          user: line.user,
          text: line.text,
          message: 'line:add'
        }, function (res) {
          setData(res);
          deferred.resolve(data);
        });

        return deferred.promise;
      },
      data: function () {
        return data;
      }
    };

    function setData (response) {
      data.users = response.users;
      data.lines = response.lines;
    }
  });
