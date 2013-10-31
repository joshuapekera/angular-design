angular.module('ChatApp')
  .controller('LoginCtrl', function ($scope, $modalInstance) {
    $scope.errors = [];
    $scope.user = {};
    $scope.user.name = '';
    $scope.form = {};

    $scope.login = function (e) {
      e.preventDefault();
      $scope.errors = [];
      if ($scope.form.login.$invalid) {
        $scope.errors.push({
          message: 'Invalid user name'
        });
        return;
      }

      return $modalInstance.close({
        name: $scope.user.name
      });
    };
  });
