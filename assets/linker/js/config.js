angular.module('ChatApp')
  .constant('config', {
    route: {
      forAddingAUser: '/api/user/add',
      forAddingALine: '/api/line/add'
    }
  })
  .factory('route', function (config) {
    return config.route;
  });
