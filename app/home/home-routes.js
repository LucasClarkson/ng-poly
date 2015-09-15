(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
          url: '/home',
          views: {
              '': {
                  templateUrl: 'home/home.tpl.html',
                  controller: 'HomeCtrl',
                  controllerAs: 'home'
              },
              'map@home': {
                  templateUrl: 'map/map.tpl.html',
                  controller: 'MapCtrl',
                  controllerAs: 'map'
              },
              'situations@home': {
                templateUrl: 'situations/situations.tpl.html',
                controller: 'SituationsCtrl',
                controllerAs: 'situations'
              }
          }
      });
  }
}());
