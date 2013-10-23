'use strict';

describe('MainCtrl', function () {
  var $rootScope, $controller, $modal;
  // Instantiating the module with the controller
  beforeEach(module('ChatApp'));
  beforeEach(inject(function (_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;

    $modal = {
      open: function () {
        return {
          result: {
            then: function (callback) {
              callback({
                name: 'bar'
              });
            }
          }
        };
      }
    };
  }));

  it('should add a line to chat', inject(function (Socket) {
    $controller('MainCtrl', {
      $scope: $rootScope,
      $modal: $modal,
      Socket: Socket
    });

    expect(_($rootScope.data).isObject()).toBe(true);
    expect(_($rootScope.data.lines).isArray()).toBe(true);
    expect($rootScope.data.lines.length).toBe(1);

    $rootScope.chat.text = 'baz'

    $rootScope.sendLine().then(function () {
      expect(_($rootScope.sendLine).isFunction()).toBe(true);
      expect($rootScope.data.lines.length).toBe(2);
      expect($rootSCope.lines[1].user).toBe('bar');
      expect($rootScope.lines[1].text).toBe('baz');
    });
  }));
});
