'use strict';

angular.module('ChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.lines = [
      {
        name: 'Larry',
        time: '12:00',
        text: 'Whooooooooooa'
      },
      {
        name: 'Dave',
        time: '12:01',
        text: 'This is just placeholder text'
      }
    ];

    $scope.people = [
      {
        name: 'Larry'
      },
      {
        name: 'Dave'
      }
    ];

    $scope.chat = {};
  });
