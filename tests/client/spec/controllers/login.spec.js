'use strict';

describe('LoginCtrl', function () {
  var $controller, $rootScope, $modalInstance, e, instantiateCtrl;

  beforeEach(module('ChatApp'));
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $modalInstance = {
      close: function () {
        return 'moo';
      }
    };

    e = {
      preventDefault: function () {
      }
    };

    instantiateCtrl = function () {
      $controller('LoginCtrl', {
        $scope: $rootScope,
        $modalInstance: $modalInstance
      });
    };
  }));

  it('should reject user submission if invalid', function () {
    instantiateCtrl();

    expect(_($rootScope.user).isObject()).toBe(true);
    expect($rootScope.user.name).toBe('');

    $rootScope.form.login = {
      $invalid: false
    };

    $rootScope.form.login.$invalid = true;

    var value = $rootScope.login(e);

    expect(_(value).isUndefined()).toBe(true);
  });
});
