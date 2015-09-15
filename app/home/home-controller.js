(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($mdSidenav) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.toggleSideNav = function () {
      $mdSidenav('left').toggle();
    };
  }
}());
