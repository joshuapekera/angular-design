'use strict';

angular.module('ChatApp')
  .controller('MainCtrl', function ($scope, $modal, Socket) {
    $scope.data = Socket.data();

    $scope.user = {
      name: ''
    };
    $scope.chat = {};

    $scope.sendLine = function () {
      return Socket.addLine({
        user: $scope.user,
        text: $scope.chat.text
      }).then(function () {
        return $scope.chat.text = '';
      });
    };

    // Initialization
    $modal.open({
      controller: 'LoginCtrl',
      templateUrl: 'linker/templates/loginModal.html',
      backdrop: 'static',
      keyboard: false
    }).result.then(function (user) {
      $scope.user.name = user.name;
      Socket.addUser({
        user: $scope.user
      });
    });
  });
