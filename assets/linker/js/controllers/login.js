angular.module('ChatApp')
  .controller('LoginCtrl', function ($scope, $modalInstance) {
    $scope.errors = [];
    $scope.user = '';

    $scope.login = function (e) {
      e.preventDefault();
      $scope.errors = [];
      if ($scope.loginForm.$invalid) {
        $scope.errors.push({
          message: 'Invalid user name'
        });
        return;
      }

      return $modalInstance.close({
        name: $scope.user
      });
    };
  });
