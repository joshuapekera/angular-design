'use strict';

describe('MainCtrl', function () {
  var $rootScope, $controller;
  // Instantiating the module with the controller
  beforeEach(module('ChatApp'));
  beforeEach(inject(function (_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  it('should add a line to chat', function () {
    $controller('MainCtrl', {
      $scope: $rootScope
    });

    expect($rootScope.lines.length).toBe(2);

    $rootScope.chat.text = 'foo'

    $rootScope.sendLine();

    expect(_($rootScope.sendLine).isFunction).toBe(true);
    expect($rootScope.lines.length).toBe(3);
    expect($rootScope.lines[2].text).toBe('foo');
  });
});
