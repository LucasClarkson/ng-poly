(function () {
  'use strict';

  angular
    .module('situations')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('situations', {
        url: '/situations',
        templateUrl: 'situations/situations.tpl.html',
        controller: 'SituationsCtrl',
        controllerAs: 'situations'
      });
  }
}());
