'use strict';

angular.module('ChatApp', ['ui.bootstrap'])
  .config(function ($provide) {
    $provide.decorator('accordionGroupDirective', function ($delegate) {
      $delegate[0].templateUrl = '/linker/templates/accordion/accordion-group.html';

      return $delegate;
    });
    $provide.decorator('modalBackdropDirective', function ($delegate) {
      $delegate[0].templateUrl = '/linker/templates/modal/backdrop.html';
      
      return $delegate;
    });
    $provide.decorator('modalWindowDirective', function ($delegate) {
      $delegate[0].templateUrl = '/linker/templates/modal/window.html';
      
      return $delegate;
    });
  });
