(function () {
  'use strict';

  angular
    .module('polaris')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
