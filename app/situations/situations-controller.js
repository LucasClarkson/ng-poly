(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name situations.controller:SituationsCtrl
   *
   * @description
   *
   */
  angular
    .module('situations')
    .controller('SituationsCtrl', SituationsCtrl);

  function SituationsCtrl() {
    var vm = this;
    vm.ctrlName = 'SituationsCtrl';
  }
}());
