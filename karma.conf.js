module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'assets/linker/bower_components/lodash/dist/lodash.js',
      'assets/linker/bower_components/angular/angular.js',
      'assets/linker/bower_components/angular-mocks/angular-mocks.js',
      'assets/linker/bower_components/angular-bootstrap/ui-bootstrap.js',
      'assets/linker/js/angularApp.js',
      'assets/linker/js/config.js',
      'tests/client/specHelper.js',
      'assets/linker/js/controllers/main.js',
      'assets/linker/js/controllers/login.js',
      'assets/linker/js/services/socket.js',
      'tests/client/spec/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    autoWatch: true,
    singleRun: false,
    browsers: ['Chrome'],
    reporters: ['progress']
  });
};
